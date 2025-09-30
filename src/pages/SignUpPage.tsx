import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SignUpForm from "../components/SignUpForm";
import Band from "../components/Band";
import styles from "./SignUpPage.module.css";

const SignUpPage: FunctionComponent = () => {
  return (
    <Box className={styles.signUpPage}>
      <Header />
      <main className={styles.main}>
        <SignUpForm />
      </main>
      <Band />
    </Box>
  );
};

export default SignUpPage;
