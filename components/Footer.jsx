import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import FooterSponsor from "./FooterSponsor";
import JaneStreet from "../public/sponsor/janestreet.svg";
import Github from "../public/sponsor/github.svg";

export default function Footer() {
    return <>
        <style jsx>{`
        footer {
            width: 100%;
            background-color: #0d3254;
            color: #E0F0FF;
        }

        a {
            color: #E0F0FF;
            color: #E0F0FFBB;
            white-space: nowrap;
        }

        a:hover {
            color: #E0F0FFAA;
        }

        a:focus {
            color: #E0F0FFAA;
            font-weight: bold;
        }

        a:active {
            color: #E0F0FF99;
        }
        `}</style>
        <footer className="px-5 pt-5">
            <Container>
                <Row>
                    <Col className="pb-5" sm>
                        <h5 className="font-weight-bold">Sponsors</h5>
                        <p>hackBCA is brought to you by:</p>
                        <FooterSponsor href="https://www.janestreet.com" sponsor={JaneStreet} />
                        <FooterSponsor href="https://github.com" sponsor={Github} />
                        <p className="mt-2 mb-0"><Link href="/sponsor"><a>Want to join this list? Sponsor us!</a></Link></p>
                    </Col>
                    <Col className="pb-5" sm>
                        {/* <h5 className="font-weight-bold">Links</h5> */}
                        <p className="align-middle mb-0">&copy; 2020 hackBCA</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>;
}
