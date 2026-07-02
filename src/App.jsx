import React, { useReducer, useState, useMemo } from 'react';
import './App.css';

import NoteCard from './components/NoteCard.jsx';
import NoteForm from './components/NoteForm.jsx';
import Filter from './components/Filter.jsx';

const initialState = [];

function notesReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, {
        id: Date.now(),
        title: action.payload.title,
        text: action.payload.text,
        important: false,
      }];
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload.id);
    case 'TOGGLE_IMPORTANT':
      return state.map(note => {
        if (note.id === action.payload.id) {
          return { ...note, important: !note.important };
        }
        return note;
      });
    default:
      return state;
  }
}

function App() {
  const [notes, dispatch] = useReducer(notesReducer, initialState);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const addNote = () => {
    if (title && text) {
      dispatch({ type: 'ADD_NOTE', payload: { title, text } });
      setTitle('');
      setText('');
    }
  };

  const deleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: { id } });
  };

  const toggleImportant = (id) => {
    dispatch({ type: 'TOGGLE_IMPORTANT', payload: { id } });
  };

  const filteredNotes = useMemo(() => {
    return showImportantOnly ? notes.filter(note => note.important) : notes;
  }, [notes, showImportantOnly]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Мои заметки</h1>
      <NoteForm
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        addNote={addNote}/>
      <Filter
        showImportantOnly={showImportantOnly}
        setShowImportantOnly={setShowImportantOnly}/>
      <div className="notes-list">
        {filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            toggleImportant={toggleImportant}
            deleteNote={deleteNote}/>
        ))}
      </div>
    </div>
  );
}

export default App;