import {AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import React, {useContext}       from 'react'
import {headerMenuPanelVariants} from '../animations/headerMenuPanels'
import MotionDiv                 from '../Basic/MotionDiv'
import Span                   from '../Basic/Span'
import {menuPanelContext}     from '../Containers/MenuPanelController'
import {headerMenuPanelStyle} from './styles'

const MenuPanelWrapper = ({children, name}) => {
    const {setPanel} = useContext(menuPanelContext)

    return (
        <AnimatePresence exitBeforeEnter>
            {name && (
                <MotionDiv
                    theme={headerMenuPanelStyle}
                    key={name}
                    variants={headerMenuPanelVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <Span
                        theme={headerMenuPanelStyle.closeButton}
                        onClick={() => {
                            setPanel('')
                        }}>
                        {/*<Icon icon={timesLight} theme={headerMenuPanelStyle.closeButtonIcon}/>*/}
                    </Span>
                    {children}
                </MotionDiv>
            )}
        </AnimatePresence>
    )
}

MenuPanelWrapper.propTypes = {
    children: PropTypes.object,
    name: PropTypes.string,
}

export default MenuPanelWrapper