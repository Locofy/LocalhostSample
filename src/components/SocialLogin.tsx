import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./SocialLogin.module.css";

export type SocialLoginType = {
  className?: string;
  socialLoginImage?: string;
  text?: string;
};

const SocialLogin: FunctionComponent<SocialLoginType> = ({
  className = "",
  socialLoginImage,
  text,
}) => {
  return (
    <button className={[styles.socialLogin, className].join(" ")}>
      <img
        className={styles.socialLoginImageIcon}
        alt=""
        src={socialLoginImage}
      />
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default SocialLogin;
