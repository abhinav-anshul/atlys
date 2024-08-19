import "./App.css"
import { Route, Switch, useLocation } from "wouter"
import { Dashboard, Home, Login, Signup } from "./components"
import { useEffect } from "react"

function App() {
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (window.location.pathname === "/") {
      setLocation("/dashboard")
    }
  }, [setLocation])

  return (
    <>
      <Switch>
        {/* // a homepage component if needed for landing, right now I'm redirecting the user to dashboard */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}

export default App
