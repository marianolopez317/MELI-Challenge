import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Home from "./containers/Home";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import SearchResultsPage from "./containers/SearchResultsPage";
import { AppProvider} from './contexts/AppContext'
import './App.scss';
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <AppProvider>
          <Header/>
          <Main>
            <Categories/>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/items">
                <SearchResultsPage/>
              </Route>
              <Route path="/items/:id">
                <ProductDetailsPage/>
              </Route>
            </Switch>
          </Main>
        </AppProvider>
      </div>
    </Router>
  );
}

export default App;
