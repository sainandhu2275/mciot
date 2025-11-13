import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// ✅ Component for redirecting to external links
function RedirectToExternal({ url }) {
  useEffect(() => {
    window.location.href = url; // Redirect immediately
  }, [url]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Redirecting...</h2>
      <p>If you are not redirected, <a href={url}>click here</a>.</p>
    </div>
  );
}

// ✅ Home component
function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>MCIoT Projects</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li><Link to="/task12">Task 12</Link></li>
        <li><Link to="/task2">Task 11</Link></li>
        <li><Link to="/task3">Task 10</Link></li>
        <li><Link to="/task4">Task 9</Link></li>
        <li><Link to="/task5">Task 8</Link></li>
        <li><Link to="/task6">Task 6</Link></li>
        <li><Link to="/task7">Task 5</Link></li>
        <li><Link to="/task44">Task 4</Link></li>
        <li><Link to="/task33">Task 3</Link></li>
        <li><Link to="/task22">Task 2</Link></li>
        <li><Link to="/task1">Task 1</Link></li>
      </ul>
    </div>
  );
}

// ✅ Main App with routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* External redirects */}
        <Route
          path="/task12"
          element={<RedirectToExternal url="https://wokwi.com/projects/383260777330575361" />}
        />
        <Route
          path="/task2"
          element={<RedirectToExternal url="https://wokwi.com/projects/409312856465230849" />}
        />
        <Route
          path="/task3"
          element={<RedirectToExternal url="https://wokwi.com/projects/415371687258065921" />}
        />
        <Route
          path="/task4"
          element={<RedirectToExternal url="https://wokwi.com/projects/375833305298579457" />}
        />
        <Route
          path="/task5"
          element={<RedirectToExternal url="https://wokwi.com/projects/446074071493908481" />}
        />
        <Route
          path="/task6"
          element={<RedirectToExternal url="https://wokwi.com/projects/383981664359646209" />}
        />
        <Route
          path="/task7"
          element={<RedirectToExternal url="hhttps://wokwi.com/projects/446485620429689857" />}
        />
        <Route
          path="/task8"
          element={<RedirectToExternal url="https://wokwi.com/projects/383981664359646209" />}
        />
        <Route
          path="/task1"
          element={<RedirectToExternal url="https://www.tinkercad.com/things/kp0smgPOPnP/editel?lessonid=EFU6PEHIXGFUR1J&projectid=OGK4Q7VL20FZRV9&collectionid=OMOZACHJ9IR8LRE&title=Editing%20Components&sharecode=7i3elgVHFVDQxopeKFeOTiwYh-QbDqCqACa1H7oJTx8" />}
        />
        <Route
          path="/task44"
          element={<RedirectToExternal url="https://www.tinkercad.com/things/0zpgneQANV1-copy-of-copy-of-copy-of-task4/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard%2Fdesigns%2Fcircuits&sharecode=NSScWwT6vd8WfJKV97gbDoIy8omDfLEHSwENCWxQhFE" />}
        />
        <Route
          path="/task33"
          element={<RedirectToExternal url="https://wokwi.com/projects/415371687258065921" />}
        />
        <Route
          path="/task22"
          element={<RedirectToExternal url="https://wokwi.com/projects/445984021591846913" />}
        />
      </Routes>
    </Router>
  );
}

// ✅ Render to DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
