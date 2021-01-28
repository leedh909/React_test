import './App.css';
import styled from 'styled-components';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: 'red',
            width: '40%',
            height: 100,
            float: 'left',
          }}
        ></div>
        <div style={{ backgroundColor: 'pink', width: '40%', height: 400 }}>
          <div style={{ backgroundColor: 'black', width: '100%', height: 325 }}>
            <div
              style={{ backgroundColor: 'purple', width: '77%', height: 400 }}
            >
              <div
                style={{
                  backgroundColor: 'silver',
                  width: '130%',
                  height: 240,
                }}
              >
                <div
                  style={{ backgroundColor: 'blue', width: '50%', height: 400 }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
