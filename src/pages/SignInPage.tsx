import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";
import Band from "../components/Band";
import styles from "./SignInPage.module.css";

const SignInPage: FunctionComponent = () => {
  return (
    <Box className={styles.signInPage}>
      <Header />
      <main className={styles.main}>
        <SignInForm />
      </main>
      <Band />
    </Box>
  );
};

export default SignInPage;
