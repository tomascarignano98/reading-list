import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export function useLogin() {
  const [error, setError] = useState(null);

  function login(email, password) {
    setError(null);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential.user)
      .catch((error) => setError(error.message));
  }

  return { error, login };
}
