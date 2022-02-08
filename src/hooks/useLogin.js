import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export function useLogin() {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  function login(email, password) {
    setError(null);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => dispatch({ type: 'LOGIN', payload: res.user }))
      .catch((error) => setError(error.message));
  }

  return { error, login };
}
