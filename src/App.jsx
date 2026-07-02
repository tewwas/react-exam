import React, { useState } from 'react';
import './App.css';

import NoteCard from './components/NoteCard.jsx';
import NoteForm from './components/NoteForm.jsx';
import Filter from './components/Filter.jsx';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [showImportantOnly, setShowImportantOnly] = useState(false);

  const addNote = () => {
    if (title && text) {
      const newNote = {
        id: Date.now(),
        title: title,
        text: text,
        important: false,
      };
      setNotes([...notes, newNote]);
      setTitle('');
      setText('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleImportant = (id) => {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          return { ...note, important: !note.important };
        }
        return note;
      })
    );
  };

  const filteredNotes = showImportantOnly ? notes.filter(note => note.important) : notes;

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