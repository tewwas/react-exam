import React from 'react';

function Filter({ showImportantOnly, setShowImportantOnly }) {
  return (
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
  );
}

export default Filter;