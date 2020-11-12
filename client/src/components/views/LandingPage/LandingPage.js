import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  closeWishModal,
  getMemories,
  getWishes,
} from "../../../_actions/modal_actions";
import Accordian from "./Accordian";
import Cake from "./Cake";
import CircularProgress from "@material-ui/core/CircularProgress";

function LandingPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.modal.isLoading);
  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      dispatch(closeWishModal());
      if (user) {
        dispatch(getMemories());
      }
    }
  }, [user]);
  return (
    <>
      {isLoading ? (
        <CircularProgress size="900" color="secondary" />
      ) : (
        <div>
          <Cake />
          <Accordian />
        </div>
      )}
    </>
  );
}

export default withRouter(LandingPage);
