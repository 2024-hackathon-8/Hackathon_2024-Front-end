import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from "./components/organism/logIn";
// import Signup from "./components/organism/Signup";
import Writepost from './components/organism/Writepost';
import AllPost from './components/organism/AllPost';
import HeaderLogined from './components/designSystem/common/headerLogined';
import HeaderNotLogin from './components/designSystem/common/headerNotLogin';
import LogInPage from './page/logIn/page';
import SignupCompo from './components/organism/signUp';
import { MainPage } from './page/main/page';

export default function Router() {
  return (
    <BrowserRouter>
      <HeaderNotLogin />
      {/* <HeaderLogined /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignupCompo />} />
        <Route path="/post" element={<AllPost />} />
        <Route path="/write" element={<Writepost />} />
      </Routes>
    </BrowserRouter>
  );
}
