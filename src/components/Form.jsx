import { AiFillCloseSquare } from 'react-icons/ai'
import styled from 'styled-components'

function Form() {
  return (
    <Container>
      <FormContainer>
        <Label htmlFor="body">Write note:</Label>
        <TextArea
          required
          cols="25"
          id=""
          name="body"
          placeholder="Note"
          rows="5"
        />

        <Label htmlFor="bg">Choose a color:</Label>
        <Select name="bg">
          <option value="bg-yellow-300">Yellow</option>
          <option value="bg-blue-300">Blue</option>
          <option value="bg-red-300">Red</option>
          <option value="bg-purple-400">Purple</option>
        </Select>
        <Button type="submit">Save</Button>

        <CloseIcon onClick={() => {}} />
      </FormContainer>
    </Container>
  )
}

export default Form

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: ${(props) => (props.toggleForm ? '0' : '-200%')};
  left: 0;
  right: 0;
  background-color: #5756564f;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #f9fafb;
  padding: 5px;
  border-radius: 0.375rem;
  position: relative;
`

const Label = styled.label`
  padding-bottom: 2px;
`

const TextArea = styled.textarea`
  border: 2px solid #cbd5e0;
  padding: 2px;
  border-radius: 0.25rem;
`

const Select = styled.select`
  padding: 2px;
`

const Button = styled.button`
  padding: 4px;
  background-color: #3182ce;
  color: #fff;
  margin-top: 0.75rem;
  border-radius: 0.375rem;
`

const CloseIcon = styled(AiFillCloseSquare)`
  font-size: 30px;
  font-weight: bold;
  color: #f56565;
  cursor: pointer;
  position: absolute;
  top: 2px;
  right: 5px;
`
