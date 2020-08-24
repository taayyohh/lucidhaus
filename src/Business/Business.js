import React, {
    useEffect,
    useState
}                    from 'react'
import {connect}     from 'react-redux'
import {getBusiness} from '../api/apiAdmin'
import Div           from '../Basic/Div'
import H2            from '../Basic/H2'
import RichText      from '../Basic/RichText'
import ShowImage     from '../Shop/ShowImage'
import {
    businessLeftStyle,
    businessStyle,
    businessWrapperStyle
}                    from '../themes/business'


const Business = ({pathname}) => {
    const [business, setBusiness] = useState([])
    const [error, setError] = useState(false)
    const {name, description} = business
    const currentSlug = pathname.split("/").pop()


    const init = slug => {
        getBusiness(slug).then(data => {
            if (data.error) {
                setError(data.error)
                console.log(error)
            } else {
                setBusiness(data)
            }
        })
    }

    useEffect(() => {
        init((currentSlug))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
            <Div theme={businessWrapperStyle}>
                <Div theme={businessLeftStyle}>
                    <H2 theme={businessStyle.title}>{name}</H2>
                    <ShowImage item={business} url="business"/>
                </Div>
                <Div>
                    <RichText children={description}/>
                </Div>


            </Div>
    )
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
})


export default connect(mapStateToProps)(Business)