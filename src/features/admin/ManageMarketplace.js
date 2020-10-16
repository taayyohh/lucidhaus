import {AnimatePresence}         from 'framer-motion'
import React, {useEffect}        from 'react'
import {Portal}                  from 'react-portal'
import {
    useDispatch,
    useSelector
}                                from 'react-redux'
import Div                       from '../../Basic/Div'
import H2                        from '../../Basic/H2'
import MotionDiv                 from '../../Basic/MotionDiv'
import Span                      from '../../Basic/Span'
import StyledLink                from '../../Basic/StyledLink'
import {
    adminBusinessCardStyle,
    adminBusinessCardWrapperStyle,
    adminControlPanelInnerStyle,
    adminControlPanelStyle,
    adminCreateButtonStyle,
    adminHeadingStyle,
    adminMarketplaceInnerWrapperStyle,
    adminMarketplaceWrapperStyle,
    genericButtonStyle
}                                from '../../themes/admin'
import {
    defaultModalStyle,
    postContentStyle
}                                from '../../themes/layout'
import BusinessCard              from '../business/BusinessCard'
import BusinessCardAdminControls from '../business/BusinessCardAdminControls'

const ManageMarketplace = () => {
    const {slug} = useSelector(state => state.site)
    const {marketplace} = useSelector(state => state.business)
    const {_id, token} = useSelector(state => state.user)
    const {confirmDelete} = useSelector(state => state.admin)
    const {shouldDelete, destroy} = confirmDelete
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'business/getMarketplace'})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div theme={postContentStyle(slug)}>
            <Div theme={adminMarketplaceWrapperStyle}>
                <Div theme={adminControlPanelStyle}>
                    <Div theme={adminControlPanelInnerStyle}>
                        <H2 theme={adminHeadingStyle}>Manage Businesses</H2>
                        <StyledLink theme={adminCreateButtonStyle} to="/create/business">
                            Create Business
                        </StyledLink>
                        <Span>Total: {marketplace.length}</Span>
                    </Div>


                </Div>
                <Div theme={adminMarketplaceInnerWrapperStyle}>
                    {marketplace && marketplace.map(business => (
                        <Div
                            key={business.slug}
                            theme={adminBusinessCardWrapperStyle}
                        >
                            <BusinessCard
                                slug={business.slug}
                                name={business.name}
                                photo={business.photo}
                                theme={adminBusinessCardStyle}
                            />
                            <BusinessCardAdminControls slug={business.slug} />
                        </Div>
                    ))}
                </Div>
            </Div>
            {shouldDelete && (
                <Portal node={document && document.getElementById('modal')}>
                    <AnimatePresence>
                        <MotionDiv theme={defaultModalStyle}>
                            {!destroy && (
                                <Div>
                                    Are you sure you want to delete?
                                    <Div
                                        theme={genericButtonStyle}
                                        onClick={() => dispatch({type: 'admin/denyDestroyBusiness'})}
                                    >
                                        Do <strong>not</strong> delete this business
                                    </Div>
                                    <Div
                                        theme={genericButtonStyle}
                                        onClick={() => dispatch({type: 'admin/acceptDestroyBusiness'})}
                                    >
                                        Yes, delete this business
                                    </Div>
                                </Div>
                            )}

                            {destroy && (
                                <>
                                    <Div>Clicking this button will permanently delete this business</Div>
                                    <Div
                                        theme={genericButtonStyle}
                                        onClick={() => dispatch({type: 'admin/destroyBusiness',  payload: {_id: _id, token: token, slug: slug}})}
                                    >
                                        Delete
                                    </Div>
                                </>
                            )}
                        </MotionDiv>
                    </AnimatePresence>
                </Portal>
            )}
        </Div>
    )
}

export default ManageMarketplace
