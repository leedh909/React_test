import React from 'react';
import axios from 'axios';

class Test_axios_method extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    axios({
      url: 'https://127.0.0.1:3000/',
      method: 'get',
    }).then((response) => {
      this.setState({ items: response.data });
    });
  }

  render() {
    console.log('render');
    console.log(this.state.items);
    return (
      <div>
        <div>결과: {this.state.result}</div>
      </div>
    );
  }
}
export default Test_axios_method;
