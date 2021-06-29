import {bookmark}     from 'config/icons'
import {colorPalette} from 'config/styles'
import React          from 'react'
import {useDispatch}  from 'react-redux'
import Div            from 'shared/Basic/Div'
import Icon           from 'shared/Basic/Icon'
import {absolute}     from 'utils/themer'

const Bookmark = ({place, userSlug, _id, token}) => {
    const dispatch = useDispatch()

    return (
        <Div
            theme={{position: absolute, right: 20, top: 0}}
            onClick={() => dispatch({
                type: 'user/manageBookmark',
                payload: {
                    placeId: place._id,
                    _id: _id,
                    token: token,
                    slug: userSlug
                }
            })}
        >
            <Icon icon={bookmark}
                  theme={{color: '#fff', hover: {color: colorPalette.honeyYellow, cursor: 'pointer'}}}/>
        </Div>
    )
}

export default Bookmark
