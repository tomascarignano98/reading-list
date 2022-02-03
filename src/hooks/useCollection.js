import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

export function useCollection(colName) {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const ref = collection(db, colName);
    const unsub = onSnapshot(
      ref,
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setDocuments([]);
        } else {
          const results = [];
          querySnapshot.forEach((doc) =>
            results.push({ id: doc.id, ...doc.data() })
          );
          setDocuments(results);
        }
      },
      (e) => console.log(e)
    );

    return () => unsub();
  }, [colName]);

  return { documents };
}
