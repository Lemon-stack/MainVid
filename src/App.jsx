import "./App.css";
import AuthProvider from "./context/Authcontext";
import { Routes, Route, Outlet } from "react-router-dom";
import { Signup, Login, Home, Hero, PasswordReset } from "./Routes/index";
import PrivateRoute from "./context/PrivateRoute";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Hero />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="password-reset" element={<PasswordReset />} />
            <Route
              path="dashboard"
              element={<PrivateRoute element={<Outlet />} />}
            >
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
