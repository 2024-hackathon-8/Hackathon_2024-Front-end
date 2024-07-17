import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Writepost from './components/organism/Writepost';
import LogInPage from './page/logIn/page';
import MainPage from './page/main/page';
import { Header } from './components/designSystem/Header';
import { Footer } from './components/designSystem/Footer';
import PostPage from './page/post/page';
import SignupType from './components/organism/signUp/signUpType';
import Interest from './components/organism/signUp/interest';
import Infomation from './components/organism/signUp/infomation';
import Signup from './components/organism/signUp';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/infomation" element={<Infomation />} />
        <Route path="/signupType" element={<SignupType />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/write" element={<Writepost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
