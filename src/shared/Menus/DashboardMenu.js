import {ellipsisV}       from 'config/icons'
import {mobileFlag}      from 'features/site/slice'
import React, {useState} from 'react'
import {useSelector}     from 'react-redux'
import Div               from 'shared/Basic/Div'
import Icon              from 'shared/Basic/Icon'
import MotionDiv         from 'shared/Basic/MotionDiv'
import DashboardMenuItem from 'shared/Menus/DashboardMenuItem'
import {
    dashboardMenuInnerStyle,
    dashboardMenuMobileStyle,
    dashboardMenuStyle,
    dashboardUserMenuToggleStyle
}                        from './styles'

const DashboardMenu = ({menu}) => {
    const isMobile = useSelector(mobileFlag)
    const [isOpen, setIsOpen] = useState(false)
    const menuVariants = {
        closed: {
            height: 0,
        },
        open: {
            height: 'auto',
        }
    }

    return (
        <>
            {(!isMobile && (
                <Div theme={dashboardMenuStyle}>
                    <Div theme={dashboardMenuInnerStyle}>
                        {menu?.map(item => (
                            <DashboardMenuItem
                                key={item.title}
                                item={item}
                            />
                        ))}
                    </Div>
                </Div>
            )) || (
                <>
                    <Div
                        theme={dashboardUserMenuToggleStyle}
                        onClick={() => setIsOpen(flag => !flag)}
                    >
                        <Icon icon={ellipsisV} theme={{mobile: {size: 22}}}/>
                    </Div>
                    <MotionDiv
                        theme={dashboardMenuMobileStyle}
                        variants={menuVariants}
                        initial={'closed'}
                        animate={isOpen ? 'open' : 'closed'}
                    >
                        <Div>
                            {menu?.map(item => (
                                <DashboardMenuItem
                                    key={item.title}
                                    item={item}
                                />
                            ))}
                        </Div>

                    </MotionDiv>
                </>

            )}

        </>

    )
}


export default DashboardMenu
