import './App.css';
import { Component } from 'react';

class Test_Input extends Component {
  state = { text1: '', text2: '' };

  handleChange = (e) => {
    this.setState({
      text1: e.target.value,
    });
  };
  handleChange2 = (e) => {
    this.setState({
      text2: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <div>
          입력1:{' '}
          <input value={this.state.text1} onChange={this.handleChange}></input>
        </div>
        <div>
          입력2:{' '}
          <input value={this.state.text2} onChange={this.handleChange2}></input>
        </div>
        <div>입력1의 값:{this.state.text1}</div>
        <div>입력2의 값:{this.state.text2}</div>
      </form>
    );
  }
}

export default Test_Input;
