import {postCardStyle}     from 'features/post/styles'
import React, {useEffect}  from 'react'
import {
    useDispatch,
    useSelector
}                          from 'react-redux'
import Div                 from 'shared/Basic/Div'
import GenericCard         from 'shared/Cards/GenericCard'
import FullContentWrapper  from 'shared/Layout/FullContentWrapper'
import {postsWrapperStyle} from './styles'

const Posts = () => {
    const {posts} = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'post/getPosts'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        dispatch({
            type: 'site/setDocumentHead',
            payload: {
                title: 'Posts',
                description: 'The posts description'
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts])

    return (
        <FullContentWrapper>
            <Div theme={postsWrapperStyle}>
                {posts && posts?.map(
                    post => post.isPublished && (
                        <GenericCard
                            key={post.slug}
                            slug={`posts/${post.slug}`}
                            name={post.name}
                            photo={post.photo}
                            description={post.description}
                            theme={postCardStyle}
                        />
                    )
                )}
            </Div>
        </FullContentWrapper>
    )
}

export default Posts