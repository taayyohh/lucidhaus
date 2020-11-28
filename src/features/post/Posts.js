import React, {useEffect}    from 'react'
import {
    useDispatch,
    useSelector
}                            from 'react-redux'
import Div                   from '../../shared/Basic/Div'
import GenericCard           from '../../shared/Cards/GenericCard'
import {contentWrapperStyle} from '../../shared/Layout/styles'
import {postsWrapperStyle}   from './styles'


const Posts = () => {
    const {posts} = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'post/getPosts'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={contentWrapperStyle}>
            <Div theme={postsWrapperStyle}>
                {posts && posts?.map(post =>
                    <GenericCard
                        key={post.slug}
                        slug={`posts/${post.slug}`}
                        name={post.name}
                        photo={post.photo}
                        description={post.description}
                        layoutId={post._id}
                    />
                )}
            </Div>
        </Div>
    )
}

export default Posts