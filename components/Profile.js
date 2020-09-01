import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  profile: {
    width: "150px",
  },
  profileImage: {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    backgroundColor: "black",
  },
});

const Profile = (props) => {
  const classes = useStyles();
  const { imageSrc, name, info } = props;

  return (
    <div className={classes.profile}>
      <img className={classes.profileImage} src={imageSrc} alt={name} />
      {name}
    </div>
  );
};

export default Profile;
