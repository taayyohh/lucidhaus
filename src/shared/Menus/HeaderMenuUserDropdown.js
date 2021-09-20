import {chevronDown}                                                                                     from 'config/icons'
import React, {useState}                                                                                 from 'react'
import {useDispatch}                                                                                     from 'react-redux'
import Div                                                                                               from 'shared/Basic/Div'
import Icon                                                                                              from 'shared/Basic/Icon'
import MotionDiv                                                                                         from 'shared/Basic/MotionDiv'
import {headerIconStyle}                                                                                 from 'shared/Layout/styles/header'
import Span                                                                                              from '../Basic/Span'
import {headerAccountMenuButtonStyle, headerAccountMenuDropdownWrapperStyle, headerAccountMenuLinkStyle} from './styles'

const HeaderMenuUserDropdown = ({nameFirst}) => {
    const [isOpen, setIsOpen] = useState()
    const dispatch = useDispatch()

    const variants = {
        initial: {
            height: 0
        },
        open: {
            height: 'auto'
        }
    }

    return (
        <Div
            theme={headerAccountMenuButtonStyle}
            onClick={() => setIsOpen(flag => !flag)}
        >
            {`Hi, ${nameFirst}`}
            <Icon
                icon={chevronDown}
                theme={headerIconStyle}
            />
            <MotionDiv
                intial={{height: 0}}
                animate={isOpen ? 'open' : 'initial'}
                variants={variants}
                theme={headerAccountMenuDropdownWrapperStyle}
            >
                <Div theme={{display: 'flex', padding: '20px', flexDirection: 'column', width: '100%'}}>
                    <Div>Hi</Div>
                    <Div>HEllo</Div>
                    <Div>Hii</Div>
                     <Span
                        theme={headerAccountMenuLinkStyle}
                        onClick={() => dispatch({type: 'user/signOut'})}
                    >
                        Sign Out
                    </Span>
                </Div>


            </MotionDiv>
        </Div>
    )
}

export default HeaderMenuUserDropdown
