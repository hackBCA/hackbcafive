import { Container } from "react-bootstrap";
import Page from "./Page";
import LazyIcon from "./LazyIcon";
import Link from "next/link";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ContentPage({children, title}) {
    return <Page title={title}>
        <Container style={{marginTop: "64px"}}>
            <p><Link href="/"><a><LazyIcon icon={faArrowLeft}></LazyIcon> Back to hackBCA Home</a></Link></p>
            {children}
        </Container>
    </Page>;
}