import React, {
    useEffect,
    useState
}                        from 'react'
import {connect}         from 'react-redux'
import {
    Link,
    Redirect
}                        from 'react-router-dom'
import {
    getCategory,
    updateCategory
}                        from '../api/apiAdmin'
import {isAuthenticated} from '../api/apiAuth'

const UpdateCategory = ({pathname}) => {
    const [values, setValues] = useState({
        name: '',
        error: '',
        redirectToProfile: false,
        formData: ''
    })

    // destructure User and token from localStorage
    const {user, token} = isAuthenticated()

    const {name, error, redirectToProfile} = values

    const init = categoryId => {
        getCategory(categoryId, token).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name
                })
            }
        })
    }

    useEffect(() => {
        init(pathname)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const submitCategoryForm = e => {
        e.preventDefault()
        // update with ? you should send category name otherwise what to update?
        const category = {
            name: name
        }
        updateCategory(pathname, user._id, token, category).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({
                    ...values,
                    name: data.name,
                    error: false,
                    redirectToProfile: true
                })
            }
        })
    }

    const updateCategoryForm = () => (
        <div>
            <form onSubmit={submitCategoryForm}>
                <span>Update Category Form</span>
                <span>Category Name</span>
                <br/>
                <br/>
                <div>
                    <input
                        onChange={handleChange('name')}
                        value={name}
                        className="input100"
                        type="text"
                        required
                        name="name"
                    />
                </div>
                <div>
                    <button type="submit">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )



    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/admin/categories"/>
            }
        }
    }

    const goBackBTN = () => {
        return (
            <div className="mt-5">
                <Link to="/admin/categories" className="text-info">
                    Back To Admin Home
                </Link>
            </div>
        )
    }

    return (
        <div>
            {updateCategoryForm()}
            {goBackBTN()}
            {redirectUser()}
        </div>
    )
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
})


export default connect(mapStateToProps)(UpdateCategory)
