import React from 'react';

// Stateless Functional Component - only when it just needs to render HTML to the DOM

const Header = (props) => {
  return (
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        of the day </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

export default Header;