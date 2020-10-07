import React, {
    useEffect,
    useRef,
    useState
}                                      from 'react'
import {defaultFocusedInputLabelStyle} from '../themes/forms'
import Input                           from './Input'
import Fieldset                        from './Fieldset'
import InputLabel                      from './InputLabel'
import Legend                          from './Legend'

const SmartInput = ({label, handleChange, theme}) => {
    const labelRef = useRef(null)
    const inputRef = useRef(null)
    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const onChange = (e) => {
        setInputValue(e.target.value)
        handleChange(label, e.target.value)

    }

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        if (!inputValue)
            setIsFocused(false)
    }


    return (
        <Fieldset theme={{...theme}}>
            <Input
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={inputValue}
                ref={inputRef}
            />
            <InputLabel
                children={label}
                ref={labelRef}
                theme={isFocused ? {...defaultFocusedInputLabelStyle} : {}}
            />
            <Legend/>
        </Fieldset>


    )
}

SmartInput.defaultProps = {
    theme: {},
}

export default SmartInput