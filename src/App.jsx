import {Route, Switch} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './layout/MainNavigation';

function App() {
  return (
  <div>
    <MainNavigation />
    <Switch>
  <Route path='/' exact>
    <AllMeetupsPage />
  </Route>
  <Route path='/new-meetup'>
    <NewMeetupPage />
    </Route>
    <Route path='/favorites'>
      <FavoritesPage />
      </Route>
      </Switch>
 </div>
  );
}

export default App;