export const globalMenuIsActive = ({item, url}) => {
    const itemUrl = item?.url?.split('/').filter(u => u.length !== 0)
    if (!!itemUrl)
        switch (url.length) {
            case 1:
                return itemUrl.length === 1 && itemUrl[0] === url[0]
            case 2:
                return (itemUrl.length === 2 && (itemUrl[1] === url[1])) || (item && !!item?.active?.find((i) => i === url[1]))
            case 3:
                return itemUrl[2] === url[2]
            case 4:
                return itemUrl[1] === url[1] && itemUrl.length === 2
            default:
                return false
        }

}

