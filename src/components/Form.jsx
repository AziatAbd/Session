import { AiFillCloseSquare } from 'react-icons/ai'
import styled from 'styled-components'

function Form({ toggleForm, setToggleForm, handleSubmit, handleChange, note }) {
  return (
    <Container toggleForm={toggleForm}>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="body">Write note:</Label>

        <TextArea
          required
          cols="25"
          id=""
          name="body"
          placeholder="Note"
          rows="5"
          value={note}
          onChange={handleChange}
        />

        <Label htmlFor="bg">Choose a color:</Label>
        <Select name="bg" onChange={handleChange}>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
        </Select>
        <Button type="submit">Save</Button>

        <CloseIcon onClick={() => setToggleForm(!toggleForm)} />
      </FormContainer>
    </Container>
  )
}

export default Form

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
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
