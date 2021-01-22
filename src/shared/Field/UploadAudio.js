import {CDN}           from 'config'
import {play}          from 'config/icons/fa'
import {globals}       from 'config/styles'
import moment          from 'moment'
import React, {
    memo,
    useContext,
    useEffect,
    useState
}                      from 'react'
import Dropzone        from 'react-dropzone'
import 'react-image-crop/dist/ReactCrop.css'
import ReactPlayer     from 'react-player'
import Div             from 'shared/Basic/Div'
import Icon            from 'shared/Basic/Icon'
import MotionDiv       from 'shared/Basic/MotionDiv'
import Span            from 'shared/Basic/Span'
import {playerContext} from 'shared/Containers/PlayerController'
import {
    audioUploadPreviewWrapperStyle,
    uploadErrorMessageStyle
}                      from 'shared/Field/styles'
import {
    bytesToMegaBytes,
    isEmpty
}                      from 'utils/helpers'
import {slugify}       from 'utils/slugify'
import {
    imageDropZonePreviewWrapperStyle,
    imageDropZoneStyle,
    imageDropZoneWrapperStyle
}                      from './styles'

const UploadAudio = memo(({formik, id, file, s3Path, inputLabel, className, errorMessage}) => {
    const [uploadedAudio, setUploadedAudio] = useState({})
    const [sanitizedFile, setSanitizedFile] = useState({})
    const {uploadBlob, uploadType, sanitizedName} = uploadedAudio
    const {audio} = formik.initialValues
    const {setCurrentMedia, currentMedia, setPlaying} = useContext(playerContext)

    const handleAcceptedFile = acceptedFiles =>
        setUploadedAudio({
            uploadBlob: new Blob([acceptedFiles[0]], {type: acceptedFiles[0].type}),
            blobUrl: URL.createObjectURL(acceptedFiles[0]),
            uploadType: acceptedFiles[0].type,
            sanitizedName: s3Path + slugify(acceptedFiles[0].name + '_' + moment().format()),
            file: acceptedFiles[0]
        })

    useEffect(() => {
        if (!isEmpty(uploadedAudio)) {
            setSanitizedFile(new File([uploadBlob], sanitizedName, {
                type: uploadType,
            }))
           setCurrentMedia([...currentMedia, uploadedAudio.blobUrl])
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadedAudio])

    useEffect(() => {
        formik.setFieldValue(file, sanitizedFile ? sanitizedFile : '')
        formik.setFieldValue(id, sanitizedName ? sanitizedName : '')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sanitizedFile, sanitizedName])

    return (
        <>
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
                            <p>Drag and Drop or Click to add an {inputLabel}</p>
                        </Div>
                    )}
                </Dropzone>

                <Div theme={imageDropZonePreviewWrapperStyle}>
                    {(
                        !isEmpty(uploadedAudio) && (
                            <Div theme={audioUploadPreviewWrapperStyle}>
                                <Div>Type: </Div>
                                <Div>{sanitizedFile.type}</Div>
                                <Div>Size: </Div>
                                <Div>{bytesToMegaBytes(sanitizedFile.size)}</Div>
                                <Div>Name: </Div>
                                <Div>{uploadedAudio.file.name}</Div>
                                <Div onClick={async () => {
                                    await setPlaying(true)
                                }}>
                                    <Icon icon={play} theme={{pointerEvents: 'none'}}/>
                                </Div>

                            </Div>
                        ))
                    || (audio && (
                        <Div>
                            <ReactPlayer
                                url={CDN + audio}
                                controls
                            />
                        </Div>
                    ))}
                </Div>
            </Div>
        </>
    )
})

export default UploadAudio