import React from 'react'
import Div   from '../Basic/Div'
import Img   from '../Basic/Img'
import {API} from '../config'

const ShowImage = ({item, url, theme}) => (
    <Div className="product-image" theme={theme.wrapper}>
        <Img src={`${API}/${url}/photo/${item._id}`}
             alt={item.name}
             theme={{...theme, maxHeight: '100%', maxWidth: '100%'}}
        />
    </Div>
)

ShowImage.defaultProps = {
    theme: {},
}

export default ShowImage