import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
