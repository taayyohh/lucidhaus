export const setFormData = (form, field) => {
    if (!!field) {
        const key = Object.keys(field)[0]?.replace(/"/g, "")
        console.log('-----')
        console.log('key', key)
        console.log('field', field)
        console.log('fieldkey', field[key])
        console.log('-----')
        if (Array.isArray(field[key])) {
            if (field[key].length === 0) {
                return form.set(key, null) //temporary solution for saving null values that need an ObjectId in mongoose
            }
        }
        return form.set(key, field[key])
    }
}
