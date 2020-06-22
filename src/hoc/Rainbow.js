import React from 'react'

const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'pink', 'orange', 'black', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 4)];
  const className = randomColour + '-text';

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>  
  )
  
}

export default Rainbow
