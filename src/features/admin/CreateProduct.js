import {Formik}              from 'formik'
import React                 from 'react'
import {
    useDispatch,
    useSelector
}                  from 'react-redux'
import Div         from '../../shared/Basic/Div'
import Form        from '../../shared/Basic/Form'
import H2          from '../../shared/Basic/H2'
import FieldSwitch from '../../Forms/FieldSwitch'
import {genericButtonStyle}  from '../../themes/elements'
import {defaultNewFormStyle} from '../../themes/forms'
import {postContentStyle}    from '../../themes/layout'
import {productFieldTypes}   from '../../variables/fieldTypes'


const CreateProduct = () => {
    const dispatch = useDispatch()
    const {_id, token} = useSelector(state => state.user)

    //load categories and set form Data
    // const init = () => {
    //     getCategories().then(data => {
    //         if (data.error) {
    //             setValues({...values, error: data.error})
    //         } else {
    //             setValues({...values, categories: data, formData: new FormData()})
    //         }
    //     })
    // }


    // const clickSubmit = event => {
    //     event.preventDefault()
    //     setValues({...values, error: '', loading: true})
    //
    //     createProduct(user._id, token, formData)
    //         .then(data => {
    //             if (data.error) {
    //                 setValues({...values, error: data.error})
    //             } else {
    //                 setValues({
    //                     ...values,
    //                     name: '',
    //                     description: '',
    //                     photo: '',
    //                     price: '',
    //                     quantity: '',
    //                     loading: false,
    //                     createdProduct: data.name
    //                 })
    //             }
    //         })
    //
    // }
    //
    // const newPostForm = () => (
    //     <form onSubmit={clickSubmit}>
    //
    //         <Div>
    //             <label>category</label>
    //             <select onChange={handleChange('category')} type="text">
    //                 <option>Select a Category</option>
    //                 {categories && categories.map((c, i) => (
    //                     <option key={i} value={c._id}>{c.name}</option>
    //                 ))}
    //             </select>
    //         </Div>
    //
    //         <Div>
    //             <label>shipping</label>
    //             <select onChange={handleChange('shipping')}
    //                     type="text"
    //                     value={shipping}
    //             >
    //                 <option>Please Select</option>
    //                 <option value="0">No</option>
    //                 <option value="1">Yes</option>
    //             </select>
    //         </Div>
    //
    //     </form>
    // )


    return (
        <Div theme={postContentStyle()}>
            <Formik
                initialValues={{name: '', description: '', photo: '', image: '', quantity: 0, price: 0}}
                onSubmit={values => dispatch({
                    type: 'admin/createProduct',
                    payload: {_id: _id, token: token, values: values}
                })}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit}>
                        <H2 theme={defaultNewFormStyle.heading}>Create Product</H2>
                        <Div theme={defaultNewFormStyle.inner}>
                            {productFieldTypes.map((f, i) =>
                                <FieldSwitch
                                    key={i}
                                    formik={formik}
                                    field={f}
                                />
                            )}
                            <Div
                                as="button"
                                theme={{...genericButtonStyle}}
                            >
                                Create Product
                            </Div>
                        </Div>
                    </Form>
                )}
            </Formik>
        </Div>
    )
}

export default CreateProduct