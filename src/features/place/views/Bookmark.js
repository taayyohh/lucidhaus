import {bookmark}                         from 'config/icons'
import React, {useEffect, useState}       from 'react'
import {useDispatch, useSelector}         from 'react-redux'
import Div                                from 'shared/Basic/Div'
import Icon                               from 'shared/Basic/Icon'
import {bookmarkIconStyle, bookmarkStyle} from './styles'

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
            theme={bookmarkStyle(isBookmark)}
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
            <span>{!isBookmark ? `Save to My Places` : `Place Saved!`}</span>
            <Icon
                icon={bookmark}
                theme={bookmarkIconStyle(isBookmark)}
            />
        </Div>
    )
}

export default Bookmark
