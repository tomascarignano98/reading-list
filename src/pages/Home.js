import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { db } from '../firebase/config';

export default function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const ref = collection(db, 'books');
        const querySnapshot = await getDocs(ref);

        if (querySnapshot.empty) {
          setBooks([]);
        } else {
          const results = [];
          querySnapshot.forEach((doc) =>
            results.push({ id: doc.id, ...doc.data() })
          );
          setBooks(results);
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
