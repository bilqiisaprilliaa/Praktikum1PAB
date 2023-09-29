import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // Fungsi untuk menambah nilai counter
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  // Fungsi untuk mengurangi nilai counter
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>Pengenalan React</h1>
        <h2>Counter</h2>
        <p>Nilai: {this.state.count}</p>
        <button onClick={this.increment}>Tambah</button>
        <button onClick={this.decrement}>Kurang</button>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;