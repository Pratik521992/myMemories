import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { getWishes } from "../../../../_actions/modal_actions";
import Envelope from "../../Envelope/Envelope";

function Wishes() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.modal.pagination);
  const email = user && user.userData ? user.userData.email : "";
  const wishes = useSelector((state) => state.modal.addWishes);
  const open = useSelector((state) => state.modal.wishModalStatus);

  useEffect(() => {
    dispatch(getWishes(email, pagination));
  }, [email, pagination]);

  const getWishesData = () => {
    if (!wishes || open) {
      return null;
    }
    return wishes.map((wish) => {
      console.log(wish)
      return <Envelope wish={wish} />;
    });
  };

  return (
    <div className="envelopes area">
      {" "}   
     
      <div class="">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="envelope-container">{getWishesData()}</div>
    </div>
  );
}

export default withRouter(Wishes);
