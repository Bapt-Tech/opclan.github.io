import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SecondPage from './pages/SecondPage'
import MaPage from './pages/tools/MaPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/second">Deuxième Page</Link>
        <Link to="/tools/mapageenjsreact">Ma Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn moree
            </p>
          </>
        } />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/tools/mapageenjsreact" element={<MaPage />} />
      </Routes>
    </Router>
  )
}

export default App
