import Sattyl from "./Settyl";
import "./App.css";
import Alluser from "./Alluser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Charthorizontal from "./Charthorizontal";
import { useState } from "react";
function App() {
  const [showbutton, setshowbutton] = useState(true);
  return (
    <div className="App">
      <div className="container">
        <h2 className="display-2 mb-3 mt-2">Settyl</h2>
        <p>
          <strong>(Employee Survey Data )</strong>
        </p>
        <Sattyl></Sattyl>
      </div>{" "}
      {/* Form input */}
      <div className="container">
        <div className="row">
          <div className="col-md-7 mt-3 mb-3">
            <Alluser />
          </div>
          <div className="col-md-5 mt-3 mb-3">
            {showbutton ? <Charthorizontal /> : ""}
            <br />
            <button
              className={`btn ${showbutton ? `btn-primary` : `btn-warning`}`}
              onClick={() => setshowbutton(!showbutton)}
            >
              {showbutton ? "Hide Chart" : "Show Chart"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
