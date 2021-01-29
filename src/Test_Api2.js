import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
        });
        // console.log(this.state.items, 'this.state.items');
      });
  }

  render() {
    const { items } = this.state;

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            ID:{item.id}
            <br />
            Title:{item.title}
          </li>
        ))}
      </ul>
    );
  }
}
export default App;
