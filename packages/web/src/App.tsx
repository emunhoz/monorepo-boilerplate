import { Button } from '@monorepo/ui-components';
import './App.css';
import logo from './logo.svg';

const { REACT_APP_API } = process.env

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button
          label='Get some data'
          primary
          size='small'
          onClick={() => {
            fetch(`${REACT_APP_API}/api/product`, {})
              .then((response) => response.json())
              .then((data) => console.log(data));
          }}
        />
      </header>
    </div>
  );
}

export default App;
