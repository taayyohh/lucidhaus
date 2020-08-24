import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor      from '@ckeditor/ckeditor5-react'
import React, {
    useEffect,
    useState
}                    from 'react'

import {
    createProduct,
    getCategories
}                           from '../api/apiAdmin'
import {isAuthenticated}    from '../api/apiAuth'
import Div                  from '../Basic/Div'
import H2                   from '../Basic/H2'
import {genericButtonStyle} from '../themes/elements'


const AddProduct = () => {
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
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const {user, token} = isAuthenticated()
    const {
        name,
        description,
        price,
        categories,
        shipping,
        quantity,
        loading,
        error,
        createdProduct,
        formData,
    } = values

    //load categories and set form Data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, categories: data, formData: new FormData()})
            }
        })
    }

    useEffect(() => {
        init()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = name => event => {
        const value = name === 'photo'
            ? event.target.files[0]
            : event.target.value

        formData.set(name, value)
        setValues({...values, [name]: value})
    }


    const handleCK = (value) => {
        formData.set('description', value)
        setValues({...values, [name]: value})
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error: '', loading: true})

        createProduct(user._id, token, formData)
            .then(data => {
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
                        createdProduct: data.name
                    })
                }
            })

    }

    const newPostForm = () => (
        <form onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <Div>
                <label>
                    <input onChange={handleChange('photo')}
                           type="file"
                           name="photo"
                           accept="image/*"/>
                </label>
            </Div>

            <Div>
                <label>name</label>
                <input onChange={handleChange('name')}
                       type="text"
                       value={name}/>
            </Div>

            <Div>
                <label>Product Description</label>
                {/*<textarea onChange={handleChange('description')}*/}
                {/*value={description}/>*/}
                <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    value={description}
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        //console.log('Editor is ready to use!', editor)
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        handleCK(data)
                    }}
                    onBlur={(event, editor) => {
                        // console.log('Blur.', editor)
                    }}
                    onFocus={(event, editor) => {
                        //   console.log('Focus.', editor)
                    }}
                />
            </Div>

            <Div>
                <label>price</label>
                <input onChange={handleChange('price')}
                       type="number"
                       value={price}/>
            </Div>

            <Div>
                <label>category</label>
                <select onChange={handleChange('category')} type="text">
                    <option>Select a Category</option>
                    {categories && categories.map((c, i) => (
                        <option key={i} value={c._id}>{c.name}</option>
                    ))}
                </select>
            </Div>

            <Div>
                <label>shipping</label>
                <select onChange={handleChange('shipping')}
                        type="text"
                        value={shipping}
                >
                    <option>Please Select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </Div>

            <Div>
                <label>Quantity</label>
                <input onChange={handleChange('quantity')}
                       type="number"
                       value={quantity}/>
            </Div>

            <Div as="button" theme={genericButtonStyle}> Create Product</Div>

        </form>
    )

    const showError = () => (
        <Div theme={{display: error ? '' : 'none'}}>
            {error}
        </Div>
    )

    const showSuccess = () => (
        <Div theme={{display: createdProduct ? '' : 'none'}}>
            <H2> {`${createdProduct}`} has been created</H2>
        </Div>
    )

    const showLoading = () => (
        loading && (
            <Div>
                <H2>Loading</H2>
            </Div>
        )
    )

    return (
        <Div theme={{margin: '0 auto', width: '70%'}}>
            {showError()}
            {showSuccess()}
            {showLoading()}
            {newPostForm()}
        </Div>
    )
}

export default AddProduct