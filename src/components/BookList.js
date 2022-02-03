import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import trashIcon from '../assets/trashcan.svg';

export default function BookList({ books }) {
  const handleClick = async (id) => {
    const ref = doc(db, 'books', id);
    await deleteDoc(ref);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ position: 'relative' }}>
            {book.title}
            <img
              className="delete-icon"
              src={trashIcon}
              alt="delete icon"
              onClick={() => handleClick(book.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
