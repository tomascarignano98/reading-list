import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export function useSignup() {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  function signup(email, password) {
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => dispatch({ type: 'LOGIN', payload: res.user }))
      .catch((error) => setError(error.message));
  }

  return { error, signup };
}
