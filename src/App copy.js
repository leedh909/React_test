import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentwillmou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

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
