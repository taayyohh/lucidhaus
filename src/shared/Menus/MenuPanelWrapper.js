import {AnimatePresence}         from 'framer-motion'
import PropTypes                 from 'prop-types'
import React                     from 'react'
import {absolute}                from '../../utils/themer'
import {headerMenuPanelVariants} from '../animations/headerMenuPanels'
import Div                       from '../Basic/Div'
import MotionDiv                 from '../Basic/MotionDiv'
import {headerMenuPanelStyle}    from './styles'

const MenuPanelWrapper = ({children, name}) =>
    <AnimatePresence>
        {(name && (
            <MotionDiv
                theme={headerMenuPanelStyle}
                key={name}
                variants={headerMenuPanelVariants}
                initial="closed"
                animate="open"
                exit="closed"
                children={children}
            />
        )) || (
            <Div theme={{
                height: 50,
                width: 50,
                left: -25,
                top: -25,
                borderRadius: 25,
                position: absolute,
                background: '#000'
            }}/>
        )}
    </AnimatePresence>


MenuPanelWrapper.propTypes = {
    children: PropTypes.object,
    name: PropTypes.string,
}

export default MenuPanelWrapper