# React Lifecycle

React Lifecycle refers to the different phases a React component goes through during its lifetime.

A React component mainly goes through three phases:

1. Mounting
2. Updating
3. Unmounting


## 1. Mounting

Mounting is the phase when a component is created and added to the DOM.

In functional components, `useEffect()` with an empty dependency array is commonly used for operations that should run after the initial render.

Example:

useEffect(() => {
  console.log("Component Mounted");
}, []);

Common uses:

- API calls
- Fetching initial data
- Adding event listeners
- Starting timers


## 2. Updating

Updating occurs when the component's state or props change.

When state or props change, React re-renders the component.

Example:

useEffect(() => {
  console.log("Count Updated");
}, [count]);

This effect runs whenever the `count` value changes.

Common reasons for updating:

- State changes
- Props changes
- Parent component re-renders


## 3. Unmounting

Unmounting occurs when a component is removed from the DOM.

For cleanup operations, we return a cleanup function from `useEffect()`.

Example:

useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);

The cleanup function is used for:

- Clearing timers
- Removing event listeners
- Cancelling subscriptions
- Cleaning up resources


## Lifecycle Flow

Mounting
   ↓
Component Created
   ↓
Render
   ↓
useEffect()
   ↓
Updating
   ↓
State / Props Change
   ↓
Re-render
   ↓
useEffect()
   ↓
Unmounting
   ↓
Component Removed
   ↓
Cleanup Function


## React Lifecycle in Class Components

Class components have specific lifecycle methods.

### Mounting

constructor()
     ↓
getDerivedStateFromProps()
     ↓
render()
     ↓
componentDidMount()


### Updating

getDerivedStateFromProps()
     ↓
shouldComponentUpdate()
     ↓
render()
     ↓
getSnapshotBeforeUpdate()
     ↓
componentDidUpdate()


### Unmounting

componentWillUnmount()


## Class Components vs Functional Components

Class Component              Functional Component

constructor()                useState()
componentDidMount()          useEffect(() => {}, [])
componentDidUpdate()         useEffect(() => {}, [dependency])
componentWillUnmount()       useEffect() cleanup function


## useEffect Dependency Array

### 1. No Dependency Array

useEffect(() => {
  console.log("Runs after every render");
});

Runs after every render.


### 2. Empty Dependency Array

useEffect(() => {
  console.log("Runs after initial render");
}, []);

Runs after the component mounts.


### 3. Dependency Array with Value

useEffect(() => {
  console.log("Count changed");
}, [count]);

Runs whenever `count` changes.


## Example

import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;


## Interview Answer

React Lifecycle consists of three main phases:

1. Mounting
2. Updating
3. Unmounting

Mounting happens when the component is created and added to the DOM.

Updating happens when the component's state or props change.

Unmounting happens when the component is removed from the DOM.

In functional components, we mainly use the `useEffect` hook to handle side effects during these phases.


## Important Interview Points

- `useEffect()` is used to handle side effects.
- `useEffect(() => {}, [])` runs after the initial render.
- `useEffect(() => {}, [dependency])` runs when the dependency changes.
- The cleanup function runs before the effect runs again and when the component unmounts.
- Side effects include API calls, timers, subscriptions, and event listeners.
- Functional components use Hooks instead of class lifecycle methods.