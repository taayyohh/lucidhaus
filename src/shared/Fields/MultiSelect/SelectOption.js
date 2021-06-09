import {colorPalette}               from 'config/styles'
import React, {useEffect, useState} from 'react'
import Div                          from 'shared/Basic/Div'
import {pointer}                    from 'utils/themer'

const SelectOption = ({optionId, name, field, formik, selected}) => {
    const [isSelected, setIsSelected] = useState(false)
    const [isInit, setIsInit] = useState(true)
    const optionStyle = {
        cursor: pointer,
        hover: {textDecoration: 'underline'}
    }

    const setSelected = (isSelected, optionId) => {
        if (!isSelected) {
            let index = selected.indexOf(optionId)
            if (index !== -1) {
                selected.splice(index, 1);
            }
            selected.filter(item => item)
        } else {
            if (selected.indexOf(optionId) === -1)
                selected.push(optionId)
        }

        return selected
    }

    useEffect(() => {
        if (!isInit) {
            setSelected(isSelected, optionId)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSelected])

    useEffect(() => {
        setIsInit(false)
        console.log('VAL', formik.values)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div
            onClick={() => {
                setIsSelected(flag => !flag)
                formik.setFieldValue(field?.name, setSelected(!isSelected, optionId))
            }}
            theme={{
                ...optionStyle,
                color: isSelected ? colorPalette.purple : colorPalette.black
            }}
        >
            {name}
        </Div>
    )
}

export default SelectOption
