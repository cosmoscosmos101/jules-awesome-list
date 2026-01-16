import React from 'react';
import { helloWorld } from '../exercises/hello_world';

const ExerciseViewer = () => {
  return (
    <div>
      <h2>{helloWorld.title}</h2>
      <p>{helloWorld.description}</p>
    </div>
  );
};

export default ExerciseViewer;
