import React, {useState} from 'react'
import Div               from '../Basic/Div'

const RadioBox = ({prices, handleFilters}) => {
    const [value, setValue] = useState(0)

    const handleChange = (event) => {
        handleFilters(event.target.value)
        setValue(event.target.value)
        console.log(value)
    }

    return prices.map((p, i) => (
        <Div key={i}>
            <input
                onChange={handleChange}
                value={`${p._id}`}
                name={p}
                type="radio" />
            <label>{p.name}</label>
        </Div>
    ))
}

export default RadioBox