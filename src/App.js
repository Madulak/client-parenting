import './App.css';
import React from 'react';
import RichTextEditor from './components/RichTextEditor';
import { Switch, Route } from 'react-router-dom';
import Auth from './Routes/Auth/Auth';

function App() {

  return (
      <Switch>
          <Route path='/'>
                <Auth />
          </Route>
      </Switch>
    );
}

export default App;
