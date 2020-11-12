import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import { openWishModal } from "../../../_actions/modal_actions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import "./envlope.css";

function Envelope({ wish }) {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors.secondary);
  return (
    <div
      className="env-container"
      onClick={() => dispatch(openWishModal(wish))}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        className="avatar"
      />
      <MailIcon style={{ fontSize: 150, color: colors.main }} />
    </div>
  );
}

export default Envelope;
