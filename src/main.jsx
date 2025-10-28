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
        <li><Link to="/task1">Task 1</Link></li>
        <li><Link to="/task2">Task 2</Link></li>
        <li><Link to="/task3">Task 3</Link></li>
        <li><Link to="/task4">Task 4</Link></li>
        <li><Link to="/task5">Task 5</Link></li>
        <li><Link to="/task6">Task 6</Link></li>
        <li><Link to="/task7">Task 7</Link></li>
        <li><Link to="/task8">Task 8</Link></li>
        <li><Link to="/task9">Task 9</Link></li>
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
          path="/task1"
          element={<RedirectToExternal url="https://wokwi.com/projects/384064328366558209" />}
        />
        <Route
          path="/task2"
          element={<RedirectToExternal url="https://wokwi.com/projects/384067215153294337" />}
        />
        <Route
          path="/task3"
          element={<RedirectToExternal url="https://wokwi.com/projects/384067628688309249" />}
        />
        <Route
          path="/task4"
          element={<RedirectToExternal url="https://wokwi.com/projects/384067948273994753" />}
        />
        <Route
          path="/task5"
          element={<RedirectToExternal url="https://wokwi.com/projects/384068272665270273" />}
        />
        <Route
          path="/task6"
          element={<RedirectToExternal url="https://wokwi.com/projects/383981664359646209" />}
        />
        <Route
          path="/task7"
          element={<RedirectToExternal url="https://wokwi.com/projects/383981664359646209" />}
        />
        <Route
          path="/task8"
          element={<RedirectToExternal url="https://wokwi.com/projects/383981664359646209" />}
        />
        <Route
          path="/task9"
          element={<RedirectToExternal url="https://wokwi.com/projects/383981664359646209" />}
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
