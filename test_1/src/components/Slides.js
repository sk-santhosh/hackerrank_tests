import React, { useState } from "react";

function Slides({ slides }) {
  const [state, setState] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={state === 0}
          onClick={() => setState(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={state === 0}
          onClick={() => setState(state - 1)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={slides.length - 1 === state}
          onClick={() => setState(state + 1)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[state].title}</h1>
        <p data-testid="text">{slides[state].text}</p>
      </div>
    </div>
  );
}

export default Slides;
