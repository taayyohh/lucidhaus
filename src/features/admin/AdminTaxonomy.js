import React, {useState}        from 'react'
import Div                      from 'shared/Basic/Div'
import GenericCard              from 'shared/Cards/GenericCard'
import GenericCardAdminControls from 'shared/Controls/GenericCardAdminControls'
import {
    adminPostsInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle,
    adminTaxonomyStyle
}                               from './styles'

const AdminTaxonomy = ({taxonomies}) => {
    const [currentTax, setCurrentTax] = useState([])
    const [currentTaxSlug, setCurrentTaxSlug] = useState([])

    return (
        <Div theme={adminPostsInnerWrapperStyle}>
            {taxonomies && taxonomies.map((t, i) => {
                return (
                    <Div
                        onClick={() => {
                            setCurrentTax(t.items)
                            setCurrentTaxSlug(t.slug)
                        }}
                        key={t.title}
                        theme={adminTaxonomyStyle(t.slug === currentTaxSlug)}
                    >
                        {t.title}
                    </Div>
                )
            })}

            <Div>
                {currentTax?.length > 0 && currentTax?.map(cat => (
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


        </Div>
    )
}


export default AdminTaxonomy