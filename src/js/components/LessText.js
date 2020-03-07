// First: import useState. It's a named export from 'react'
// Or we could skip this step, and write React.useState
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// This component expects 2 props:
//   text - the text to display
//   maxLength - how many characters to show before "read more"
export default function LessText({ text, maxLength }) {
  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  console.log("inside LessText function before useState");
  const [hidden, setHidden] = useState(true);
  console.log("inside LessText function after useState");

  // If the text is short enough, don't bother with the
  // buttons
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> read more</a>
      ) : (
        <a onClick={() => setHidden(true)}> read less</a>
      )}
    </span>
  );
}