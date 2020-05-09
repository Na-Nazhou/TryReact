import React, { useState, useEffect } from 'react';

export const HookDemo = () => {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:  
  // Runs after every render
  // Schedule a different effect every time
  // If your effect returns a function, React will run it when it is time to clean up
  // Skip applying an effect if certain values haven't changed betweeen re-renders
  // pass an array as an optional second argument to useEffect
  // If [] is passed in, effect does not depend on any value from props / states
  useEffect(() => {
    // Update the document title using the browser API    
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}