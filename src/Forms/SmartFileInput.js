import moment            from 'moment'
import React, {useState} from 'react'
import Dropzone          from 'react-dropzone'
import Div             from '../Basic/Div'
import {dropZoneStyle} from '../themes/elements'
import {slugify}       from '../utils/slugify'
import {globals}       from '../variables/styles'

const SmartFileInput = ({formik, name, id}) => {
    {
        /*******************

         IMAGE EDITOR PORTAL

         *******************/
    }
    {/*<FormPortal*/}
    {/*    isOpen={isFormPortalOpen}*/}
    {/*    setIsOpen={setIsFormPortalOpen}*/}
    {/*>*/}
    {/*    /!*<Overlay isOpen={isFormPortalOpen} />*!/*/}
    {/*    <ReactCrop*/}
    {/*        src={photo}*/}
    {/*        crop={crop}*/}
    {/*        onChange={(c) => setCrop(c)}*/}
    {/*        onComplete={makeClientCrop}*/}
    {/*    />*/}
    {/*    {previewUrl && (*/}
    {/*        <Div theme={dropZoneStyle.cropPreview}>*/}
    {/*            <Img*/}
    {/*                alt="Crop preview"*/}
    {/*                src={previewUrl}*/}
    {/*            />*/}
    {/*        </Div>*/}
    {/*    )}*/}
    {/*</FormPortal>*/}


    const [isFormPortalOpen, setIsFormPortalOpen] = useState(false)
    const [crop, setCrop] = useState({
        width: 600,
        aspect: 1
    })
    const [croppedImage, setCroppedImage] = useState('')



    // const makeClientCrop = async (crop, percentageCrop) => {
    //     if (photo && crop.width && crop.height) {
    //         let htmlImgEnt = new Image()
    //         htmlImgEnt.src = photo
    //
    //         createCropPreview(htmlImgEnt, percentageCrop, uploadedFileName)
    //     }
    // }
    //
    // const createCropPreview = async (image, crop, fileName) => {
    //     const canvas = document.createElement('canvas')
    //     const naturalWidth = image.naturalWidth
    //     const naturalHeight = image.naturalHeight
    //     canvas.width = 500
    //     canvas.height = 500
    //     const ctx = canvas.getContext('2d')
    //
    //
    //     ctx.drawImage(
    //         image,
    //         Math.round((crop.x / 100) * naturalWidth),
    //         Math.round((crop.y / 100) * naturalHeight),
    //         Math.round((crop.width / 100) * naturalWidth),
    //         Math.round((crop.height / 100) * naturalHeight),
    //         0,
    //         0,
    //         canvas.width,
    //         canvas.height
    //     )
    //
    //     return new Promise((resolve, reject) => {
    //         canvas.toBlob(blob => {
    //             if (!blob) {
    //                 reject(new Error('Canvas is empty'))
    //                 return
    //             }
    //             blob.name = fileName
    //             window.URL.revokeObjectURL(previewUrl)
    //             setPreviewUrl(window.URL.createObjectURL(blob))
    //             setCroppedImage(new File([blob], uploadedFileName, {
    //                 type: uploadedFile.type
    //             }))
    //
    //         }, 'image/jpeg')
    //     })
    // }

    return (
        <Dropzone
            id={id}
            accept={globals.extensions}
            maxFiles={1}
            multiple={false}
            onDragOver={() => console.log('drag over')}
            onDragEnter={() => console.log('drag enter')}
            onDragLeave={() => console.log('drag leave')}
            onDropAccepted={(acceptedFiles) => formik.setFieldValue(name, slugify(acceptedFiles[0].name + '_' + moment().format()))}
            onDropRejected={() => console.log('error')}
        >
            {({getRootProps, getInputProps}) => (
                <Div {...getRootProps()} theme={dropZoneStyle}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </Div>
            )}
        </Dropzone>
    )
}

export default SmartFileInput