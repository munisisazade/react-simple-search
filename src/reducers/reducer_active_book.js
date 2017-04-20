/**
 * Created by munis on 4/20/17.
 */
export default function (state=null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}