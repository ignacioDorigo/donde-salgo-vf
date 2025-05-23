import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const styles = {
  register: {
    display: "flex",
    justifyContent: "center", // ← esto estaba mal como "center"
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#170b3a", // ← color de fondo que estás usando
  },
};

export default function Register() {
  return (
    <div style={styles.register}>
      <RegisterForm></RegisterForm>
    </div>
  );
}
