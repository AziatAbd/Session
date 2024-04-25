import Note from './components/Note'
import Form from './components/Form'
import styled from 'styled-components'

function App() {
  return (
    <AppContainer className="sticky-notes">
      <header className="text-center">
        <h1 className="text-3xl font-bold pt-2 pb-2 text-blue-900">
          Sticky Notes
        </h1>
        <button className="bg-blue-500 py-2 px-4 text-white rounded">
          Add Note
        </button>
      </header>

      {/* add new note form */}
      <Form />

      {/* edit note form */}
      {/* {toggleEditForm && (
        <>
          <Form />
        </>
      )} */}

      <div className="notes border-t-2 border-gray-200 mt-5 pt-5 container mx-auto grid md:grid-cols-4 gap-10">
        {[].length > 0 ? (
          [].map((singleNote, i) => {
            return <Note key={i} />
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
