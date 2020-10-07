export const createCropPreview = async (image, crop, fileName) => {
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