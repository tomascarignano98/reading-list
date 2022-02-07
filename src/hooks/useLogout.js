import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export function useLogout() {
  const [error, setError] = useState(null);

  function logout() {
    setError(null);

    signOut(auth).catch((error) => setError(error.message));
  }

  return { error, logout };
}
