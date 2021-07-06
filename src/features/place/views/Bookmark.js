import {bookmark}                   from 'config/icons'
import {colorPalette}               from 'config/styles'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector}   from 'react-redux'
import Div                          from 'shared/Basic/Div'
import Icon                         from 'shared/Basic/Icon'
import {absolute}                   from 'utils/themer'

const Bookmark = ({place, userSlug, _id, token}) => {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.user)
    const [isBookmark, setUserBookmark] = useState(user?.bookmarks?.includes(place._id))

    useEffect(() => {
        setUserBookmark(user?.bookmarks?.includes(place._id))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.bookmarks])


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
            <Icon
                icon={bookmark}
                theme={{
                    color: isBookmark ? colorPalette.honeyYellow : '#fff',
                    hover: {color: colorPalette.honeyYellow, cursor: 'pointer'}
                }}
            />
        </Div>
    )
}

export default Bookmark
