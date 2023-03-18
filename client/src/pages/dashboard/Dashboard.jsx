import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    fetch("http://localhost:3000/api/v1/employees", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          // El token no es válido
          setLoggedIn(false);

          throw new Error("Unauthorized");
        }

        return response.json();
      })
      .then((data) => {
        if (data.Authorization) {
        }

        // Aquí puedes procesar la respuesta del servidor
      })
      .catch((error) => {
        setLoggedIn(false);

        console.error(error);

        // Aquí puedes manejar el error
      });
  }, []);
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  return <div>Dashboard</div>;
}

export default Dashboard;
