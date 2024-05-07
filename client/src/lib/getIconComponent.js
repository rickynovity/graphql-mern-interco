import { GithubIcon, GoogleIcon } from "./icons";

export const getIconComponent = (iconName) => {
  switch (iconName) {
    case "google":
      return GoogleIcon;
    case "github":
      return GithubIcon;
    default:
      // console.warn(`Warning: Icon "${iconName}" does not exist.`);
      // return () => <Div />;
      return null;
  }
};
