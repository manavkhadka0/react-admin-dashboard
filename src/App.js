import Topbar from "./component/Topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import Home from "./pages/home/Home"
import "./app.css"


function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
