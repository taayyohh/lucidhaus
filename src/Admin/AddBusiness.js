import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor      from '@ckeditor/ckeditor5-react'
import moment        from 'moment'
import React, {
    useEffect,
    useState
}                    from 'react'

import Dropzone          from 'react-dropzone-uploader'
import ReactCrop         from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import {Redirect}        from 'react-router-dom'
import {
    createBusiness,
    getSignedRequest
}                        from '../api/apiAdmin'
import {isAuthenticated} from '../api/apiAuth'
import Div               from '../Basic/Div'
import Form              from '../Basic/Form'
import H2                from '../Basic/H2'
import H3                from '../Basic/H3'
import Img               from '../Basic/Img'
import SmartInput        from '../Basic/SmartInput'
import FormPortal        from '../Elements/FormPortal'
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
}                from '../utils/notifications'
import {slugify} from '../utils/slugify'
import {globals} from '../variables/styles'

const AddBusiness = () => {
    const {user, token} = isAuthenticated()
    const [isFormPortalOpen, setIsFormPortalOpen] = useState(false)
    const [crop, setCrop] = useState({
        width: 600,
        aspect: 1
    })
    const [croppedImage, setCroppedImage] = useState('')
    const [ImagePreviewMeta, setImagePreviewMeta] = useState()
    const [previewUrl, setPreviewUrl] = useState()


    const [values, setValues] = useState({
        name: '',
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


    useEffect(() => {
        setValues({
            ...values,
            formData: new FormData()
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // toggle form portal
    useEffect(() => {
        if (!ImagePreviewMeta || ImagePreviewMeta.meta.status === 'removed')
            setIsFormPortalOpen(false)
        else {
            setIsFormPortalOpen(true)
        }

    }, [ImagePreviewMeta, setIsFormPortalOpen, uploadedFileName])

    // sanitize uploaded file name
    useEffect(() => {
        if (!!uploadedFile)
            globals.extensions.map((ext) => {
                if (uploadedFile.name.includes(ext)) {
                    setValues({
                            ...values,
                            ['uploadedFileName']: slugify(uploadedFile.name.replace(ext, '') + '_' + moment().format())
                        }
                    )
                }
            })
    }, [uploadedFile])

    const handleInputChange = (label, value) => {
        formData.set(label, value)
        setValues({...values, [label]: value})
    }

    const handleRichTextChange = (value) => {
        formData.set('description', value)
        setValues({...values, [name]: value})
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


    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to={`/admin/business/update/${slug}`}/>
            }
        }
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error: '', loading: true})

        //set uploaded file name
        formData.set('profileImageUrl', uploadedFileName)

        // SUBMIT TO S3 AND GET URL
        getSignedRequest(user._id, token, croppedImage, 'artist-profile')


        createBusiness(user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setValues({
                        ...values,
                        name: '',
                        slug: slugify(name),
                        description: '',
                        photo: '',
                        loading: false,
                        redirectToProfile: true,
                        createdBusiness: data.name
                    })
                }
            })
    }


    return (
        <>
            {showError(error)}
            {showSuccess(createdBusiness)}
            {showLoading(loading)}
            {redirectUser()}


            <Form onSubmit={clickSubmit} theme={defaultNewFormStyle}>
                <H2 theme={defaultNewFormStyle.heading}>Create Business</H2>
                <Div theme={defaultNewFormStyle.inner}>

                    <Div theme={defaultNewFormStyle.innerLeft}>
                        <Div theme={defaultNewFormStyle.imageSection}>
                            <Div theme={dropZoneStyle} className="dropbzone inner">
                                <Dropzone
                                    onChangeStatus={handlePhotoChange}
                                    accept="image/*"
                                    inputContent="Drag Image or Click to Add"
                                    maxFiles={1}
                                    PreviewComponent={(props) => {
                                        setImagePreviewMeta(props.fileWithMeta)
                                        return (
                                            <Img
                                                alt="Crop preview"
                                                src={previewUrl}
                                                theme={defaultNewFormStyle.cropImage}
                                            />
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
                            </Div>


                        </Div>
                    </Div>

                    <Div theme={defaultNewFormStyle.innerRight}>
                        <SmartInput
                            label={'name'}
                            handleChange={handleInputChange}
                        />
                        <H3 theme={defaultFieldHeadingStyle}>Business Description</H3>
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
                    </Div>


                    <Div
                        as="button"
                        theme={{...genericButtonStyle, ...defaultNewFormStyle.button}}
                    >
                        Create Business
                    </Div>
                </Div>
            </Form>

            {
                /*******************

                 IMAGE EDITOR PORTAL

                 *******************/
            }
            <FormPortal
                isOpen={isFormPortalOpen}
                setIsOpen={setIsFormPortalOpen}
            >
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
            </FormPortal>
        </>
    )
}

export default AddBusiness