import React, {
    useEffect,
    useState
}                        from 'react'
import {Redirect}        from 'react-router'
import {Link}            from 'react-router-dom'
import {isAuthenticated} from '../../api/apiAuth'
import {
    read,
    update,
    updateUser
}                        from '../../api/apiUser'
import Div               from '../../Basic/Div'
import H2                from '../../Basic/H2'
import Li                from '../../Basic/Li'
import Ul                from '../../Basic/Ul'
import {userLinksStyle}  from '../../themes/user'

const Profile = ({match}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: false,
        success: false
    })
    const {token} = isAuthenticated()
    const {
        user: {_id}
    } = isAuthenticated()


    useEffect(() => {
        init(_id, token)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {name, email, password, error, success} = values


    const init = (userId) => {
        read(userId, token).then(data => {
            if (data.error) {
                setValues({...values, error: true})
                console.log(error)
            } else {
                console.log(success)
                setValues({
                    ...values,
                    name: data.name,
                    email: data.email
                })
            }
        })
    }

    useEffect(() => {
        init(match.params.userId)
        console.log('id', match.params.userId)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = name => e => {
        setValues({...values, error: false, [name]: e.target.value})
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        update(match.params.userId, token, {name, email, password}).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                updateUser(data, () => {
                    setValues({...values, name: data.name, email: data.email, success: true})
                })
            }
        })
    }

    const redirectUser = (success) => {
        if (success) {
            return <Redirect to="/dashboard"/>
        }
    }

    const userLinks = () => {
        return (
            <Div theme={userLinksStyle}>
                <Ul theme={userLinksStyle.list}>
                    <Li>
                        <Link to="/cart">
                            My Cart
                        </Link>
                    </Li>
                    <Li>
                        <Link to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
                    </Li>
                </Ul>
            </Div>
        )
    }

    const profileUpdate = (name, email, password) => (
        <form>
            <Div>
                <label>Name</label>
                <input
                    type="text"
                    onChange={handleChange('name')}
                    value={name}
                />
            </Div>
            <Div>
                <label>Email</label>
                <input
                    type="email"
                    onChange={handleChange('email')}
                    value={email}
                />
            </Div>
            <Div>
                <label>Password</label>
                <input
                    type="password"
                    onChange={handleChange('password')}
                    value={password}
                />
            </Div>
            <button onClick={clickSubmit}>
                Submit
            </button>
        </form>

    )

    return (
        <>

            <H2>
                Profile Update
            </H2>
            {userLinks()}
            {profileUpdate(name, email, password)}
            {redirectUser()}

        </>
    )
}

export default Profile