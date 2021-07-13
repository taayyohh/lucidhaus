import {colorPalette}               from 'config/styles'
import React, {useEffect, useState} from 'react'
import Div                          from 'shared/Basic/Div'
import {optionStyle}                from './styles'

const SelectOption = ({optionId, name, field, formik, value, selected, setSelected, theme}) => {
    const [isSelected, setIsSelected] = useState(false)
    const updateSelectedArray = (isSelected, optionId) => {
        if (isSelected) {
            if (selected?.indexOf(optionId) === -1) {
                setSelected(selected => [...selected, optionId])
            }
        } else {
            setSelected(selected?.filter(item => item !== optionId))
        }
    }

    useEffect(() => {
        if (!!value && value?.length > 0) {
            setTimeout(() => {
                setIsSelected(value.filter(item => item === optionId)?.length === 1)
            }, 1000)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        updateSelectedArray(isSelected, optionId)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSelected])


    useEffect(() => {
        formik.setFieldValue(field?.name, selected)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <Div
            onClick={() => {
                setIsSelected(flag => !flag)
            }}
            theme={{
                ...optionStyle,
                ...theme,
                color: isSelected ? colorPalette.honeyYellow : colorPalette.black
            }}
        >
            {name}
        </Div>
    )
}

export default SelectOption
