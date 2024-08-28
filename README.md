# -Simple-project-for-begineers-Counter-Component-using-react.js
This project features a React Counter component that demonstrates basic state management and conditional styling in React. The component includes buttons to increase, decrease, and reset the count. The text color of the count changes dynamically based on the value.


Features
Increase Count: Changes the count value by 1 and updates the text color to green.

Decrease Count: Decreases the count value by 1 and changes the text color to red if the count falls below 0.

Reset Count: Resets the count to 0 and changes the text color to black.

Dynamic Styling: Uses inline styles to apply text color based on the current count


Usage
Click on the "Increase" button to increment the count. The text color will turn green.

Click on the "Decrease" button to decrement the count. The text color will turn red if the count is less than 0.

Click on the "Reset" button to set the count back to 0. The text color will revert to black.
Code Overview

Counter Component: Manages the state of the count and its text color. Implements functions to handle the increase, decrease, and reset actions.

Button Component: A reusable button component that accepts id, text, and clickCount as props.
