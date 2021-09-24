import React                                                 from 'react'
import Div                                                   from 'shared/Basic/Div'
import RichText                                              from 'shared/Basic/RichText'
import {placeDescriptionStyle, placeDescriptionWrapperStyle} from './styles'

const Description = ({description}) => {
    return (
        <Div theme={placeDescriptionWrapperStyle}>
            {description && (
                <RichText
                    children={description}
                    theme={placeDescriptionStyle}
                />
            )}
        </Div>
    )
}

export default Description
