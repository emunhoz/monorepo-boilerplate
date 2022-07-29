import { Button } from '@monorepo/ui-components'
import { useState } from 'react'
import './App.css'
import logo from './logo.svg'

import theme from '@monorepo/design-tokens'

console.log(theme, 'theasdme')

const API = import.meta.env.VITE_ENDPOINT

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState<boolean>(false)

  async function getData() {
    setLoading(true)
    try {
      await fetch(`${API}/api/product`, {})
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
      <header className="App-header">
        {data.length !== 0 && <p>{data?.message}</p>}
        {isLoading && <p>Loading...</p>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <Button onClick={getData} label={'Get data from api'} primary={true} size={'large'} />
      </header>
    </div>
  )
}

export default App
