import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import "./wishCard.css";
import { closeWishModal, getNextPage } from "../../../_actions/modal_actions";

function WishCard() {
  let timer = null;
  var card = "";
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.modal.pagination);
  const wish = useSelector((state) => state.modal.wish);
  const open = useSelector((state) => state.modal.wishModalStatus);

  const handleClose = () => {
    dispatch(closeWishModal());
  };

  const handleNext = () => {
    dispatch(closeWishModal());
    dispatch(getNextPage(pagination + 1))
  }

  if (!open || !wish || window.location.pathname !== "/wishes") {
    return null;
  }
  return (
    <div className="card-container">
      <Button
        variant="contained"
        color="primary"
        onClick={handleClose}
        className="backButton"
        endIcon={<KeyboardArrowLeftIcon />}
      >
        Back
      </Button>
      <div className="card">
        <div className="back"></div>
        <div className="front">
          <div className="imgset">
            <img
              width="100%"
              src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
            />
          </div>
        </div>
        <div className="text-container">
          <p id="head">Happy Birthday </p>
          <p>{wish.wishes}</p>
          <p>{wish.writerName}</p>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        endIcon={<KeyboardArrowLeftIcon />}
      >
        NEXT
      </Button>
    </div>
  );
}

export default WishCard;
