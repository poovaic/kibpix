import './App.scss';
import Home from './Screens/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route,Routes} from 'react-router-dom';
import Movies from './Screens/Movies';
import TVShows from './Screens/TVShows';
import NoMatch from './Screens/NoMatch';
import TVShowDetails from './Screens/TVShowDetails';



function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/Movies/:id" element={<Movies/>}/>
        <Route path="/TVShows" element={<TVShows/>}/>
        <Route path="/TVShows/:tvshow_id" element={<TVShowDetails/>}/>
        <Route path="/*" element={<NoMatch/>}/>
      </Routes>


      <Footer/>

    </div>
  );
}

export default App;
