import React, {
    useEffect,
    useState
}                      from 'react'
import {getCategories} from '../api/apiAdmin'
import Div             from '../Basic/Div'
import Span            from '../Basic/Span'
import {list}          from '../api/apiShop'
import ProductCard     from './ProductCard'

const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: '',
        search: '',
        results: [],
        searched: false
    })

    const {categories, category, search, results, searched} = data

    const loadCategories = () => {
        getCategories().then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setData({...data, categories: data})
                }
            })
    }

    useEffect(() => {
        loadCategories()
    }, [])


    const searchData = () => {
       // console.log(search, category)
        if(search) {
            list({search: search || undefined, category: category})
                .then(response => {
                     if(response.error) {
                        console.log(response.error)
                    } else {
                        setData({...data, results: response, searched: true})
                    }
                })
        }
    }

    const searchSubmit = (e) => {
        e.preventDefault()
        searchData()
    }

    const handleChange = name => event => {
        setData({...data, [name]: event.target.value, searched: false})
    }

    const searchMessage = (searched, results) => {
        if(searched && results.length > 0) {
            return `Found ${results.length} products`
        }
        if(searched && results.length < 1) {
            return `No Products Found`
        }
    }

    const searchedProducts = (results =[]) => {
        return (
            <Div>
                <h2>
                    {searchMessage(searched, results)}
                </h2>
                <Div>
                {results.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
                </Div>
            </Div>
        )
    }

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <Span>
                <Div>
                    <select onChange={handleChange('category')}>
                        <option value="All">Pick Category</option>
                        {categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </Div>
                <Div>
                     <input
                         type="search"
                         onChange={handleChange('search')}
                         placeholder="Search by Name"
                     />
                </Div>
                <Div>
                    <button>Search</button>
                </Div>
            </Span>
        </form>
    )

    return (
        <Div>
            <Div>
                {searchForm()}
            </Div>
            <Div>
                {searchedProducts(results)}
            </Div>
        </Div>
    )
}

export default Search