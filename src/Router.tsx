import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/auth/Login";
import Signup from "./page/auth/Signup";
import Writepost from "./page/Writepost";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Writepost" element={<Writepost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
