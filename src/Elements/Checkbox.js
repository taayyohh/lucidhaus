import React, {useState} from 'react'

const Checkbox = ({ categories, handleFilters }) => {
  const [checked, setChecked] = useState([])

  const handleToggle = c => () => {
    // return first index || -1
    const currentCategoryId = checked.indexOf(c)
    const  newCheckedCategoryId = [...checked]

    //if currently checked was not already in checked state > push
    //else pull/take off
    if(currentCategoryId === -1) {
      newCheckedCategoryId.push(c)
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1)
    }

    setChecked(newCheckedCategoryId)
    handleFilters(newCheckedCategoryId)
  }

  return categories.map((c, i) => (
    <li key={i}>
      <input
        onChange={handleToggle(c._id)}
        value={checked.lastIndexOf(c._id === -1)}
        type="checkbox" />
      <label>{c.name}</label>
    </li>
  ))
}

export default Checkbox