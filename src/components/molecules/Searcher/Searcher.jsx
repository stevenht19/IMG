import { useFormValues } from '@/hooks/useFormValues'
import { useImagesContext } from '@/hooks/useImagesContext'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/atoms/Icon'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: .7rem;
`
const InputBar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.input};
  border-radius: .5rem;
  padding-left: 10px;
`

const Searcher = () => {

  const { onResetPage } = useImagesContext()

  const { values, onChange } = useFormValues({
    query: ''
  })
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    if (!!values.query.trim().length) {
      onResetPage()
      navigate(`/?q=${values.query}`)
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputBar>
        <Icon type='SEARCH' />
        <Input 
          name='query'
          onChange={onChange} 
        />
      </InputBar>
      <Button 
        text='Search'
        type='submit' 
      />
    </Form>
  )
}

export default Searcher