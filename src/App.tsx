import "./App.css"
import { Route, Switch } from "wouter"
import { Dashboard, Login, Signup } from "./components"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  )
}

export default App
