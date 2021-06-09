import {colorPalette}               from 'config/styles'
import React, {useEffect, useState} from 'react'
import Div                          from 'shared/Basic/Div'
import {pointer}                    from 'utils/themer'

const SelectOption = ({name, field, formik, selected}) => {
    const [isSelected, setIsSelected] = useState(false)
    const [isInit, setIsInit] = useState(true)
    const optionStyle = {
        cursor: pointer,
        hover: {textDecoration: 'underline'}
    }

    const setSelected = (isSelected, name) => {
        if (!isSelected) {
            let index = selected.indexOf(name)
            if (index !== -1) {
                selected.splice(index, 1);
            }
            selected.filter(item => item)
        } else {
            if (selected.indexOf(name) === -1)
                selected.push(name)
        }

        return selected
    }

    useEffect(() => {
        if (!isInit) {
            setSelected(isSelected, name)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSelected])

    useEffect(() => {
        setIsInit(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Div
            onClick={() => {
                setIsSelected(flag => !flag)
                formik.setFieldValue(field?.name, setSelected(!isSelected, name))
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
