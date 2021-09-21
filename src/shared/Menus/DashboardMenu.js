import {mobileFlag}                                  from 'features/site/slice'
import React, {useState}                             from 'react'
import {useSelector}                                 from 'react-redux'
import Div                                           from 'shared/Basic/Div'
import DashboardMenuItem                             from 'shared/Menus/DashboardMenuItem'
import {dashboardMenuInnerStyle, dashboardMenuStyle} from './styles'

const DashboardMenu = ({menu}) => {
    const isMobile = useSelector(mobileFlag)

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
            ))}
        </>

    )
}


export default DashboardMenu
