import React from 'react';
import axios from 'axios';

class Test_sql_insert extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor');
    this.state = {
      items: [],
      name: '',
      job: '',
    };
  }

  componentWillMount() {
    // console.log('componentWillMount');
    axios({
      url: 'http://127.0.0.1:9999/select',
      method: 'get',
    }).then((response) => {
      console.log(response);
      this.setState({ items: response.data.recordset });
    });
  }

  select_data = (e) => {
    axios({
      url: 'http://127.0.0.1:9999/select',
      method: 'get',
    }).then((response) => {
      console.log(response);
      this.setState({ items: response.data.recordset });
    });
  };

  nameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  jobChange = (e) => {
    this.setState({
      job: e.target.value,
    });
  };

  insert_data = (e) => {
    console.log('insert_data:', this.state.name, this.state.job);
    axios
      .get('http://127.0.0.1:9999/insert', {
        params: {
          name: this.state.name,
          job: this.state.job,
        },
      })
      .then((response) => {
        console.log('insert: ', response);
      });
    this.select_data();
    this.setState({ name: '', job: '' });
  };

  render() {
    // console.log('render');
    const { items } = this.state;
    return (
      <div>
        <div>Emplyee 테이블</div>
        <ul>
          {items.map((item) => (
            <li key={item.empno}>
              이름:{item.empname}, 작업:{item.job}
            </li>
          ))}
        </ul>
        <hr />
        <h3 style={{ marginLeft: 50 }}>데이터 추가하기</h3>
        <form>
          <div>
            이름: &nbsp;
            <input value={this.state.name} onChange={this.nameChange}></input>
          </div>
          <div>
            직업: &nbsp;
            <input value={this.state.job} onChange={this.jobChange}></input>
          </div>
          <div>
            <button
              type="button"
              style={{ marginLeft: 150, marginTop: 10 }}
              onClick={this.insert_data}
            >
              추가하기
            </button>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}
export default Test_sql_insert;
