import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export function useSignup() {
  const [error, setError] = useState(null);

  function signup(email, password) {
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => console.log('user signed up: ', res.user))
      .catch((error) => setError(error.message));
  }

  return { error, signup };
}
