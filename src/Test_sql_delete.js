import React from 'react';
import axios from 'axios';

class Test_sql_delete extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor');
    this.state = {
      items: [],
      name: '',
      job: '',
    };
    this.deletedata = this.delete_data.bind(this);
  }

  componentWillMount() {
    // console.log('componentWillMount');
    axios({
      url: 'http://127.0.0.1:9999/select',
      method: 'get',
    }).then((response) => {
      //console.log(response);
      this.setState({ items: response.data.recordset });
    });
  }

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

  select_data = (e) => {
    axios({
      url: 'http://127.0.0.1:9999/select',
      method: 'get',
    }).then((response) => {
      console.log(response);
      this.setState({ items: response.data.recordset });
    });
  };

  delete_data() {
    // console.log(emp, 'emp');
    console.log(1);
    //console.log('Delete_data');
    return false;

    // axios
    //   .get('http://127.0.0.1:9999/delete', {
    //     params: {
    //       empno: emp,
    //     },
    //   })
    //   .then((response) => {
    //     console.log('Delete_res: ', response);
    //   });
    // this.select_data();
  }

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
              <button
                type="button"
                style={{ marginLeft: 20 }}
                onClick={this.deletedata}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    );
  }
}
export default Test_sql_delete;
