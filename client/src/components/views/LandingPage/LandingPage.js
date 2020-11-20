import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  closeWishModal,
  getMemories,
  getWishes,
} from "../../../_actions/modal_actions";
import Accordian from "./Accordian";
import Cake from "./Cake";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button } from "@material-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LandingPage() {
  gsap.registerPlugin(ScrollTrigger);
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

  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(".hero-title", {
      x: -1000,
      backgroundPosition: '1300px 0',
      scrollTrigger: {
        trigger: "body",
        start: 'top top',
        scrub: true,
      }
    });

    gsap.to(".hero-cta", {
      y: 80,
      scrollTrigger: {
        trigger: "body",
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, [])

  return (
    <>
      <div className="hero">
        <Cake />
        <div className="hero-title">
          <Link to="/experience">
            <Button variant="contained" className="enter-btn">Enter Experience</Button>
          </Link>
        </div>
        <div className="hero-cta">Scroll to discover</div>
      </div>
    </>
  );
}

export default withRouter(LandingPage);
