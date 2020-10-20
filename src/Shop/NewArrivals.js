import React, {
    useEffect,
    useState
}                    from 'react'
import {getProducts} from '../services/apiShop'
import Div           from '../shared/Basic/Div'
import H2            from '../shared/Basic/H2'
import ProductCard   from './ProductCard'
import SiteWrapper      from '../Layout/SiteWrapper'
import {innerContainer} from '../themes/layout'
import Search           from './Search'

const NewArrivals = ({match}) => {
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState([])

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setProductsBySell(data)
            }
        })
    }


    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <SiteWrapper match={match}>
            <Search/>

            <H2>
                New Arrivals
                {productsByArrival.map((product, i) => (
                    <Div key={i}>
                        <ProductCard product={product}/>
                    </Div>

                ))}
            </H2>

            <Div theme={innerContainer}>
                <H2>
                    Best Sellers
                    {productsBySell.map((product, i) => (
                        <Div key={i}>
                            <ProductCard product={product}/>
                        </Div>
                    ))}
                </H2>
            </Div>
        </SiteWrapper>
    )

}

export default NewArrivals