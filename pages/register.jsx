import ContentPage from "../components/ContentPage";
import { Button } from "react-bootstrap";
import LazyIcon from "../components/LazyIcon";
import { faFilePdf, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function RegistrationContent() {
    return (
        <>
            <h1>Registration</h1>

            <h2>BCA Students</h2>
            <div className="mb-1">
                <a className="btn btn-primary mr-1 mb-1" href="/register/contact-and-medical.pdf" target="_blank">
                    <LazyIcon icon={faFilePdf} /> Emergency Contact & Medical Information <LazyIcon icon={faChevronRight} />
                </a>
                <a className="btn btn-primary mb-1" href="/register/waiver.pdf" target="_blank">
                    <LazyIcon icon={faFilePdf} /> Participant Waiver <LazyIcon icon={faChevronRight} />
                </a>
            </div>
            
            <p>To register, bring the following items to Mr. Respass in Room 138:</p>
            <ul>
                <li><a href="/register/contact-and-medical.pdf">Emergency contact/medical information form</a></li>
                <li><a href="/register/waiver.pdf">Participant waiver</a></li>
                <li>$35 (cash or check made out to "Bergen County Technical Schools")</li>
            </ul>

            <p>Register by January 10 for an early bird discount. After January 10, registration will cost $40.</p>
            <p>Registration closes when spots fill up or on January 20, whichever comes first.</p>

            <h2>Out-of-District Students</h2>
            <p>If you are out-of-district, registration must be completed through your school. Have your school contact <a href="mailto:bryres@bergen.org">Mr. Respass (bryres@bergen.org)</a> for more details.</p>
        </>
    );
}

export default () => <ContentPage title="Register"><RegistrationContent /></ContentPage>
