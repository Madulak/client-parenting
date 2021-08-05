import './App.css';
import React from 'react';
import RichTextEditor from './components/RichTextEditor';
import { Switch, Route, Redirect } from 'react-router-dom';

import Auth from './Routes/Auth/Auth';
import Home from './Routes/Home/home';

import { useSelector } from 'react-redux';

function App() {

    const auth = useSelector(state => state.auth.isAuth);
    console.log(auth);

  return (
      <Switch>

          {auth ?
                <Route path='/'>
                    {auth ? <Home /> : <Auth />}
                </Route>
            :
            <>
                <Route path='/auth'>
                    <Auth  />
                </Route>

                <Route>
                    <Auth  />
                </Route>

            </>
            
            
          }

          

          
      </Switch>
    );
}

export default App;
