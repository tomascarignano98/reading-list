import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="login" replace />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" replace />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" replace />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
