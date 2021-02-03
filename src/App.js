import './App.css';
import React from 'react';
import Test_All from './Test_All';
import Test_axios_method from './Test_axios_method';
// import Test_express_db from './Test_express_db';
import Test_view_data from './Test_view_data';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Test_All /> */}
        {/* <Test_axios_method /> */}
        {/* <Test_express_db /> */}
        <Test_view_data />
      </div>
    );
  }
}

export default App;
