import React from 'react';
import '../App.css';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Hasher from "./HasherComponent/HasherComponent";
import HashVerifier from "./HashVerifierComponent/HasherVerifierComponent";




function App() {
  return (
      <BrowserRouter>
          <div>
              <Switch>
                  <Route  path="/" exact component={Hasher}/>
                  <Route  path="/verify" exact component={HashVerifier}  />
              </Switch>
          </div>
      </BrowserRouter>

  );
}

export default App;
