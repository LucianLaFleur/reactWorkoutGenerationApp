import React from 'react';
import './SuggestionsList.css';

const SuggestionsList = ({ suggestions, addSuggestion, removeSuggestion, addWorkout, replaceSuggestion }) => {
  const handleAddWorkout = (suggestion) => {
    removeSuggestion(suggestion);
    addWorkout(suggestion);
  };

  const handleReplaceSuggestion = (suggestion) => {
    replaceSuggestion(suggestion);
  };

  return (
    <div className="suggestions-list">
      <div className='header-div'>
        <h2>Suggestions</h2>
        <button onClick={addSuggestion}>+ new suggestion</button>
      </div>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>
            <span className='suggestion'>{suggestion}</span>
            <button onClick={() => handleAddWorkout(suggestion)}>Add</button>
            <button onClick={() => handleReplaceSuggestion(suggestion)}>Re-roll</button>
            <button className='x-button' onClick={() => removeSuggestion(suggestion)}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsList;



