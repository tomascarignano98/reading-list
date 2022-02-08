import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export function useCollection(colName) {
  const [documents, setDocuments] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const ref = collection(db, colName);
    const q = query(ref, where('uid', '==', user.uid));
    const unsub = onSnapshot(
      q,
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
  }, [colName, user]);

  return { documents };
}
