# **Pre-Notes: Understanding `useState` and `useEffect`**

## **React Hooks Overview**
React Hooks allow functional components to manage state and lifecycle events. Two fundamental Hooks you'll use frequently are `useState` and `useEffect`.

### **What is `useState`?**
- `useState` enables functional components to manage state.
- It takes an initial value and returns an array with two elements:
  1. The current state.
  2. A function to update the state.

 ### Example for UseSate

```javascript
import React, { useState } from 'react';

function Counter() {
  // Step 1: Using useState to store the counter value
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

#### **Key Features:**
- State updates are asynchronous.
- React re-renders the component whenever the state is updated.

### **What is `useEffect`?**
- `useEffect` is used to perform side effects in functional components.
- Common side effects include:
  - Fetching data.
  - Updating the DOM.
  - Subscribing to or cleaning up resources like event listeners.

#### Example code for UseEffect
  ```javascript
  import React, { useState, useEffect } from 'react';

  function Counter() {
    // Using useState to store the counter value
    const [count, setCount] = useState(0);
  
    // Step 2: Using useEffect to log when the count value changes
    useEffect(() => {
      console.log(`The counter value is: ${count}`);
    }, [count]); // Runs only when 'count' changes
  
    return (
      <div>
        <h1>Counter App</h1>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }
  
  export default Counter;
```

#### **Key Features:**
- Runs after the render by default.
- Can be controlled using the **dependency array**:
  - Empty array `[]`: Runs only once after the initial render.
  - Specific dependency `[value]`: Runs when `value` changes.
  - No array: Runs after every render.

---

# **Assignment: Build a Counter App**

## **Objective:**
The goal is to create a Counter App that demonstrates:
1. How to use `useState` for managing state.
2. How to use `useEffect` for performing side effects.

---

## **Steps to Complete the Assignment**

1. **Setup:**
   - Create a new React component called `CounterApp.js`.
   - Import `useState` and `useEffect` from React.

2. **Use `useState`:**
   - Create a state variable `count` with an initial value of 0.
   - Add two buttons: one to increment the counter and another to decrement it.


3. **Use `useEffect`:**
   - Log the current value of the counter to the console whenever it changes.

4. **UI Layout:**
   - Display the current counter value.
   - Style the buttons for a better user experience.

---

## **Deliverables**
- A working Counter App with:
  - Increment and decrement functionality.
  - A console log message whenever the counter value changes.

---

## **Bonus Task:**
- Extend the app to include a reset button that sets the counter back to 0.