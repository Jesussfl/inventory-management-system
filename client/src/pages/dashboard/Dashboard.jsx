import React, { useEffect, useState } from "react";
import LeftNavbar from "../../components/left-navbar/LeftNavbar";
import TopNavbar from "../../components/top-navbar/TopNavbar";
import "./Dashboard.css";

import Home from "./home/Home";
import Products from "./products/Products";
import Employees from "./employees/Employees";
import Topbar from "../../components/topbar/Topbar";

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
          <div style={{ width: "100%" }}>
            <Topbar />
            <div id="screen-section-container">
              <Routes>
                <Route path={`${location.pathname}/home`} element={<Home />} />
                <Route
                  path={`${location.pathname}/products`}
                  element={<Products />}
                />
                <Route
                  path={`${location.pathname}/employees`}
                  element={<Employees />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
