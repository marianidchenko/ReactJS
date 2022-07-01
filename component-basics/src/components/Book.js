export const Book = (props) => {
  return (
    <li>
      <article>
        <h2>{props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>Price: ${props.price.toFixed(2)}</p>
        <footer>
          <span>Published by {props.edition}</span>
          <span> in {props.year}</span>
        </footer>
      </article>
    </li>
  );
};
