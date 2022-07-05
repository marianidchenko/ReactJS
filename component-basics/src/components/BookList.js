import { Book } from "./Book";

export const BookList = (props) => {
    const bookElements = props.books.map(book => (
        <Book
            title={book.title}
            year={book.year_written}
            price={book.price}
            author={book.author}
            edition={book.edition}
        />
    ));
    return <ul>
      {bookElements}
    </ul>;
};
