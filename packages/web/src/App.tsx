import { Button } from '@monorepo/ui-components';
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

const { REACT_APP_API } = process.env

function App() {
  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState<boolean>(false)

  async function getData() {
    setLoading(true)
    try {
      await fetch(`${REACT_APP_API}/api/product`, {})
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log(data)
        });
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      {data.length !== 0 && <p>{data?.message}</p>}
      {isLoading && <p>Loading...</p>}
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

        <br />

        <Button
          label='Get data from api'
          primary
          size='large'
          onClick={getData}
        />
      </header>
    </div>
  );
}

export default App;
