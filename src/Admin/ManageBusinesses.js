import React, {
    useEffect,
    useState
}                          from 'react'
import {Link}              from 'react-router-dom'
import {
    deleteBusiness,
    getBusinesses
}                          from '../api/apiAdmin'
import {isAuthenticated}   from '../api/apiAuth'
import Div                 from '../Basic/Div'
import ShowImage           from '../Shop/ShowImage'
import {manageBusinessStyle} from '../themes/admin'

const ManageBusinesses = () => {
    const [businesses, setBusinesses] = useState([])

    const {user, token} = isAuthenticated()

    const loadBusinesses = () => {
        getBusinesses().then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setBusinesses(data)
            }
        })
    }

    const destroy = businessId => {
        deleteBusiness(businessId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                loadBusinesses()
            }
        })
    }

    useEffect(() => {
        loadBusinesses()
    }, [])

    return (
        <Div>
            <span>You currently have {businesses.length} businesses</span>

            <Link to="/create/business">
                Create Business
            </Link>
            <hr/>
            {businesses && businesses.map((a, i) => (
                <Div key={i}>
                    <Div theme={manageBusinessStyle.imageWrapper}>
                        <ShowImage url="business" item={a}/>
                    </Div>
                    <strong>{a.name}</strong>
                    <Link to={`/admin/business/update/${a.slug}`}>
                                    <span>
                                        Edit
                                    </span>
                    </Link>
                    <span onClick={() => destroy(a.slug)}>Delete</span>
                </Div>
            ))}
            <br/>
        </Div>
    )
}

export default ManageBusinesses
