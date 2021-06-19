import './App.css';
import ContextProvider from './Context.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Title from './components/Title.js';
import Quiz from './components/Quiz.js';
import Results from './components/Results.js';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Title}/>

            <Route exact path='/quiz' component={Quiz}/>

            <Route exact path='/results' component={Results}/>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;