import PropTypes     from 'prop-types'
import React         from 'react'
import {useSelector} from 'react-redux'
import LinkSwitch    from 'shared/Basic/LinkSwitch'
import MotionDiv     from 'shared/Basic/MotionDiv'
import {
    headerMenuActiveIndicator,
    headerMenuListItemStyle
}                    from './styles'

const HeaderMenuItems = ({items}) => {
    const {url} = useSelector(state => state.site)

    return (
        <>
            {items && items.map((item) =>
                <LinkSwitch
                    key={item.url}
                    url={item.url}
                    theme={headerMenuListItemStyle(url.includes(item.url.substring(1)))}
                >
                    {item.title}
                    {url.includes(item.url.substring(1)) && (
                        <MotionDiv
                            layoutId={'header-menu-indicator'}
                            theme={headerMenuActiveIndicator}
                        />
                    )}
                </LinkSwitch>
            )}
        </>
    )
}

HeaderMenuItems.propTypes = {
    items: PropTypes.array.isRequired
}

export default HeaderMenuItems