import React, {
    useEffect,
    useState
}                           from 'react'
import {connect} from 'react-redux'
import {
    getProduct,
    listRelated
}                from '../services/apiShop'
import Div       from '../Basic/Div'
import H2                   from '../Basic/H2'
import Span                 from '../Basic/Span'
import {genericButtonStyle} from '../themes/elements'
import {
    productCardStyle,
    relatedProductStyle
}                           from '../themes/product'
import {addItem}            from './cartHelpers'
import ProductCard from './ProductCard'
import S3Image     from './S3Image'

const Product = ({pathname}) => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [relatedProduct, setRelatedProduct] = useState([])
    const currentSlug = pathname.split('/').pop()

    const addToCart = () => {
        addItem(product, () => {

        })
    }


    const init = slug => {
        getProduct(slug).then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setProduct(data)

                listRelated(data.slug).then(data => {
                    if (data.error) {
                        setError(data.error)
                    } else {
                        setRelatedProduct(data)
                    }
                })
            }
        })
    }

    useEffect(() => {
        init((currentSlug))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <Div>
                {product && (
                    <Div>
                        <H2 theme={{...productCardStyle.title}}>
                            {product.name}
                        </H2>
                        <S3Image
                            item={product}
                            url="product"
                            theme={{...productCardStyle.image}}
                        />
                        <Div
                            theme={{...productCardStyle.description}}>
                            {/*{parseHtml(product.description)}*/}
                        </Div>
                        <Span theme={{...productCardStyle.price}}>
                            $: {product.price}
                        </Span>
                        <Div
                            as="button"
                            theme={genericButtonStyle}
                            onClick={(e) => {
                                e.stopPropagation()
                                addToCart()
                            }}
                        >
                            Add to cart
                        </Div>
                    </Div>
                )}
            </Div>
            <Div>
                <h2>Related Product</h2>
                <Div theme={relatedProductStyle}>
                    {relatedProduct.map((p, i) => (
                        <ProductCard key={i} product={p}/>
                    ))}
                </Div>
            </Div>
        </>
    )
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
})

export default connect(mapStateToProps)(Product)