import React from 'react'
import {API} from "../config";
import {CDN} from "../config";
import Img   from "../Basic/Img";
import Div   from "../Basic/Div";

const ShowImage = ({item, url, theme}) => (
  <Div className="product-image" theme={theme.wrapper}>
      {console.log('API', API)}
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