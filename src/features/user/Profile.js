import React, {useState} from 'react'
import Div from '../../Basic/Div'
import {useDispatch, useSelector} from "react-redux";
import SmartInput from "../../Forms/SmartInput";
import {signInFormStyle, signUpFormStyle} from "../../themes/signup";
import H3 from "../../Basic/H3";
import {genericButtonStyle} from "../../themes/elements";
import SubmitButton from "../../Basic/SubmitButton";


const Profile = () => {
    const dispatch = useDispatch()
    const {name, email, token, _id, redirectToReferrer} = useSelector(state => state.user)
    const [values, setValues] = useState({
        updatedName: name,
        updatedEmail: email,
        updatedPassword: '',
    })
    const {updatedName, updatedEmail, updatedPassword} = values
    const fieldTypes = [
        {
            inputLabel: 'Name',
            onChange: 'updatedName',
            value: updatedName
        },
        {
            inputLabel: 'Email',
            onChange: 'updatedEmail',
            value: updatedEmail
        },
        {
            inputLabel: 'Password',
            onChange: 'updatedPassword',
            value: updatedPassword,
            type: 'password'
        }
    ]

    const handleChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value
        })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        dispatch({
            type: 'user/updateProfile',
            payload: {
                _id,
                token,
                updatedUser: {
                    updatedName,
                    updatedEmail,
                    updatedPassword
                }
            }
        })


        // update(_id, token, {updatedName, updatedEmail, updatedPassword}).then(data => {
        //     if (data.error) {
        //         console.log(data.error)
        //     } else {
        //         updateUser(data, () => {
        //             setValues({
        //                 ...values,
        //                 name: data.name,
        //                 email: data.email,
        //                 success: true
        //             })
        //         })
        //     }
        // })
    }

    // useEffect(() => {
    //     if (redirectToReferrer)
    //         history.push('/user/dashboard')
    //
    // }, [redirectToReferrer])


    return (
        <Div as="form" theme={signInFormStyle}>
            <H3 theme={signInFormStyle.heading}>Update Profile</H3>
            {fieldTypes.map(f =>
                <SmartInput
                    key={f.inputLabel}
                    inputLabel={f.inputLabel}
                    onChange={handleChange(f.onChange)}
                    value={f.value}
                    theme={signInFormStyle.fieldset}
                    type={f.type}
                />
            )}
            <SubmitButton
                onClick={clickSubmit}
                theme={{...genericButtonStyle, ...signUpFormStyle.button}}
                children={'Submit'}
            />
        </Div>
    )
}

export default Profile