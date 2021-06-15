export const setFormData = (form, field) => {
    if(!!field) {
        const key = Object.keys(field)[0]?.replace(/\"/g, "")
        if(Array.isArray(field[key])) {
            if(field[key].length === 0) {
                return form.set(key, '000999888777')
            }
        }
        return form.set(key, field[key])
    }
}
