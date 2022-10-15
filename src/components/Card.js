 import React from 'react';

 const Card = (props) => {
  return(
    <div className='card'>
      {props.children}
      <h3 className='card_title'>{props.title}</h3>
      <p className='card_text'>{props.text}</p>
      <button className='card_btn'>Go samewhere</button>
    </div>
  )
}

export default Card;
