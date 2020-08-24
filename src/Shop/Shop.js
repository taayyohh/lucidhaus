import React, {
    useEffect,
    useState
}                            from 'react'
import {getFilteredProducts} from '../api/apiShop'
import Div                   from '../Basic/Div'
import {ShopListStyle}       from '../themes/product'
import {
    shopInnerStyle,
    shopStyle
}                            from '../themes/shop'
import ProductCard           from './ProductCard'

const Shop = () => {
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(0)
    const [filteredResults, setFilteredResults] = useState([])
    const [myFilters, setMyFilters] = useState({
        filters: {category: [], price: []}
    })

    useEffect(() => {
        //    init()
        loadFilteredResults(skip, limit, myFilters.filters)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const loadFilteredResults = newFilters => {
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setFilteredResults(data.data)
                setSize(data.size)
            }
        })
    }

    const loadMore = () => {
        let toSkip = skip + limit

        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setFilteredResults([...filteredResults, ...data.data])
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    }

    const loadMoreButton = () => {
        return (
            size > 0 && size >= limit && (
                <button onClick={loadMore}>Load More</button>
            )
        )
    }


    // const handleFilters = (filters, filterBy) => {
    //     const newFilters = {...myFilters}
    //     newFilters.filters[filterBy] = filters
    //
    //     if (filterBy === 'price') {
    //         newFilters.filters[filterBy] = handlePrice(filters)
    //     }
    //
    //     loadFilteredResults(myFilters.filters)
    //     setMyFilters(newFilters)
    // }


    // const handlePrice = value => {
    //     const data = prices
    //     let array = []
    //
    //     for (let key in data) {
    //         if (data[key]._id === parseInt(value)) {
    //             array = data[key].array
    //         }
    //     }
    //
    //     return array
    // }


    return (
        <Div theme={shopStyle}>
            <Div theme={shopInnerStyle}>
                <Div theme={ShopListStyle}>
                    {filteredResults.map((product, i) => (
                        <ProductCard key={i} product={product}/>
                    ))}

                    {loadMoreButton()}
                </Div>
            </Div>
        </Div>
    )
}

export default Shop