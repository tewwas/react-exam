import React from 'react';

function NoteForm({ title, setTitle, text, setText, addNote }) {
  return (
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
  );
}

export default NoteForm;