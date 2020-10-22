import React, {useState} from 'react'
import {useSelector}     from 'react-redux'
import {Link} from 'react-router-dom'
import Div    from '../../shared/Basic/Div'
import H3     from '../../shared/Basic/H3'

const CreateCategory = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSucceess] = useState(false)

    /// destructure User and info from local storage
    const {_id, token} = useSelector(state => state.user)


    const handleChange = (e) => {
        setError('')
        setName(e.target.value)
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSucceess(false)
        // make request to API to create category

        // createCategory(_id, token, {name}).then(data => {
        //     if (data.error) {
        //         setError(true)
        //     } else {
        //         setError('')
        //         setSucceess(true)
        //     }
        // })
    }

    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <Div className="form-group">
                <label>
                    Name
                </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                />
                <button>Create Category</button>
            </Div>
        </form>
    )

    const showSuccess = () => {
        if (success) {
            return <H3>{name} has been created</H3>
        }
    }

    const showError = () => {
        if (error) {
            return <H3>Category should unique</H3>
        }
    }

    const goBack = () => (
        <Div>
            <Link to="/admin/dashboard">Back to dashboard</Link>
        </Div>
    )

    return (
        <Div theme={{margin: '0 auto', width: '70%'}}>
            {goBack()}
            {showSuccess()}
            {showError()}
            {newCategoryForm()}
        </Div>
    )
}

export default CreateCategory