import React from 'react';

function NoteCard({ note, toggleImportant, deleteNote }) {
  return (
    <div
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
  );
}

export default NoteCard;