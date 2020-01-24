import { Container } from "react-bootstrap";
import Page from "./Page";
import Footer from "./Footer";
import LazyIcon from "./LazyIcon";
import Link from "next/link";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ContentPage({children, title}) {
    return <Page title={title}>
        <Container style={{marginTop: "64px", marginBottom: "64px"}}>
            <p><Link href="/"><a className="hackbca-back"><LazyIcon icon={faArrowLeft}></LazyIcon> Back to hackBCA Home</a></Link></p>
            {children}
        </Container>
        <Footer />
    </Page>;
}