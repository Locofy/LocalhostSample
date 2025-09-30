import { FunctionComponent, useState } from "react";
import { Box, Button } from "@mui/material";
import SocialLogin from "./SocialLogin";
import styles from "./SocialMediaLogin.module.css";

export type SocialMediaLoginType = {
  className?: string;
};

const SocialMediaLogin: FunctionComponent<SocialMediaLoginType> = ({
  className = "",
}) => {
  const [socialLoginItems] = useState([
    {
      socialLoginImage: "/socialloginimage1@2x.png",
      text: "Google",
    },
    {
      socialLoginImage: "/socialloginimage@2x.png",
      text: "Facebook",
    },
    {
      socialLoginImage: "/socialloginimage2@2x.png",
      text: "Apple",
    },
  ]);
  return (
    <Box className={[styles.socialMediaLogin, className].join(" ")}>
      <div className={styles.label}>Or sign in with</div>
      <Box className={styles.socialLoginContainer}>
        {socialLoginItems.map((item, index) => (
          <SocialLogin
            key={index}
            socialLoginImage={item.socialLoginImage}
            text={item.text}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SocialMediaLogin;
