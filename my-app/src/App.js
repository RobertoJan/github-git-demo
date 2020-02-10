import React from 'react';
import logo from './logo.svg';
import './App.css';

const JsxBtm = () => {
  return (
    <button><strong>Button Content</strong></button>
  );
}

class JsxClassBtn extends React.Component {
  render() {
    return (
      <button>
        <strong>
          {this.props.name}
        </strong>
      </button>
    )


  }
}

function App() {
  return (
    <div>
      <h1>Hello React World</h1>
      <JsxBtm />
      <JsxClassBtn />


    </div>

  );
}

export default App;
