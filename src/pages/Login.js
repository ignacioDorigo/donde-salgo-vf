import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";



export default function Login() {

  const styles = {
  login: {
    display: "flex",
    justifyContent: "center", // ← esto estaba mal como "center"
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#170b3a", // ← color de fondo que estás usando
  },
};

  return (
    <div style={styles.login}>
      <LoginForm />
    </div>
  );
}
