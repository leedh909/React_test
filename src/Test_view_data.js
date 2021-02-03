import React from 'react';
import axios from 'axios';

class Test_view_data extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
    axios({
      url: 'http://127.0.0.1:9999/aa',
      method: 'get',
    }).then((response) => {
      console.log(response);
      this.setState({ items: response.data.recordset });
    });
  }

  render() {
    console.log('render');
    const { items } = this.state;
    return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              ID:{item.DepartmentID}
              <br />
              Name:{item.Name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Test_view_data;
