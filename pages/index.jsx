import Page from "../components/Page";
import { Button } from "react-bootstrap";
import { faQuestionCircle, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar, faList } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import ChevronRight from "../components/ChevronRight";
import CircleIcon from "../components/CircleIcon";
import LazyIcon from "../components/LazyIcon";
import Link from "next/link";

export default function Index() {
    return (
        <Page>
            <style jsx>{`
            .main {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .gradient {
                width: 100%;
                height: 100%;
                background-image: linear-gradient(135deg, #000099, #009999);
                background-color: black;
                color: white;
            }
            
            .navigation-ul {
                list-style-type: none;
                text-align: left;
                display: block;
                padding: 0;
            }

            .navigation-ul a {
                color: white;
                color: rgba(255, 255, 255, 0.8);
                white-space: nowrap;
            }

            .navigation-ul a:hover {
                color: rgba(255, 255, 255, 0.9);
            }

            .navigation-ul a:focus {
                color: rgba(255, 255, 255, 0.9);
                font-weight: bold;
            }

            .navigation-ul a:active {
                color: white;
            }
            `}</style>

            <style jsx global>{`
            .fa-li {
                vertical-align: middle;
                top: 50%;
                transform: translateY(-50%);
            }
            `}</style>

            <div className="gradient">
                <div className="main">
                    <h1>hackBCA V</h1>
                    <p><strong>Rise from the ashes.</strong> February 13-14, 2020 @ BCA.</p>
                    {/* <p><Button href="/whatis" variant="dark">What's hackBCA? <ChevronRight /></Button></p> */}
                    <p><Link href="/register"><Button as="a" variant="primary">How to register <ChevronRight /></Button></Link></p>
                    <ul className="navigation-ul fa-ul">
                        {/* <li>
                            <Link href="/sponsor">
                                <a>
                                    <CircleIcon icon={faStar} listItem /> Sponsor us <ChevronRight />
                                </a>
                            </Link>
                        </li> */}
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
        </Page>
    );
}