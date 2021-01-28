import './App.css';
// import styled from 'styled-components';
import { Component } from 'react';

class App extends Component {
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

  position() {
    console.log(this.state.text2 + this.state.text1);
    if (this.state.text1 === '탑')
      return (
        <select value={this.state.text2} onChange={this.handleChange2}>
          <option value=""></option>
          <option value="가렌">가렌</option>
          <option value="다리우스">다리우스</option>
        </select>
      );
    if (this.state.text1 === '정글')
      return (
        <select value={this.state.text2} onChange={this.handleChange2}>
          <option value=""></option>
          <option value="그라가스">그라가스</option>
          <option value="워윅">워윅</option>
        </select>
      );
    if (this.state.text1 === '미드')
      return (
        <select value={this.state.text2} onChange={this.handleChange2}>
          <option value=""></option>
          <option value="오른">오른</option>
          <option value="루시안">루시안</option>
        </select>
      );
    if (this.state.text1 === '봇')
      return (
        <select value={this.state.text2} onChange={this.handleChange2}>
          <option value=""></option>
          <option value="이즈리얼">이즈리얼</option>
          <option value="베인">베인</option>
        </select>
      );
    if (this.state.text1 === '서폿')
      return (
        <select value={this.state.text2} onChange={this.handleChange2}>
          <option value=""></option>
          <option value="잔나">잔나</option>
          <option value="레오나">레오나</option>
        </select>
      );
    else {
      return (
        <select value={this.state.value} onChange={this.handleChange2}>
          <option value=""></option>
        </select>
      );
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>
            포지션:
            <select
              id="position"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="탑">탑</option>
              <option value="정글">정글</option>
              <option value="미드">미드</option>
              <option value="봇">봇</option>
              <option value="서폿">서폿</option>
            </select>
          </label>
        </form>

        <form>
          <label>
            챔피언:
            {this.position()}
          </label>
        </form>

        <div>{this.state.text1}</div>
        <div>{this.state.text2}</div>
      </div>
    );
  }
}

export default App;
