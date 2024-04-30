import { useState } from 'react'
import Note from './components/Note'
import Form from './components/Form'
import styled from 'styled-components'

function App() {
  const [notes, setNotes] = useState([
    {
      body: `Two bytes meet.  The first byte asks, “Are you ill?”
      The second byte replies, “No, just feeling a bit off.”`,
      bg: 'purple',
      id: Math.random() * 10,
    },
  ])
  const [note, setNote] = useState({
    body: '',
    bg: '',
  })
  const [editNote, setEditNote] = useState()
  const [toggleForm, setToggleForm] = useState(false)
  const [toggleEditForm, setToggleEditForm] = useState(false)

  const handleChange = (e) => {
    if (toggleEditForm) {
      setEditNote({ ...editNote, [e.target.name]: e.target.value })
    }

    if (toggleForm) {
      setNote({ ...note, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (note.body) {
      const newNote = {
        ...note,
        id: Math.random() * 10,
      }

      setNotes([newNote, ...notes])
      setNote({
        body: '',
      })
      setToggleForm(!toggleForm)
    }
  }

  const handleDelete = (id) => {
    const leftNotes = notes.filter((note) => note.id !== id)
    setNotes(leftNotes)
  }

  const handleEdit = (id) => {
    const toEdit = notes.filter((note) => note.id === id)
    setEditNote(toEdit[0])
    setToggleEditForm(!toggleEditForm)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()

    const updatedNotes = notes.map((note) =>
      note.id === editNote.id ? editNote : note
    )

    setNotes(updatedNotes)

    setEditNote({})
    setToggleEditForm(!toggleEditForm)
  }

  return (
    <AppContainer className="sticky-notes">
      <header className="text-center">
        <h1>Sticky Notes</h1>
        <button onClick={() => setToggleForm(!toggleForm)}>Add Note</button>
      </header>

      {/* add new note form */}
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        note={note.body}
        setToggleForm={setToggleForm}
        toggleForm={toggleForm}
      />

      {/* edit note form */}
      {toggleEditForm && (
        <>
          <Form
            handleChange={handleChange}
            handleSubmit={handleEditSubmit}
            note={editNote.body}
            setToggleForm={setToggleEditForm}
            toggleForm={toggleEditForm}
          />
        </>
      )}

      <div>
        {notes.length > 0 ? (
          notes.map((singleNote, i) => {
            return (
              <Note
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                key={i}
                note={singleNote}
              />
            )
          })
        ) : (
          <p> No notes. Please add one </p>
        )}
      </div>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  .sticky-notes {
    background-color: #f7fafc;
    padding: 20px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 28px;
    color: #1a202c;
  }

  button {
    background-color: #3182ce;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background-color: #4299e1;
  }

  .notes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
  }

  p {
    color: #718096;
  }
`
