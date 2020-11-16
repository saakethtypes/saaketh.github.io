import React,{Component} from 'react';
import {Portfolio} from './pages/Portfolio'
import { Sidebar } from './components/Sidebar';
import { BrowserRouter as BRouter, Route, Switch  } from "react-router-dom";
class App extends Component {
  render(){
    return (
      <div className="App">
        <BRouter>
        <Switch>
        <Route exact path='/saakethcodes' component={Sidebar} />      
          <Route exact path='/' component={Portfolio} />
        </Switch>
        </BRouter>
      </div>)
  }
}
export default App;
