import {AnimatePresence}         from 'framer-motion'
import PropTypes                 from 'prop-types'
import React                     from 'react'
import {headerMenuPanelVariants} from 'shared/Menus/animations'
import MotionDiv                 from 'shared/Basic/MotionDiv'
import {headerMenuPanelStyle}    from './styles'

const MenuPanelWrapper = ({children, name}) =>
    <AnimatePresence>
        {name && (
            <MotionDiv
                theme={headerMenuPanelStyle}
                key={name}
                variants={headerMenuPanelVariants}
                initial="closed"
                animate="open"
                exit="closed"
                children={children}
            />
        )}
    </AnimatePresence>


MenuPanelWrapper.propTypes = {
    children: PropTypes.object,
    name: PropTypes.string,
}

export default MenuPanelWrapper