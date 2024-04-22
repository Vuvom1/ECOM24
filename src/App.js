import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home.js';
import Services from './components/Pages/Services.js';
import Products from './components/Pages/Products.js';
import SignIn from './components/Pages/SignIn.js';
import TeamsPage from './features/Teams/TeamPage.js';
import TeamDetailPage from './features/Teams/TeamDetailPage.js';

import Navbar from './components/Navbar';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/teams" exact element={<TeamsPage/>}></Route>
          <Route path='/teamdetail' exact element={<TeamDetailPage/>}></Route>
          <Route path="/services" exact element={<Services />}></Route>
          <Route path="/sign-in" exact element={<SignIn />}></Route>
          <Route path="/posts" exact element={<Products />}></Route>
          <Route path='/info' exact element={''}></Route> 
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
