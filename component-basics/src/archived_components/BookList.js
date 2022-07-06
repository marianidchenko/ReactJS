import { Book } from "./Book";

export const BookList = (props) => {
    const bookElements = props.books.map((book, index) => (
        <Book key={index} {...book} />
    ));
    return <ul>{bookElements}</ul>;
};
