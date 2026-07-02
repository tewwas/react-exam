import React, { useState } from 'react';
import './App.css';

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
    <div style = {{ padding: '20px' }}>
      <h1>Мои заметки</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"/>
        <input
          type="text"
          placeholder="Текст"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input-field"/>
        <button className="add-button" onClick={addNote}>Добавить</button>
      </div>

      <div className="filter-container">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showImportantOnly}
            onChange={(e) => setShowImportantOnly(e.target.checked)}
            style={{ marginRight: '8px' }}/>{' '}
          Только важные
        </label>
      </div>

      <div className="notes-list">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className={`note-card ${note.important ? 'important' : ''}`}>
            <h3 className="note-title">{note.title}</h3>
            <div className="note-text">{note.text}</div>
            <div className="note-actions">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={note.important}
                  onChange={() => toggleImportant(note.id)}/>{' '}
                Важная
              </label>
              <button
                className="delete-button"
                onClick={() => deleteNote(note.id)}>
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;