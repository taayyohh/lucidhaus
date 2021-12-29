import React      from 'react'
import LinkSwitch from 'shared/Basic/LinkSwitch'

const BreadCrumb = () => {
    return (
        <LinkSwitch
            url={'/admin/shop/taxonomy'}
            children={'Taxonomy List'}
            theme={{display: 'block', size: 30, marginBottom: 50}}
        />
    )
}

export default BreadCrumb
