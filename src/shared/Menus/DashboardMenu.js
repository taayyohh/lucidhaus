import React, {useState}                             from 'react'
import {useSelector}                                 from 'react-redux'
import Div                                           from 'shared/Basic/Div'
import DashboardMenuItem                             from 'shared/Menus/DashboardMenuItem'
import {colorPalette}                                from '../../config/styles'
import {mobileFlag}                                  from '../../features/site/slice'
import {white}                                       from '../../utils/themer'
import MotionDiv                                     from '../Basic/MotionDiv'
import {dashboardMenuInnerStyle, dashboardMenuStyle} from './styles'

const DashboardMenu = ({menu}) => {
    const isMobile = useSelector(mobileFlag)
    const [isOpen, setIsOpen] = useState(false)
    const menuVariants = {
        closed: {
            height: 50,
            background: colorPalette.seaGreen,
        },
        open: {
            height: 'auto',
            background: white
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
                <MotionDiv
                    theme={{overflow: 'hidden'}}
                    variants={menuVariants}
                    initial={'closed'}
                    animate={isOpen ? 'open' : 'closed'}
                    onClick={() => setIsOpen(flag => !flag)}
                >
                    <Div theme={{marginTop: 50}}>
                        {menu?.map(item => (
                            <DashboardMenuItem
                                key={item.title}
                                item={item}
                            />
                        ))}
                    </Div>

                </MotionDiv>
            )}

        </>

    )
}


export default DashboardMenu
