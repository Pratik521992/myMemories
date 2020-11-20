import React, { useEffect, useState } from "react";
import "./experience.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordian from "../LandingPage/Accordian";
import Envelope from "../Envelope/Envelope";
import { useSelector } from "react-redux";
import WishCard from "../wishCard/wishCard";
import { FormControlLabel, Switch } from "@material-ui/core";
export const Experience = () => {
    const [selectedIndex, setIndex] = useState(0);
    const wishes = [
        {
            main: "Welcome to myMemories.",
            wishes: " Here you will be able to read all the wishes and messages from your family, friends and loved ones",
            writerName: "click on each picture to load respective messages"
        },
        {
            main: "1",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            main: "2",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        }

    ]

    const open = useSelector((state) => state.modal.wishModalStatus);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const rightPanel = document.getElementById("rightPanel");
        const container = document.getElementById("container");
        const trigger1 = document.getElementsByClassName("trigger1");
        const module = document.getElementsByClassName("module");
        const panels =
            document.getElementsByClassName("panel");


        // List to Intro


        // Horizontal Scrolling

        let introScroll = gsap.to(rightPanel, {
            x: () => "-=" + (rightPanel.offsetWidth),
            ease: "none",
            scrollTrigger: {
                start: 0,
                invalidateOnRefresh: true,
                scrub: 0,
                end: () => "+=" + (rightPanel.offsetWidth)
            }
        })

        let contentScroll = gsap.to(container, {
            x: () => -(container.offsetWidth),
            ease: "none",
            scrollTrigger: {
                trigger: rightPanel,
                start: "bottom top",
                invalidateOnRefresh: true,
                markers: true,
                scrub: 0,
                end: () => "+=" + (container.offsetWidth)
            }
        })

    }, [])

    const getExp = () => {
        if (open) {
            return null;
        }
        else
            return (
                <div className=" experience-container">
                    <div class="panel" id="leftPanel">
                        <div className=" area">
                            <div className="left-top">
                                <div className="gradient-left-pannel ">
                                    <img id="1" src="https://assets.codepen.io/61488/duda-intro-2.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                            </div>


                            <div className="messages1">

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
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="msg-container">
                                    <h1 className="wish-msg-2">
                                        <span >"Many Many happy returns of the day"</span>

                                    </h1>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="area panel" id="rightPanel">

                        <WishCard wish={wishes[selectedIndex]} />
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
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>

                    <div id="container">

                        <div className="module "> <div className="gradient-right-pannel">

                        </div></div>
                        <div className="module area">
                            <div className="envelope-container-exp">
                                <div onClick={() => setIndex(1)} className="gradient-right-pannel">
                                    <img id="1" src="https://assets.codepen.io/61488/duda-intro-2.jpg" height="550" width="550" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                style={{fontSize: '44px', marginLeft: '24px'}}
                                    control={<Switch checked={selectedIndex === 1} onChange={() => setIndex(1)}name="checkedA" />}
                                    label={selectedIndex === 1? "Loaded" : "Click to load"}
                                />
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
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="module ">
                            <div className="envelope-container-exp">
                                <div onClick={() => setIndex(2)} className="gradient-right-pannel">
                                    <img id="1" src="https://assets.codepen.io/61488/duda-intro-2.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 2} onChange={() => setIndex(2)}name="checkedA" />}
                                    label="Secondary"
                                />
                            </div>
                        </div>
                        <div className="module ">
                            <div className="envelope-container-exp">
                                <div onClick={() => setIndex(3)} className="gradient-right-pannel">
                                    <img id="1" src="https://assets.codepen.io/61488/duda-intro-2.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 3} onChange={() => setIndex(3)}name="checkedA" />}
                                    label="Secondary"
                                />
                            </div>
                        </div>
                        <div className="module ">
                            <div className="envelope-container-exp">
                                <div className="gradient-right-pannel">
                                    <img id="1" src="https://assets.codepen.io/61488/duda-intro-2.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>


                            </div>
                        </div>
                        <div className="module ">
                            <div className="envelope-container-exp">
                                <div className="gradient-right-pannel">
                                    <img id="1" src="https://assets.codepen.io/61488/duda-intro-2.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
            )
    };

    return (
        <> {getExp()}</>
    )
}