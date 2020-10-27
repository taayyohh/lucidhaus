import {
    center,
    column,
    flex,
    none
}                from '../utils/themer'
import {globals} from '../variables/styles'

export const ShopListStyle = {
    display: 'grid',
    gridColumnGap: '10px',
    gridTemplateColumns: '25% 25% 25% 25%',
    mobile: {
        display: flex,
        flexDirection: column
    }
}

export const cardTitleStyle = {
    font: globals.fonts.script,
    textAlign: center,
    size: 30,
    marginBottom: [20, .5]
}


export const productCardStyle = {
    border: '1px solid #000',
    borderRadius: 10,
    padding: 20,
    margin: 40,
    textDecoration: none,
    transition: 'background-color 500ms ease, border-color 500ms ease',
    hover: {
        backgroundColor: '#f5f5f5',
        borderColor: '#f5f5f5'
    },
    inner: {
        mobile: {
            padding: 0
        }
    },
    title: {},
    description: {},
    category: {},
    price: {},
    image: {},
    controls: {
        mobile: {
            display: flex,
            flexDirection: column
        }
    },
    controlsInner: {

    }
}

export const cardInnerStyle = {}

export const relatedProductStyle = {
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20% 20%'
}