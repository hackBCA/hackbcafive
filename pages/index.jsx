import Page from "../components/Page";
import { Button } from "react-bootstrap";
import { faQuestionCircle, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar, faList } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import ChevronRight from "../components/ChevronRight";
import CircleIcon from "../components/CircleIcon";
import LazyIcon from "../components/LazyIcon";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Index() {
    return (
        <Page>
            <style jsx>{`
            .main {
                color: #E0F0FF;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100vh;
            }

            .content {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 1em;
            }
            
            .navigation-ul {
                list-style-type: none;
                text-align: left;
                display: block;
                padding: 0;
            }

            .navigation-ul a {
                color: #E0F0FF;
                color: #E0F0FFBB;
                white-space: nowrap;
            }

            .navigation-ul a:hover {
                color: #E0F0FFAA;
            }

            .navigation-ul a:focus {
                color: #E0F0FFAA;
                font-weight: bold;
            }

            .navigation-ul a:active {
                color: #E0F0FF99;
            }

            .hero-header {
                width: 100%;
                background-color: #0d3254;
                height: 60vh;
                overflow: hidden;
                position: relative;
            }

            .hero-header h1 {
                color: #E0F0FFAA;
                position: absolute;
                bottom: -0.3em;
                left: 50%;
                transform: translateX(-50%);
                margin: 0;
                font-size: 12rem;
                font-weight: bold;
                width: 100%;
            }

            .hero-header .pheonix {
                height: 200%;
                position: absolute;
                bottom: -60%;
                left: 50%;
                transform: translateX(-50%);
            }

            @media (max-width: 920px) {
                .hero-header h1 {
                    font-size: 8rem;
                }
            }

            @media (max-width: 640px) {
                .hero-header h1 {
                    font-size: 6rem;
                }
            }

            @media (max-width: 480px) {
                .hero-header h1 {
                    font-size: 4rem;
                }
            }

            @media (max-width: 319px) {
                .hero-header h1 {
                    font-size: 2rem;
                }
            }
            `}</style>

            <style jsx global>{`
            html, body, #__next {
                background-color: #001427;
            }

            .fa-li {
                vertical-align: middle;
                top: 50%;
                transform: translateY(-50%);
            }
            `}</style>

            <div className="main">
                <div className="hero-header">
                    <img src="/pheonix.png" className="pheonix" />
                    <h1>hackBCA V</h1>
                </div>

                <div className="content">
                    <p className="lead"><strong className="font-weight-bold">Rise from the ashes.</strong> February 13-14, 2020 @ BCA.</p>
                    <p><em>Registration is now open!</em></p>
                    {/* <p><Link href="/whatis"><a className="btn btn-dark">What's hackBCA? <ChevronRight /></a></Link></p> */}
                    <p><Link href="/register"><a className="btn btn-primary">Register now <ChevronRight /></a></Link></p>
                    <ul className="navigation-ul fa-ul">
                        <li>
                            <Link href="/sponsor">
                                <a>
                                    <CircleIcon icon={faStar} listItem /> Sponsor us <ChevronRight />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/schedule">
                                <a>
                                    <CircleIcon icon={faList} listItem /> Schedule & Workshops <ChevronRight />
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/support">
                                <a>
                                    <LazyIcon icon={faQuestionCircle} listItem /> FAQ & Support <ChevronRight />
                                </a>
                            </Link>
                        </li> */}
                        {/* <li><LazyIcon icon={faUserCircle} listItem /> My hackBCA <ChevronRight /></li> */}
                    </ul>
                </div>
            </div>
            
            <Footer />
        </Page>
    );
}