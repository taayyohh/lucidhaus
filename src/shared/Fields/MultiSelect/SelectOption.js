import {colorPalette}               from 'config/styles'
import React, {useEffect, useState} from 'react'
import Div                          from 'shared/Basic/Div'
import {pointer}                    from 'utils/themer'

const SelectOption = ({optionId, name, field, formik, value, selected, setSelected}) => {
    const [isSelected, setIsSelected] = useState(false)
    const optionStyle = {
        cursor: pointer,
        hover: {textDecoration: 'underline'}
    }

    const updateSelectedArray = (isSelected, optionId) => {
        if (isSelected) {
            if (selected.indexOf(optionId) === -1) {
                setSelected(selected => [...selected, optionId])
                console.log('added')
            }
        } else {
            setSelected(selected.filter(item => item !== optionId))
            console.log('removed',)
        }
    }

    useEffect(() => {
        if (!!value && value?.length > 0) {
            setTimeout(() => {
                console.log('value', value)
                setIsSelected(value.filter(item => item === optionId)?.length === 1)
            }, 1000)
        }

        console.log('INITIAL LOAD')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log('is', isSelected)
        console.log(name)
        console.log(optionId)
        updateSelectedArray(isSelected, optionId)
        console.log('----')


    }, [isSelected])


    useEffect(() => {
        console.log('SELECTED', selected)
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
                color: isSelected ? colorPalette.purple : colorPalette.black
            }}
        >
            {name}
        </Div>
    )
}

export default SelectOption
