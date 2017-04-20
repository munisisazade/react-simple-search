/**
 * Created by munis on 4/20/17.
 */
export function selectBook(book) {

    return {
        type:'BOOK_SELECTED',
        payload: book
    }
}