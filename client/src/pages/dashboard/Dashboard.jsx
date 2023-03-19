import React, { useEffect, useState } from "react";
import LeftNavbar from "../../components/left-navbar/LeftNavbar";
import "./Dashboard.css";

import Home from "./home/Home";
import Products from "./products/Products";
import employees from "./employees/employees";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   fetch("http://localhost:3000/api/v1/employees", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.status === 401) {
  //         setLoggedIn(false);

  //         throw new Error("Unauthorized");
  //       }

  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data.Authorization) {
  //       }
  //     })
  //     .catch((error) => {
  //       setLoggedIn(false);

  //       console.error(error);
  //     });
  // }, []);
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div
        style={{
          background: "#111315",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div id="screens-container">
          <LeftNavbar />
          <div id="screen-section-container"></div>
          <Routes>
            <Route path={`${location.pathname}/home`} element={<Home />} />
            <Route
              path={`${location.pathname}/products`}
              element={<Products />}
            />
            <Route
              path={`${location.pathname}/employees`}
              element={<employees />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
