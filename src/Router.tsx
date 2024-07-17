import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from "./components/organism/logIn";
// import Signup from "./components/organism/Signup";
import Writepost from './components/organism/Writepost';
import LogInPage from './page/logIn/page';
import SignupCompo from './components/organism/signUp';
import MainPage from './page/main/page';
import { Header } from './components/designSystem/Header';
import { Footer } from './components/designSystem/Footer';
import PostPage from './page/post/page';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignupCompo />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/write" element={<Writepost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
