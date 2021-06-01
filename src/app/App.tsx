import { HashRouter as Router } from "react-router-dom";
import { AppHeader } from "../layouts/AppHeader";
import { PageHolder } from "../layouts/PageHolder";

function App() {
  return (
    <Router>
      <AppHeader />
      <PageHolder />
    </Router>
  );
}

export default App;
