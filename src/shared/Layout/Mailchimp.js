import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import Div from 'shared/Basic/Div'
import {footerSubscribeStyle} from 'shared/Layout/styles/footer'
import PropTypes from "prop-types";

const Subscribe = ({theme}) => {
    return (
        <Div theme={{...footerSubscribeStyle, ...theme}}>
            <Mailchimp
                action='https://lucidha.us13.list-manage.com/subscribe/post?u=7e1c08d578bf620636589e899&amp;id=7a7e31a31b'
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Email',
                        type: 'email',
                        required: true
                    }
                ]}
                messages={
                    {
                        sending: "Sending...",
                        success: "Thank you for subscribing!",
                        error: "An unexpected internal error has occurred.",
                        empty: "email address required.",
                        duplicate: "Too many subscribe attempts for this email address",
                        button: "Subscribe"
                    }
                }
            />
        </Div>

    )
}


Subscribe.propTypes = {
    theme: PropTypes.object,
}

Subscribe.defaultProps = {
    theme: {}
}

export default Subscribe