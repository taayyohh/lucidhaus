import moment          from 'moment'
import React, {
    useEffect,
    useState
}                      from 'react'
import Dropzone        from 'react-dropzone'
import 'react-image-crop/dist/ReactCrop.css'
import Div             from '../Basic/Div'
import Img             from '../Basic/Img'
import CropPortal from '../Elements/CropPortal'
import {
    dropZoneStyle,
    imageDropZonePreviewStyle,
    imageDropZonePreviewWrapperStyle,
    imageDropZoneWrapperStyle
} from '../themes/elements'
import {slugify}  from '../utils/slugify'
import {globals}       from '../variables/styles'

const SmartFileInput = ({formik, name, id, cropWidth, cropHeight, s3Path}) => {
    const [cropPortalOpen, setCropPortalOpen] = useState(false)

    const [uploadedImage, setUploadedImage] = useState({})
    const {uploadBlob, uploadType, sanitizedName} = uploadedImage

    const [crop, setCrop] = useState({width: 600, aspect: 1})

    const [croppedImage, setCroppedImage] = useState()

    const [previewBlob, setPreviewBlob] = useState('')


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

        const base64Image = canvas.toDataURL('image/jpeg')
        console.log('base 64', base64Image)

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    reject(new Error('Canvas is empty'))
                    return
                }
                blob.name = fileName
                window.URL.revokeObjectURL(previewBlob)

                setPreviewBlob(window.URL.createObjectURL(blob))
                ///TODO: need to serialize
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
            sanitizedName: slugify(acceptedFiles[0].name + '_' + moment().format())
        })

        //open crop portal
        setCropPortalOpen(true)
    }

    useEffect(() => {
        formik.setFieldValue('image', croppedImage)

        //sanitize file name
        formik.setFieldValue(name, sanitizedName)


    }, [croppedImage])

    return (
        <>
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
                        <Div {...getRootProps()} theme={dropZoneStyle}>
                            <input {...getInputProps()} />
                            <p>Drag and Drop or click to select files</p>
                        </Div>
                    )}
                </Dropzone>

                {previewBlob && (
                    <Div theme={imageDropZonePreviewWrapperStyle}>
                        <Img
                            alt="Crop preview"
                            src={previewBlob}
                            theme={imageDropZonePreviewStyle}
                        />
                    </Div>
                )}
            </Div>


            <CropPortal
                isOpen={cropPortalOpen}
                setIsOpen={setCropPortalOpen}
                uploadBlob={uploadBlob}
                setCrop={setCrop}
                crop={crop}
                setCropPortalOpen={setCropPortalOpen}
                makeClientCrop={makeClientCrop}
                previewBlob={previewBlob}
            />

        </>
    )
}

export default SmartFileInput