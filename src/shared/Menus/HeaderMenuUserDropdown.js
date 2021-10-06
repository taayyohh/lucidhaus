import {chevronDown}                  from 'config/icons'
import {AnimatePresence}              from 'framer-motion'
import React                          from 'react'
import {useDispatch, useSelector}     from 'react-redux'
import Div                            from 'shared/Basic/Div'
import Icon                           from 'shared/Basic/Icon'
import Span                           from 'shared/Basic/Span'
import {headerIconStyle}              from 'shared/Layout/styles/header'
import HeaderMenuUserDropdownMenu     from './HeaderMenuUserDropdownMenu'
import {headerAccountMenuButtonStyle} from './styles'

const HeaderMenuUserDropdown = ({nameFirst}) => {
    const dispatch = useDispatch()
    const {closeHeaderMenuDropdown} = useSelector(state => state.site)

    return (
        <Div
            theme={headerAccountMenuButtonStyle}
        >
            <Span
                onClick={() => dispatch({type: 'site/closeHeaderMenuDropdown', payload: !closeHeaderMenuDropdown})}
                theme={{pointerEvents: !closeHeaderMenuDropdown ? 'none' : 'auto'}}
            >
                {`Hi, ${nameFirst}`}
                <Icon
                    icon={chevronDown}
                    theme={headerIconStyle}
                />
            </Span>

            <AnimatePresence>
                {!closeHeaderMenuDropdown && (
                    <HeaderMenuUserDropdownMenu/>
                )}
            </AnimatePresence>
        </Div>
    )
}

export default HeaderMenuUserDropdown
