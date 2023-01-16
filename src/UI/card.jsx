import React from 'react';

const Card = ({ className, head, message, btn, icon }) => {
  return (
    <>
      <article className={`card ${className}`}>
        <h2>{head}</h2>
        <div>
          {icon ? icon : null}
          <p>{message}</p>
        </div>
        {btn ? <button className="btn">{btn}</button> : null}
      </article>
    </>
  );
};

export default Card;
