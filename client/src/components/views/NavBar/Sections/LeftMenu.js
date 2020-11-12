import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import CakeIcon from "@material-ui/icons/Cake";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { openAddBirthdays } from "../../../../_actions/modal_actions";
import { BrowserRouter as Router, Link } from "react-router-dom";

function LeftMenu(props) {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors.secondary);
  const openModal = () => {
    dispatch(openAddBirthdays(true));
  };
  const useStyles = makeStyles({
    root: {
      width: 500,
      zIndex: 2000
    },
  });
  const classes = useStyles();
  return (
    <div style={{zIndex: '2000 !important'}}>
      <BottomNavigation showLabels  className={classes.root}>
        <BottomNavigationAction
          icon={
            <>
              <FavoriteIcon style={{ fontSize: 30, color: colors.main }} />
              <Link style={{ color: colors.main }} to="/">
                My Memories
              </Link>
            </>
          }
        ></BottomNavigationAction>
        <BottomNavigationAction
          style={{ fontSize: 30, color: colors.main }}
          onClick={openModal}
          label="Add Memories"
          icon={<AddCircleIcon style={{ fontSize: 30, color: colors.main }} />}
        />
        <BottomNavigationAction
          icon={
            <>
              <CakeIcon style={{ fontSize: 30, color: colors.main }} />
              <Link style={{ color: colors.main }} to="/wishes">
                My Wishes
              </Link>
            </>
          }
        />
      </BottomNavigation>
    </div>
  );
}

export default LeftMenu;
