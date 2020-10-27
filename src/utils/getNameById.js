
export const getNameById = (arr, id) =>
    arr.filter(item => item._id === id)[0]?.name