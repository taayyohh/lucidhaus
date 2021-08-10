import React, {useEffect, useState} from 'react'
import Div                          from 'shared/Basic/Div'
import {optionStyle}                from './styles'

const SelectOption = ({optionId, name, field, formik, initialOptions, value, selected, setSelected, theme}) => {
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
        if (!!initialOptions && initialOptions?.length > 0) {
            setTimeout(() => {
                setIsSelected(initialOptions.filter(item => item === optionId)?.length === 1)
            }, 1000)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialOptions])


    useEffect(() => {
        updateSelectedArray(isSelected, optionId)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSelected])


    return (
        <Div
            onClick={() => {
                setIsSelected(flag => !flag)
            }}
            theme={{
                ...theme,
                ...optionStyle(isSelected)
            }}
        >
            {name}
        </Div>
    )
}

export default SelectOption
