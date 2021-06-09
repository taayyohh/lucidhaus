export const setFormData = (form, field) => {
    if(!!field) {
        const key = Object.keys(field)[0]?.replace(/\"/g, "")
        return form.set(key, field[key])
    }
}
