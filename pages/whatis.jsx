import Footer from "../components/Footer";
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LazyIcon from "../components/LazyIcon";
import ContentPage from "../components/ContentPage";

export default () => <ContentPage title="What is hackBCA?">
    <style jsx global>{`
    .whatis-content-group {
        margin-top: 64px;
        margin-bottom: 64px;
        align-items: center;
    }

    .whatis-content-group h4 {
        font-weight: bold;
        text-transform: uppercase;
    }

    .whatis-content-group img {
        display: block;
        width: 100%;
    }

    .whatis-content-group:nth-child(2n) .col-md:first-child {
        order: 2;
    }

    body {
        background-image: linear-gradient(135deg, #001427, rgb(28, 81, 204), rgb(236, 161, 59));
        background-repeat: no-repeat;
    }

    #__next {
        background-color: clear;
    }
    `}</style>
    <h1>What is hackBCA?</h1>
    <Row className="whatis-content-group">
        <Col md>
            <h4>Coding</h4>
            <p>hackBCA is an overnight hackathon. Spend an all-nighter hacking together some code and make something.</p>
            <p>Feel free to make whatever project you want to make however you want to make it. You can use the languages and tools you’re familiar with, or decide to try something new entirely. Go wild!</p>
        </Col>
        <Col><img src="/images/whatis0.jpg" /></Col>
    </Row>
    <Row className="whatis-content-group">
        <Col md>
            <h4>Community</h4>
            <p>You can work in groups of 4-5, meaning that you can build something with your friends. There will also be fun things to do like cup stacking, PowerPoint karaoke, and more.</p>
            <p>No matter your skill level, we’ve got workshops for you, ranging from basic web design to hardware hacking to version control.</p>
        </Col>
        <Col><img src="/images/whatis1.jpg" /></Col>
    </Row>
    <Row className="whatis-content-group">
        <Col md>
            <h4>Competition</h4>
            <p>And of course, what you’re probably most excited about are the prizes. At the end of the day, you are trying to hack together the best program possible.</p>
            <p>Plus, we’ve got tons of free swag.</p>
        </Col>
        <Col><img src="/images/whatis2.jpg" /></Col>
    </Row>
    <div className="whatis-content-group">
        <p>Convinced?</p>
        <Link to="/register" passHref><Button variant="primary">Register now <LazyIcon icon={faArrowRight} /></Button></Link>
    </div>
</ContentPage>