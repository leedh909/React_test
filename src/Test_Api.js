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
      .then((data) =>
        this.setState({
          items: data,
        })
      );
  }

  render() {
    const { items } = this.state;
    const itemsList = items.map((item) => (
      <li key={item.id} id={item.id}>
        ID:{item.id}
        <br></br>
        title:{item.title}
      </li>
    ));

    return <ul>{itemsList}</ul>;
  }
}
export default App;
