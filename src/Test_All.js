import './App.css';
import React from 'react';
import Test_Select from './Test_Select';
import { Route } from 'react-router-dom';
import MessionMenu from './Components/MessionMenu';
import Test_Input from './Test_Input';
import Test_Api from './Test_Api';
import Test_Layout from './Test_Layout';
import Test_find from './Test_find';

class Test_All extends React.Component {
  render() {
    return (
      <div>
        <h1>미션</h1>
        <MessionMenu />
        <Route exact path="/" />
        <Route exact path="/Test_Layout" component={Test_Layout} />
        <Route exact path="/Test_Input" component={Test_Input} />
        <Route exact path="/Test_Select" component={Test_Select} />
        <Route exact path="/Test_Api" component={Test_Api} />
        <Route exact path="/Test_find" component={Test_find} />
      </div>
    );
  }
}
export default Test_All;
