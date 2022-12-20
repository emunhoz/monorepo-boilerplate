import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@monorepo/ui-components'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const API = import.meta.env.VITE_ENDPOINT || 'http://localhost:3003'

  async function getData() {
    setLoading(true)
    try {
      await fetch(`${API}/api/product`, {})
        .then(response => response.json())
        .then(data => {
          setData(data)
          console.log(data)
        })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <div>
        {data.length !== 0 && <p>{data?.message}</p>}
        {isLoading && <p>Loading...</p>}
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div><button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
        <br />
        <div>
          <Button onClick={getData} label={'Get data from api'} primary={true} size={'large'} />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
