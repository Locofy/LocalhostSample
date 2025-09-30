import { FunctionComponent, useCallback } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import SocialMediaLogin from "./SocialMediaLogin";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";

export type SignUpFormType = {
  className?: string;
};

const SignUpForm: FunctionComponent<SignUpFormType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <Box className={[styles.content, className].join(" ")}>
      <Typography
        className={styles.formTitle}
        variant="inherit"
        variantMapping={{ inherit: "h1" }}
        sx={{ fontWeight: "700", letterSpacing: "0.02em" }}
      >
        Create Account
      </Typography>
      <section className={styles.signUpForm}>
        <form className={styles.form}>
          <Box className={styles.formFields}>
            <TextField
              className={styles.email}
              placeholder="Email address"
              variant="outlined"
              slotProps={{
                input: {
                  endAdornment: (
                    <img width="20px" height="20px" src="/icon-account1.svg" />
                  ),
                },
              }}
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#fff",
                  paddingRight: "12px",
                },
                "& .MuiInputBase-input": { color: "#787878" },
              }}
            />
            <TextField
              className={styles.email}
              placeholder="Password"
              variant="outlined"
              type="password"
              slotProps={{
                input: {
                  endAdornment: (
                    <img width="20px" height="20px" src="/icon-password1.svg" />
                  ),
                },
              }}
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#fff",
                  paddingRight: "12px",
                },
                "& .MuiInputBase-input": { color: "#787878" },
              }}
            />
            <TextField
              className={styles.email}
              placeholder="Confirm password"
              variant="outlined"
              type="password"
              slotProps={{
                input: {
                  endAdornment: (
                    <img width="20px" height="20px" src="/icon-password1.svg" />
                  ),
                },
              }}
              sx={{
                "& fieldset": { borderColor: "#d9d9d9" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#fff",
                  paddingRight: "12px",
                },
                "& .MuiInputBase-input": { color: "#787878" },
              }}
            />
          </Box>
          <Button
            className={styles.searchFlightsButton}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              width: 160,
            }}
            type="submit"
          >
            Sign up
          </Button>
        </form>
        <SocialMediaLogin />
        <div
          className={styles.iAlreadyHaveContainer}
          onClick={onIAlreadyHaveClick}
        >
          <Typography
            variant="inherit"
            variantMapping={{ inherit: "span" }}
          >{`I already have an account. `}</Typography>
          <Typography
            className={styles.login}
            variant="inherit"
            variantMapping={{ inherit: "span" }}
          >
            Login
          </Typography>
        </div>
      </section>
    </Box>
  );
};

export default SignUpForm;
