import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import styled from 'styled-components'

const Note = ({ note, handleDelete, handleEdit }) => {
  return (
    <NoteContainer bg={note.bg}>
      <NoteText>{note.body}</NoteText>
      <TweetLink
        href={`https://twitter.com/intent/tweet?text="${note.body}`}
        target="_blank"
        rel="noreferrer"
      >
        Tweet
      </TweetLink>
      <div>
        <EditButton onClick={() => handleEdit(note.id)}>
          <EditIcon />
        </EditButton>
        <DeleteButton onClick={() => handleDelete(note.id)}>
          <DeleteIcon />
        </DeleteButton>
      </div>
    </NoteContainer>
  )
}

export default Note

const NoteContainer = styled.div`
  background-color: ${(props) => props.bg || '#fcd34d'};
  padding: 5px;
  padding-top: 10px;
  width: 280px;
  min-height: 200px;
  position: relative;
  word-break: break-word;
  display: flex;
  flex-direction: column;
`

const NoteText = styled.p`
  color: #fff;
  text-transform: capitalize;
  font-size: 1.25rem;
  padding-top: 2px;
`

const TweetLink = styled.a`
  padding-top: 5px;
  margin-top: auto;
  display: block;
  color: #3182ce;
`

const EditButton = styled.button`
  color: #000;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: #48bb78;
  padding: 1px;
  border-radius: 50%;
  margin-right: 2px;
`

const DeleteButton = styled.button`
  color: #000;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: #f56565;
  padding: 1px;
  border-radius: 50%;
`

const EditIcon = styled(AiOutlineEdit)`
  fill: #fff;
`

const DeleteIcon = styled(AiOutlineDelete)`
  fill: #fff;
`
