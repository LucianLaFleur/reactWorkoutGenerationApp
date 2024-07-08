import React, { useState } from 'react';
import SuggestionsList from './SuggestionArea';
import ChosenWorkoutsList from './ChosenWorkoutsArea';
// import CountdownTimer from './CountdownTimer';

function getRandomItems(arr, numItems) {
  const result = new Set();
  while (result.size < numItems) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.add(arr[randomIndex]);
  }
  return Array.from(result);
}

const sourceArr = [...Array(150).keys()].map(i => i + 1); // Assume these represent exercises

function getRandomFromSource(excludedItems) {
  const availableItems = sourceArr.filter(item => !excludedItems.includes(item));
  const randomIndex = Math.floor(Math.random() * availableItems.length);
  return availableItems[randomIndex];
}

function App() {
  const initialSuggestions = getRandomItems(sourceArr, 6);
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const removeWorkout = (workout) => {
    const updatedWorkouts = workouts.filter((item) => item !== workout);
    setWorkouts(updatedWorkouts);
  };

  const removeSuggestion = (suggestion) => {
    const updatedSuggestions = suggestions.filter((item) => item !== suggestion);
    setSuggestions(updatedSuggestions);
  };

  const replaceSuggestion = (oldSuggestion) => {
    // Find the index of the oldSuggestion in the suggestions array
    const index = suggestions.findIndex(suggestion => suggestion === oldSuggestion);

    if (index !== -1) { // Ensure the oldSuggestion is found
      // Get a new suggestion excluding the old suggestion and current suggestions
      const newSuggestion = getRandomFromSource([oldSuggestion, ...suggestions]);

      // Create a new array with the oldSuggestion removed and the newSuggestion inserted at the same index
      const newSuggestions = [...suggestions.slice(0, index), newSuggestion, ...suggestions.slice(index + 1)];
      setSuggestions(newSuggestions);
    }
  };

  const addSuggestion = () => {
    const newSuggestion = getRandomFromSource([...suggestions, ...workouts]);
    setSuggestions([...suggestions, newSuggestion]);
  };

  return (
    <div className="App">
      {/* <CountdownTimer /> */}
      <div className="lists-container">
        <SuggestionsList
          suggestions={suggestions}
          addSuggestion={addSuggestion}
          removeSuggestion={removeSuggestion}
          addWorkout={addWorkout}
          replaceSuggestion={replaceSuggestion}
          sourceArr={sourceArr}
        />
        <ChosenWorkoutsList workouts={workouts} removeWorkout={removeWorkout} />
      </div>
    </div>
  );
}

export default App;
