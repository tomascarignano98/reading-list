import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export function useLogout() {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  function logout() {
    setError(null);

    signOut(auth)
      .then((res) => dispatch({ type: 'LOGOUT' }))
      .catch((error) => setError(error.message));
  }

  return { error, logout };
}
