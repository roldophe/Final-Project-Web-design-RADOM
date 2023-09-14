import './App.css';
import Home from './pages/Home';
import { StickyNavbar } from './components/StickyNavbar';
import { FooterWithSocialLinks } from './components/FooterWithSocialLinks';
import PopularMovies from './pages/PopularMovies';
import Read from './pages/read';
import { Route, Routes, } from 'react-router';
import NowPlaying from './pages/NowPlaying';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';
import AiringToday from './pages/AiringToday';
import OnTV from './pages/OnTV';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Discussion from './pages/Discussion';
import Support from './pages/Support';
import API from './pages/API';
import LeaderBoard from './pages/LeaderBoard';
import MyProfile from './pages/MyProfile';
import PopularPeople from './pages/PopularPeople';
import Notfound from './pages/404';
import DetialPeople from './pages/DetialPeople';

function App() {
  return (
    <>
      <StickyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/read/:id' element={<Read />} />
        <Route path='/popular' element={<PopularMovies />} />
        <Route path='/now playing' element={<NowPlaying />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/top rated' element={<TopRated />} />

        <Route path='/airing Today' element={<AiringToday />} />
        <Route path='/on tv' element={<OnTV />} />

        <Route path='/popular people' element={<PopularPeople />} />
        <Route path='/sign in' element={<SignIn />} />
        <Route path='/sign out' element={<SignUp />} />
        <Route path='/discussions' element={<Discussion />} />
        <Route path='/support' element={<Support />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route path='/api' element={<API />} />

        <Route path='/my profile' element={<MyProfile />} />
        <Route path='/edit profile' element={<Notfound />} />
        <Route path='/help' element={<Notfound />} />
        <Route path='/inbox' element={<Notfound />} />
        <Route path='/help' element={<Notfound />} />

        <Route path='/detail_people/:id' element={<DetialPeople />} />
      </Routes>

      <FooterWithSocialLinks />
    </>
  );
}

export default App;
