import { useState } from 'react'
import Wallet from './component/wallet'
import Dashboard from './component/dashboard'
import Welcome from './component/welcome'

import './App.css'

const App = () => {
  const [tab, setTab] = useState(0)

  const handleDialog = (str: number) => {
    console.log(str)
    setTab(str)
  }
  return (
    <div className="App">
      <header className="App-header">
        {tab === 0 ? (
          <Wallet handleDialog={handleDialog} />
        ) : tab === 1 ? (
          <Welcome handleDialog={handleDialog} />
        ) : (
          <Dashboard handleDialog={handleDialog} />
        )}
      </header>
    </div>
  )
}

export default App
