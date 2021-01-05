import {globals}                 from 'config/styles'
import moment                    from 'moment'
import React, {
    memo,
    useEffect,
    useState
}                                from 'react'
import Dropzone                  from 'react-dropzone'
import 'react-image-crop/dist/ReactCrop.css'
import Div                       from 'shared/Basic/Div'
import Img                       from 'shared/Basic/Img'
import S3Img                     from 'shared/Basic/S3Img'
import Span                      from 'shared/Basic/Span'
import {genericCardImageStyle}   from 'shared/Cards/styles'
import {uploadErrorMessageStyle} from 'shared/Forms/styles'
import {slugify}                 from 'utils/slugify'
import CropPortal                from './CropPortal'
import {
    defaultFieldHeadingStyle,
    imageDropZonePreviewStyle,
    imageDropZonePreviewWrapperStyle,
    imageDropZoneStyle,
    imageDropZoneWrapperStyle
}                                from './styles'

const Upload = memo(({formik, id, cropWidth, cropHeight, s3Path, inputLabel, className, errorMessage}) => {
    const [cropPortalOpen, setCropPortalOpen] = useState(false)
    const [uploadedImage, setUploadedImage] = useState({})
    const {uploadBlob, uploadType, sanitizedName} = uploadedImage
    const [crop, setCrop] = useState({width: cropWidth, aspect: 1})
    const [croppedImage, setCroppedImage] = useState()
    const [previewBlob, setPreviewBlob] = useState('')
    const {photo} = formik.initialValues

    const makeClientCrop = async (crop, percentageCrop) => {
        if (uploadBlob && crop.width && crop.height) {
            let htmlImg = new Image()
            htmlImg.src = uploadBlob
            createCropPreview(htmlImg, percentageCrop, sanitizedName)
        }
    }

    const createCropPreview = async (image, crop, fileName) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const naturalWidth = image.naturalWidth
        const naturalHeight = image.naturalHeight
        canvas.width = cropWidth
        canvas.height = cropHeight
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
                window.URL.revokeObjectURL(previewBlob)

                setPreviewBlob(window.URL.createObjectURL(blob))
                setCroppedImage(new File([blob], fileName, {
                    type: uploadType
                }))
            }, 'image/jpeg')
        })
    }

    const handleAcceptedFile = acceptedFiles => {
        //set state for uploaded file blob and type
        setUploadedImage({
            uploadBlob: URL.createObjectURL(acceptedFiles[0]),
            uploadType: acceptedFiles[0].type,
            sanitizedName: s3Path + slugify(acceptedFiles[0].name + '_' + moment().format())
        })

        //open crop portal
        setCropPortalOpen(true)
    }

    useEffect(() => {
        formik.setFieldValue('image', croppedImage ? croppedImage : '')
        formik.setFieldValue('photo', sanitizedName ? sanitizedName : '')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [croppedImage, sanitizedName])

    return (
        <>
            <Div theme={defaultFieldHeadingStyle}>{inputLabel}</Div>
            <Div theme={imageDropZoneWrapperStyle} className={className ? className : ''}>
                <Dropzone
                    id={id}
                    accept={globals.extensions}
                    maxFiles={1}
                    multiple={false}
                    onDragOver={() => console.log('drag over')}
                    onDragEnter={() => console.log('drag enter')}
                    onDragLeave={() => console.log('drag leave')}
                    onDropAccepted={(acceptedFiles) => handleAcceptedFile(acceptedFiles)}
                    onDropRejected={() => console.log('error')}
                >
                    {({getRootProps, getInputProps}) => (
                        <Div {...getRootProps()} theme={imageDropZoneStyle}>
                            <Span theme={uploadErrorMessageStyle}>{errorMessage}</Span>
                            <input {...getInputProps()} />
                            <p>Drag and Drop or click to select files</p>
                        </Div>
                    )}
                </Dropzone>

                <Div theme={imageDropZonePreviewWrapperStyle}>
                    {(previewBlob && (
                        <Img
                            alt="Crop preview"
                            src={previewBlob}
                            theme={imageDropZonePreviewStyle}
                        />
                    )) || (
                        <>
                            {photo && (
                                <S3Img
                                    url={photo}
                                    alt={'Post Image Preview'}
                                    theme={genericCardImageStyle}
                                />
                            )}
                        </>
                    )}
                </Div>
                <CropPortal
                    isOpen={cropPortalOpen}
                    setIsOpen={setCropPortalOpen}
                    uploadBlob={uploadBlob}
                    setCrop={setCrop}
                    crop={crop}
                    makeClientCrop={makeClientCrop}
                    previewBlob={previewBlob}
                />
            </Div>
        </>
    )
})

export default Upload