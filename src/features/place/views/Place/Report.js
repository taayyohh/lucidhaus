import {flag}            from 'config/icons'
import {
    reportFields,
    validateReport
}                        from 'features/place/admin/fields/report'
import React             from 'react'
import {PortalWithState} from 'react-portal'
import {useSelector}     from 'react-redux'
import Div               from 'shared/Basic/Div'
import Icon              from 'shared/Basic/Icon'
import Form              from 'shared/Fields/Form'
import {
    placeReportPortalStyle,
    placeReviewReportIconStyle,
    placeReviewReportWrapperStyle,
    placesReportFormStyle
}                        from '../styles'

const Report = () => {
    const {_id, token} = useSelector(state => state.user)
    const initialValues = {
        reason: '',
        _id,
        token
    }

    return (

        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({openPortal, closePortal, isOpen, portal}) => (
                <Div
                    theme={placeReviewReportWrapperStyle}
                    onClick={openPortal}
                >
                    <Icon
                        theme={placeReviewReportIconStyle}
                        icon={flag}
                    />
                    <Div>Report</Div>
                    {portal(
                        <Div theme={placeReportPortalStyle}>
                            <Form
                                theme={placesReportFormStyle}
                                initialValues={initialValues}
                                fields={reportFields}
                                validationSchema={validateReport}
                                dispatchAction={'place/reportReview'}
                                formHeading={'Report this review as inappropriate?'}
                                buttonText={"Report Review"}
                            />
                        </Div>
                    )}
                </Div>
            )}
        </PortalWithState>

    )
}

export default Report
