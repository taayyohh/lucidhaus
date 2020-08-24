import React, {
    useEffect,
    useState
}                        from 'react'
import {Redirect}        from 'react-router-dom'
import {
    getCategories,
    getProduct,
    updateProduct
}                        from '../api/apiAdmin'
import {isAuthenticated} from '../api/apiAuth'

const UpdateProduct = ({match}) => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: false,
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })
    const [categories, setCategories] = useState([])

    const {user, token} = isAuthenticated()
    const {
        name,
        description,
        price,
        quantity,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values

    const init = productId => {
        getProduct(productId).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    category: data.category._id,
                    shipping: data.shipping,
                    quantity: data.quantity,
                    formData: new FormData()
                })
                // load categories
                initCategories()
            }
        })
    }

    // load categories and set form data
    const initCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setCategories(data)
            }
        })
    }

    useEffect(() => {
        init(match.params.productId)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error: '', loading: true})

        updateProduct(match.params.productId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    price: '',
                    quantity: '',
                    loading: false,
                    error: false,
                    redirectToProfile: true,
                    createdProduct: data.name
                })
            }
        })
    }

    const newPostForm = () => (
        <form onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div>
                <label>
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*"/>
                </label>
            </div>

            <div>
                <label>Name</label>
                <input onChange={handleChange('name')} type="text" value={name}/>
            </div>

            <div>
                <label>Description</label>
                <textarea
                    onChange={handleChange('description')}
                    value={description}
                />
            </div>

            <div>
                <label>Price</label>
                <input onChange={handleChange('price')} type="number" className="form-control" value={price}/>
            </div>

            <div>
                <label>Category</label>
                <select onChange={handleChange('category')} className="form-control">
                    <option>Please select</option>
                    {categories &&
                    categories.map((c, i) => (
                        <option key={i} value={c._id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Shipping</label>
                <select onChange={handleChange('shipping')}>
                    <option>Please select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div>
                <label>Quantity</label>
                <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity}/>
            </div>

            <button>Update Product</button>
        </form>
    )

    const showError = () => (
        <div style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div style={{display: createdProduct ? '' : 'none'}}>
            <h2>{`${createdProduct}`} is updated!</h2>
        </div>
    )

    const showLoading = () =>
        loading && (
            <div>
                <h2>Loading...</h2>
            </div>
        )

    const redirectUser = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/"/>
            }
        }
    }

    return (
        <div>
            {showLoading()}
            {showSuccess()}
            {showError()}
            {newPostForm()}
            {redirectUser()}
        </div>
    )
}

export default UpdateProduct
