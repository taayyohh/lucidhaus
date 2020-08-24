import React, {
    useEffect,
    useState
}                      from 'react'
import {getBusinesses} from '../api/apiAdmin'
import Div             from '../Basic/Div'
import H2              from '../Basic/H2'
import LinkSwitch      from '../Elements/LinkSwitch'
import ShowImage       from '../Shop/ShowImage'
import {
    businessCardStyle,
    businessWrapperStyle
}                      from '../themes/business'


const Businesses = () => {
    const [businesses, setBusinesses] = useState([])
    const [error, setError] = useState(false)

    const init = () => {
        getBusinesses().then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setBusinesses(data)
            }
        })
    }

    useEffect(() => {
        init()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Div theme={businessWrapperStyle}>
            {businesses.map((a, i) => {
                return (
                    <LinkSwitch key={i} theme={businessCardStyle} url={`businesses/${a.slug}`}>
                        <ShowImage item={a} url="business"/>
                        <H2 theme={businessCardStyle.title}>{a.name}</H2>
                    </LinkSwitch>
                )
            })}
        </Div>
    )
}


export default Businesses