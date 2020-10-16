import React, {
    useEffect,
    useState
}                           from 'react'
import {Link}               from 'react-router-dom'
import {
    deleteProduct,
    getProducts
}                           from '../api/apiAdmin'
import {isAuthenticated}    from '../api/apiAuth'
import Div                  from '../Basic/Div'
import S3Image              from '../Shop/S3Image'
import {manageProductStyle} from '../themes/admin'

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    const {user, token} = isAuthenticated()

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setProducts(data)
            }
        })
    }

    const destroy = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                loadProducts()
            }
        })
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <Div>
            <span>You currently have {products.length} products</span>

            <Link to="/create/product">
                Create Product
            </Link>
            <hr/>
            {products.map((p, i) => (
                <Div key={i}>
                    <Div theme={manageProductStyle.imageWrapper}>
                        <S3Image url="product" item={p}/>
                    </Div>
                    <strong>{p.name}</strong>
                    <Link to={`/admin/product/update/${p._id}`}>
                                    <span>
                                        Edit
                                    </span>
                    </Link>
                    <span onClick={() => destroy(p._id)}>Delete</span>
                </Div>
            ))}
            <br/>
        </Div>
    )
}

export default ManageProducts
