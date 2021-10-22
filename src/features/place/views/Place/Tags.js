import {tags}                                                      from 'config/icons'
import React                                                       from 'react'
import Div                                                         from 'shared/Basic/Div'
import Icon                                                        from 'shared/Basic/Icon'
import LinkSwitch                                                  from 'shared/Basic/LinkSwitch'
import {slugify}                                                   from 'utils/helpers'
import {placeTagsIconStyle, placeTagsStyle, placeTagsWrapperStyle} from '../styles'

const Tags = ({placeCategory}) => {
    return (
        <>
            {placeCategory.length > 0 && (
                <Div theme={placeTagsStyle}>
                    <Icon icon={tags} theme={placeTagsIconStyle}/>
                    <Div theme={placeTagsWrapperStyle}>
                        {placeCategory && placeCategory.slice(0, 3).map((category, i) => (
                            <LinkSwitch
                                key={i}
                                url={`/places/search/${slugify(category.name)}`}
                            >
                                {category.name}{(i >= placeCategory.length - 1 || i === 2) ? `` : ', '}
                            </LinkSwitch>
                        ))}
                    </Div>
                </Div>
            )}
        </>
    )
}

export default Tags
