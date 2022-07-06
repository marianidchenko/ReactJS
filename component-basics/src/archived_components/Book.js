import { useEffect, useState } from "react";
import styles from './Book.module.css';

export const Book = (props) => {
  const [highlighted, setHighlighted] = useState(false);
  const [marked, setMarked] = useState(false);

  const clickHandler = (event) => {
    setHighlighted(state => !state);
  };

  const deleteHandler = (event) => {
    setMarked(state => !state);
  };

  useEffect(() => {console.log('Mounting')}, []) 
  // only applies the first time with empty list

  useEffect(() => {console.log('Updatiing')}, [highlighted, props.title]) 

  let style = {};
  if (highlighted) {
    style.backgroundColor = 'black';
  }

  if (marked) {
    style.backgroundColor = 'skyblue'
  }

  return (
    <li className={styles['book-item']} onClick={clickHandler} style={style}>
      <article>
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>Price: ${props.price.toFixed(2)}</p>
        <footer>
          <span>Published by {props.edition}</span>
          <span> in {props.year}</span>
        </footer>
        <button onClick={deleteHandler}>Delete</button>
      </article>
    </li>
  );
};
