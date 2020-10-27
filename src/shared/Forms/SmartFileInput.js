import moment                   from 'moment'
import React, {
    useEffect,
    useState
}                               from 'react'
import Dropzone                 from 'react-dropzone'
import 'react-image-crop/dist/ReactCrop.css'
import Div                     from '../Basic/Div'
import Img        from '../Basic/Img'
import CropPortal from './CropPortal'
import S3Img      from '../Basic/S3Img'
import {genericCardImageStyle} from '../../themes/business'
import {
    imageDropZonePreviewStyle,
    imageDropZonePreviewWrapperStyle,
    imageDropZoneStyle,
    imageDropZoneWrapperStyle
}                              from '../../themes/elements'
import {slugify}               from '../../utils/slugify'
import {globals}               from '../../variables/styles'

const SmartFileInput = ({formik, id, cropWidth, cropHeight, s3Path}) => {
    const [cropPortalOpen, setCropPortalOpen] = useState(false)

    const [uploadedImage, setUploadedImage] = useState({})
    const {uploadBlob, uploadType, sanitizedName} = uploadedImage

    const [crop, setCrop] = useState({width: cropWidth, aspect: 1})

    const [croppedImage, setCroppedImage] = useState()

    const [previewBlob, setPreviewBlob] = useState('')

    const {photo} = formik.values


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
        formik.setFieldValue('image', croppedImage)
        formik.setFieldValue('photo', sanitizedName)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [croppedImage, sanitizedName])

    return (
        <Div theme={imageDropZoneWrapperStyle}>
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
                        <input {...getInputProps()} />
                        <p>Drag and Drop or click to select files</p>
                    </Div>
                )}
            </Dropzone>

            <Div theme={imageDropZonePreviewWrapperStyle}>
                {previewBlob && (
                    <Img
                        alt="Crop preview"
                        src={previewBlob}
                        theme={imageDropZonePreviewStyle}
                    />
                )}
                {photo && (
                    <S3Img
                        url={photo}
                        alt={'Business Image Preview'}
                        theme={genericCardImageStyle}
                    />
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
    )
}

export default SmartFileInput