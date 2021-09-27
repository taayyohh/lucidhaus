import {tags}                               from 'config/icons'
import React                                from 'react'
import Div                                  from 'shared/Basic/Div'
import Icon                                 from 'shared/Basic/Icon'
import {placeTagsIconStyle, placeTagsStyle} from '../styles'

const Tags = ({placeCategory}) => {
    return (
        <>
            {placeCategory.length > 0 && (
                <Div theme={placeTagsStyle}>
                    <Icon icon={tags} theme={placeTagsIconStyle}/>
                    {placeCategory && placeCategory.map((category, i) => (
                        <Div key={i}>{category.name}{i < placeCategory.length - 1 ? `, ` : ''}</Div>
                    ))}
                </Div>
            )}
        </>
    )
}

export default Tags
