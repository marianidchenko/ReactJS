import { Book } from "./Book";

export const BookList = (props) => {
  return (
    <ul>
        <Book
          title={props.books[0].title}
          author={props.books[0].author}
          year={props.books[0].year_written}
          edition={props.books[0].edition}
          price={props.books[0].price}
        />
      <Book
        title={props.books[1].title}
        author={props.books[1].author}
        year={props.books[1].year_written}
        edition={props.books[1].edition}
        price={props.books[1].price}
      />
      <Book
        title={props.books[2].title}
        author={props.books[2].author}
        year={props.books[2].year_written}
        edition={props.books[2].edition}
        price={props.books[2].price}
      />
      <Book
        title={props.books[3].title}
        author={props.books[3].author}
        year={props.books[3].year_written}
        edition={props.books[3].edition}
        price={props.books[3].price}
      />
    </ul>
  );
};
