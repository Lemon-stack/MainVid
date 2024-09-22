import "./App.css";
import AuthProvider from "./context/Authcontext";
import { Routes, Route, Outlet } from "react-router-dom";
import PrivateRoute from "./context/PrivateRoute";
import SignIn from "./auth/Signin";
import Home from "./main/Home";
import Hero from "./main/Hero";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Hero />} />
            <Route path="signin" element={<SignIn />} />
            {/* <Route path="password-reset" element={<PasswordReset />} /> */}
            <Route path="home" element={<PrivateRoute element={<Outlet />} />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
