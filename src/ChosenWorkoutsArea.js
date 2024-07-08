import React from 'react';

const ChosenWorkoutsList = ({ workouts, removeWorkout }) => {
  return (
    <div className="workout-list">
      <h2>Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout}
            <button className='x-button' onClick={() => removeWorkout(workout)}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChosenWorkoutsList;
