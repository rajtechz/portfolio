import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import LogIn from "./common/LogIn";
import ProtectedRoute from "./common/ProtectedRoute";
import SignUp from "./common/SignUp";
import ForgetPassword from "./common/ForgetPassword";


function App() {

  return (
    <>
      <UserAuthContextProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/" element={<LogIn />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />

          </Routes>

        </BrowserRouter>
      </UserAuthContextProvider>

    </>
  );
}

export default App;
