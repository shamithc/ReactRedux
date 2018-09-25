export function selectBook(book) {
    // console.log('Book selected:', book.title)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}