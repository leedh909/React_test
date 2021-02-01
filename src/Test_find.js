import React from 'react';

class Test_find extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      items: [],
      select_v: 'ID',
      result: '',
      input_v: '',
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          items: data,
        })
      );
  }

  //검색 목록 값 변경
  selectChange = (e) => {
    console.log('selectChange');
    this.setState({
      select_v: e.target.value,
    });
  };

  //검색 값 변경
  inputChange = (e) => {
    console.log('inputChange');
    this.setState({
      input_v: e.target.value,
    });
  };
  //결과 값 변경
  // resultChange = (e) => {
  //   this.setState({
  //     result: e.target.value,
  //   });
  // };
  //검색버튼 클릭시 이벤트 작성
  select_click = (e) => {
    console.log('select_click');
    //items를 확인해서 있을경우 없을경우
    if (this.state.select_v === 'ID') {
      console.log('1번 ' + this.state.result);
      for (let i = 0; i < this.state.items.length; i++) {
        if (
          this.state.items[i].id.toString() === this.state.input_v.toString()
        ) {
          setTimeout(() => {
            console.log('setTimeout');
            this.setState({
              result:
                this.state.items[i].id + ' / ' + this.state.items[i].title,
            });
            console.log('2번 ' + this.state.result);
          }, 0);
        }
        // console.log(this.state.result);
      }
      if (this.state.result === '') {
        console.log('검색값 없을때');
        this.setState({
          result: '검색하신 값이 없습니다.',
        });
      }
    } else {
      for (let i = 0; i < this.state.items.length; i++) {
        if (this.state.items[i].title === this.state.input_v) {
          this.setState({
            result: this.state.items[i].id + ' / ' + this.state.items[i].title,
          });
        }
      }
      if (this.state.result === '') {
        this.setState({
          result: '검색하신 값이 없습니다.',
        });
      }
    }
  };

  render() {
    console.log('render');
    return (
      <div>
        <label>선택: </label>
        <select
          id="post"
          value={this.state.select_v}
          onChange={this.selectChange}
        >
          <option value="ID">ID</option>
          <option value="Title">Title</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="입력해주세요"
          onChange={this.inputChange}
          id="in_v"
        ></input>
        &nbsp;&nbsp;
        <button type="button" onClick={this.select_click}>
          검색
        </button>
        <br />
        <br />
        <div>결과: {this.state.result}</div>
      </div>
    );
  }
}
export default Test_find;
