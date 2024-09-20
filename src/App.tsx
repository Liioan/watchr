import { Switch, Route } from "wouter";
import Index from "./pages/Index";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <Main>
      <Nav />
      <Switch>
        <Route path={"/"} component={Index} />
      </Switch>
    </Main>
  );
}

export default App;
