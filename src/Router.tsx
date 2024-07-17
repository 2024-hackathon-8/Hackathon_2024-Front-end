import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from "./components/organism/logIn";
// import Signup from "./components/organism/Signup";
import Writepost from './components/organism/Writepost';
import AllPost from './components/organism/AllPost';
import LogInPage from './page/logIn/page';
import SignupCompo from './components/organism/signUp';
import { MainPage } from './page/main/page';
import { Header } from './components/designSystem/Header';
import { Footer } from './components/designSystem/Footer';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignupCompo />} />
        <Route path="/post" element={<AllPost />} />
        <Route path="/write" element={<Writepost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
