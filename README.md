## 1. What is JSX, and why is it used?
**JSX** stands for *JavaScript XML.*  
It allows us to write HTML-like code inside JavaScript.  
It makes the code easier to read and helps React show UI elements efficiently.

---

## 2. What is the difference between State and Props?
- **State:** Data that can change inside a component.  
- **Props:** Data passed from parent to child components.  
- State is *internal*, Props are *external.*

---

## 3. What is the useState hook, and how does it work?
`useState` is a React Hook that lets us create and manage state in a functional component.  
It returns an array: `[value, setValue]`, where `setValue` updates the state and re-renders the UI.

---

## 4. How can you share state between components in React?
We can share state by **lifting it up** to a common parent component, then passing it down to child components using **props.**

---

## 5. How is event handling done in React?
Events in React are handled using **camelCase** syntax (e.g., `onClick`).  
We pass a function as the event handler, like this:

**Example (in JSX):**
```jsx
<button onClick={handleClick}>Click Me</button>
