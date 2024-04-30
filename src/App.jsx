import { useState, useEffect } from 'react'
import Note from './components/Note'
import Form from './components/Form'
import styled from 'styled-components'
import Spinner from './components/UI/Spinner'

function App() {
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({
    body: '',
    bg: '',
  })
  const [editNote, setEditNote] = useState()
  const [toggleForm, setToggleForm] = useState(false)
  const [toggleEditForm, setToggleEditForm] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://4626a6c590893bdc.mokky.dev/todo')
      const data = await response.json()
      setNotes(data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleChange = (e) => {
    if (toggleEditForm) {
      setEditNote({ ...editNote, [e.target.name]: e.target.value })
    }

    if (toggleForm) {
      setNote({ ...note, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (note.body) {
      const newNote = {
        ...note,
        id: Math.random() * 10,
      }

      try {
        await fetch('https://4626a6c590893bdc.mokky.dev/todo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newNote),
        })

        fetchData()
        setNote({
          body: '',
        })
        setToggleForm(!toggleForm)
      } catch (error) {
        console.error('Error:', error)
      }
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`https://4626a6c590893bdc.mokky.dev/todo/${id}`, {
        method: 'DELETE',
      })

      fetchData()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleEdit = (id) => {
    const toEdit = notes.filter((note) => note.id === id)
    setEditNote(toEdit[0])
    setToggleEditForm(!toggleEditForm)
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch(`https://4626a6c590893bdc.mokky.dev/todo/${editNote.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editNote),
      })

      fetchData()
      setEditNote({})
      setToggleEditForm(!toggleEditForm)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <AppContainer className="sticky-notes">
      <header className="text-center">
        <h1>Sticky Notes</h1>
        <button onClick={() => setToggleForm(!toggleForm)}>Add Note</button>
      </header>

      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        note={note.body}
        setToggleForm={setToggleForm}
        toggleForm={toggleForm}
      />

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

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="noteContainer">
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
      )}
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
  .noteContainer {
    display: flex;
    height: fit-content;
    gap: 20px;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
