import {postCardStyle} from 'features/post/styles'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Div from 'shared/Basic/Div'
import GenericCard from 'shared/Cards/GenericCard'
import FullContentWrapper from 'shared/Layout/FullContentWrapper'
import {getById} from 'utils/helpers'
import {postsWrapperStyle} from './styles'
import VideoPremiereCard from "shared/Cards/VideoPremiereCard";

const Posts = () => {
    const {posts} = useSelector(state => state.post)
    const {artists} = useSelector(state => state.artist)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'post/getPosts'})
        dispatch({type: 'artist/getArtists'})

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
                        <>
                            {(!!post.video && (
                                <VideoPremiereCard
                                    key={post.slug}
                                    name={post.name}
                                    photo={post.photo}
                                    video={post.video}
                                    description={post.description}
                                    theme={postCardStyle}
                                    slug={post.slug}
                                />
                            )) || (
                                <GenericCard
                                    key={post.slug}
                                    name={post.name}
                                    photo={post.photo}
                                    description={post.description}
                                    theme={postCardStyle}
                                    slug={`/artists/${getById(artists, post.primaryArtist)?.slug}`}
                                />
                            )}

                        </>

                    )
                )}
            </Div>
        </FullContentWrapper>
    )
}

export default Posts