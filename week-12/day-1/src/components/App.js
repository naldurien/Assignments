import logo from '../logo.svg';
import '../App.css';
import IncDec from './IncDec'
import DisplayCounter from './DisplayCounter';
import AddSubtract from './AddSubtract';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayCounter/>
        <IncDec/>
        <AddSubtract />
      </header>
    </div>
  );
}

export default App;
