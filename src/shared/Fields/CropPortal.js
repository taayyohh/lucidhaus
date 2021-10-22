import {times}              from 'config/icons'
import React                from 'react'
import ReactCrop            from 'react-image-crop'
import {Portal}             from 'react-portal'
import Div                  from 'shared/Basic/Div'
import Icon                 from 'shared/Basic/Icon'
import Img                  from 'shared/Basic/Img'
import MotionDiv            from 'shared/Basic/MotionDiv'
import {imageDropZoneStyle} from './styles'

const CropPortal = ({isOpen, setIsOpen, uploadBlob, setCrop, crop, makeClientCrop, previewBlob}) => {
    const cropPortalVariants = {
        initial: {
            top: '100vh',
            opacity: 0
        },
        animate: {
            top: '5vh',
            opacity: 1
        }
    }

    return (
        <Portal>
            <MotionDiv
                variants={cropPortalVariants}
                initial="initial"
                animate={isOpen ? 'animate' : 'initial'}
                theme={imageDropZoneStyle.portal}
            >
                <Div theme={imageDropZoneStyle.portalInner}>
                    <Div
                        theme={imageDropZoneStyle.close}
                        onClick={() => setIsOpen(false)}
                    >
                        <Icon icon={times} theme={imageDropZoneStyle.closeIcon}/>
                    </Div>
                    {uploadBlob && (
                        <ReactCrop
                            src={uploadBlob}
                            crop={crop}
                            onChange={(c) => setCrop(c)}
                            onComplete={makeClientCrop}
                        />
                    )}

                    {previewBlob && (
                        <Div theme={imageDropZoneStyle.cropPreview}>
                            <Img
                                alt="Crop preview"
                                src={previewBlob}
                            />
                        </Div>
                    )}
                </Div>
            </MotionDiv>
        </Portal>
    )
}

export default CropPortal
