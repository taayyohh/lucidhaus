import {
    adminPostsInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle
}                               from 'features/admin/styles'
import React, {
    useEffect,
    useState
}                               from 'react'
import Div                      from 'shared/Basic/Div'
import GenericCard              from 'shared/Cards/GenericCard'
import GenericCardAdminControls from 'shared/Controls/GenericCardAdminControls'

const AdminTaxonomy = ({taxonomies}) => {
    const [currentTaxSlug, setCurrentTaxSlug] = useState('')
    const [currentTaxArray, setCurrentTaxArray] = useState('')

    // useEffect(() => {
    //     console.log('tax', taxonomies)
    //     if (!!taxonomies?.filter(item => item.slug === currentTaxSlug))
    //         setCurrentTaxArray(taxonomies?.filter(item => item.slug === currentTaxSlug).items)
    //
    // }, [currentTaxSlug])

    useEffect(() => {

    }, [])

    return (
        <Div theme={adminPostsInnerWrapperStyle}>
            {console.log('CI', taxonomies)}
            {taxonomies && taxonomies.map((t, i) => {
                return (
                    <Div
                        onClick={() => setCurrentTaxSlug(t.slug)}
                        key={t.title}
                    >
                        {t.title}
                    </Div>
                )
            })}

            {console.log('currentTaxArray', currentTaxArray)}

            {currentTaxArray?.length > 0 && currentTaxArray?.map(cat => (
                <Div
                    key={cat.slug}
                    theme={adminShopCardWrapperStyle}
                >
                    <GenericCard
                        slug={`product-category/update/${cat.slug}`}
                        name={cat.name}
                        theme={adminShopCardStyle}
                    />
                    <GenericCardAdminControls
                        edit={'/admin/product-category/update'}
                        destroyAction={'admin/attemptDestroyProduct'}
                        slug={cat.slug}
                        id={cat._id}
                    />
                </Div>
            ))}

        </Div>
    )
}


export default AdminTaxonomy