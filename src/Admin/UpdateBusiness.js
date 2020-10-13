import ClassicEditor     from '@ckeditor/ckeditor5-build-classic'
import CKEditor          from '@ckeditor/ckeditor5-react'
import React, {
    useEffect,
    useState
}                        from 'react'
import Dropzone          from 'react-dropzone-uploader'
import ReactCrop         from 'react-image-crop'
import {connect}         from 'react-redux'
import {
    getBusiness,
    updateBusiness
}                        from '../api/apiAdmin'
import {isAuthenticated} from '../api/apiAuth'
import Div               from '../Basic/Div'
import Form              from '../Basic/Form'
import H2                from '../Basic/H2'
import H3                from '../Basic/H3'
import Img               from '../Basic/Img'
import SmartInput from '../Basic/SmartInput'
import CropPortal from '../Elements/CropPortal'
import GetS3Image from '../Elements/GetS3Image'
import {
    dropZoneStyle,
    genericButtonStyle
}                        from '../themes/elements'
import {
    defaultCKEditorStyle,
    defaultFieldHeadingStyle,
    defaultNewFormStyle
}                        from '../themes/forms'
import {
    showError,
    showLoading,
    showSuccess
}                        from '../utils/notifications'

const UpdateBusiness = ({pathname}) => {
    const {user, token} = isAuthenticated()
    const [isFormPortalOpen, setIsFormPortalOpen] = useState(false)
    const [crop, setCrop] = useState({
        width: 600,
        aspect: 1
    })
    const [croppedImage, setCroppedImage] = useState('')
    const [ImagePreviewMeta, setImagePreviewMeta] = useState()
    const [previewUrl, setPreviewUrl] = useState()
    const currentSlug = pathname.split("/").pop()


    const [values, setValues] = useState({
        name: '',
        business: '',
        profileImageUrl: '',
        slug: '',
        description: '',
        photo: '',
        uploadedFile: undefined,
        uploadedFileName: '',
        loading: false,
        error: '',
        createdBusiness: '',
        redirectToProfile: false,
        formData: ''
    })

    const {
        name,
        business,
        profileImageUrl,
        slug,
        description,
        photo,
        uploadedFile,
        uploadedFileName,
        loading,
        error,
        createdBusiness,
        redirectToProfile,
        formData,
    } = values


    const init = slug => {
        getBusiness(slug).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                // populate the state
                setValues({
                    ...values,
                    business: data,
                    name: data.name,
                    slug: data.slug,
                    description: data.description,
                    profileImageUrl: data.profileImageUrl,
                    formData: new FormData()
                })


            }
        })
    }

    // const destroy = businessId => {
    //     deleteBusiness(businessId, _id, token).then(data => {
    //         if (data.error) {
    //             console.log(data.error)
    //         } else {
    //             //loadBusinesses()
    //         }
    //     })
    // }


    useEffect(() => {
      //  init(currentSlug)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        // formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const handleInputChange = (label, value) => {
        formData.set(label, value)
        setValues({...values, [label]: value})
    }


    const handleRichTextChange = (value) => {
        // formData.set('description', value)
        //    setValues({...values, [name]: value})
    }

    const handlePhotoChange = ({file}) => {
        setValues({
            ...values,
            ['uploadedFile']: file,
            ['photo']: URL.createObjectURL(file)
        })
    }

    const makeClientCrop = async (crop, percentageCrop) => {
        if (photo && crop.width && crop.height) {
            let htmlImgEnt = new Image()
            htmlImgEnt.src = photo

            createCropPreview(htmlImgEnt, percentageCrop, uploadedFileName)
        }
    }

    const createCropPreview = async (image, crop, fileName) => {
        const canvas = document.createElement('canvas')
        const naturalWidth = image.naturalWidth
        const naturalHeight = image.naturalHeight
        canvas.width = 500
        canvas.height = 500
        const ctx = canvas.getContext('2d')


        ctx.drawImage(
            image,
            Math.round((crop.x / 100) * naturalWidth),
            Math.round((crop.y / 100) * naturalHeight),
            Math.round((crop.width / 100) * naturalWidth),
            Math.round((crop.height / 100) * naturalHeight),
            0,
            0,
            canvas.width,
            canvas.height
        )

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    reject(new Error('Canvas is empty'))
                    return
                }
                blob.name = fileName
                window.URL.revokeObjectURL(previewUrl)
                setPreviewUrl(window.URL.createObjectURL(blob))
                setCroppedImage(new File([blob], uploadedFileName, {
                    type: uploadedFile.type
                }))

            }, 'image/jpeg')
        })
    }


    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error: '', loading: true})

        updateBusiness(currentSlug, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    loading: false,
                    error: false,
                    redirectToProfile: true,
                    createdBusiness: data.name
                })
            }
        })
    }

    return (
        <Div>
            <Div>
                {showError(error)}
                {showSuccess(createdBusiness)}
                {showLoading(loading)}
                <Form
                    onSubmit={clickSubmit}
                    theme={defaultNewFormStyle}
                >
                    <H2 theme={defaultNewFormStyle.heading}>EditBusiness</H2>
                    <Div theme={defaultNewFormStyle.inner}>
                        <Div theme={dropZoneStyle}>
                            <Dropzone
                                onChangeStatus={handlePhotoChange}
                                accept="image/*"
                                inputContent="Drag Image or Click to Add"
                                maxFiles={1}
                                PreviewComponent={(props) => {
                                    setImagePreviewMeta(props.fileWithMeta)
                                    return (
                                        <>
                                            <Img
                                                alt="Crop preview"
                                                src={previewUrl}
                                                theme={defaultNewFormStyle.cropImage}
                                            />
                                        </>
                                    )
                                }}
                            />


                            {ImagePreviewMeta && ImagePreviewMeta.meta.status !== 'removed' && (
                                <Div
                                    onClick={() => {
                                        ImagePreviewMeta.remove()
                                    }}
                                    theme={dropZoneStyle.removeButton}
                                >
                                    Remove
                                </Div>
                            )}

                            {business && (
                                <GetS3Image url={profileImageUrl}/>
                            )}


                            <CropPortal isOpen={isFormPortalOpen} setIsOpen={setIsFormPortalOpen}>
                                <ReactCrop
                                    src={photo}
                                    crop={crop}
                                    onChange={(c) => setCrop(c)}
                                    onComplete={makeClientCrop}
                                />
                                {previewUrl && (
                                    <Div theme={dropZoneStyle.cropPreview}>
                                        <Img
                                            alt="Crop preview"
                                            src={previewUrl}
                                        />
                                    </Div>
                                )}
                            </CropPortal>

                        </Div>


                        <Div>
                            <Div className="form-group">
                                <label className="btn btn-secondary">
                                    <input onChange={handleChange('photo')} type="file" name="photo"
                                           accept="image/*"/>
                                </label>
                            </Div>

                            <Div className="form-group">
                                <SmartInput/>
                                <label className="text-muted">Name</label>
                                <input onChange={handleChange('name')} type="text" className="form-control"
                                       value={name}/>
                            </Div>
                            <H3 theme={defaultFieldHeadingStyle}>
                                Business Description
                            </H3>
                            <Div theme={defaultCKEditorStyle}>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={description}
                                    value={description}
                                    onChange={(event, editor) => {
                                        handleRichTextChange(editor.getData())
                                    }}
                                />
                            </Div>

                            <Div as="button" theme={genericButtonStyle}>
                                Update Business
                            </Div>
                        </Div>

                    </Div>
                </Form>
            </Div>
        </Div>
    )
}


const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
})

export default connect(mapStateToProps)(UpdateBusiness)
