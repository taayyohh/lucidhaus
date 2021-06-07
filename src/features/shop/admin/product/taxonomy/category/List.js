import {store}                  from 'config/icons'
import React, {useState}        from 'react'
import Div                      from 'shared/Basic/Div'
import Icon                     from 'shared/Basic/Icon'
import GenericCard              from 'shared/Cards/GenericCard'
import GenericCardAdminControls from 'shared/Controls/GenericCardAdminControls'
import {
    adminPostsInnerWrapperStyle,
    adminShopCardStyle,
    adminShopCardWrapperStyle,
    adminTaxonomyStyle
}                               from 'shared/Layout/Dashboard/admin/styles'

const List = ({taxonomies}) => {
    const [currentTax, setCurrentTax] = useState([])
    const [currentTaxSlug, setCurrentTaxSlug] = useState([])

    return (
        <Div theme={adminPostsInnerWrapperStyle}>


            <Div theme={{display: 'flex', flexDirection: 'column'}}>
                <Div theme={{size: 38, borderBottom: `1px solid #000`, paddingBottom: 20, marginBottom: 40}}>
                    <Icon theme={{size: 30, marginRight: 15}} icon={store}/>
                    Shop
                </Div>
                {taxonomies && taxonomies.filter(tax => tax.feature === 'shop').map((t, i) => {
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
            </Div>


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
                            edit={'/admin/product-placeCategory/update'}
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


export default List
