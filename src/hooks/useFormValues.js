import { useState } from 'react'

export const useFormValues = (state) => {
  const [values, setValues] = useState(state)

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return {
    values,
    onChange
  }
}
