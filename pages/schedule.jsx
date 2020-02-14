import ContentPage from "../components/ContentPage";
import schedule from "../public/data/schedule.yaml";
import { useMemo, useState, Fragment } from "react";
import { Row, Col, Modal, Badge } from "react-bootstrap";
import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";
import ChevronRight from "../components/ChevronRight";

function getTime(date) {
    return DateTime.fromJSDate(date).setZone("America/New_York").toFormat("HH:mm");
}

function Schedule({date}) {
    const [modalEvent, setModalEvent] = useState(null);

    const sortedSchedule = useMemo(() => schedule.sort((a, b) => a.start - b.start), [schedule]);

    return <ContentPage title="Schedule & Workshops">
        <style jsx>{`
        :global(.hackbca-event) {
            background-color: #0d3254;
            position: relative;
        }

        :global(.hackbca-event-half-width) {
            height: 300px;
            overflow: hidden;
        }

        :global(.hackbca-event-scrim) {
            background-image: linear-gradient(to bottom, #0d325400, #0d3254ff, #0d3254ff);
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 128px;
            pointer-events: none;
            z-index: 1;
        }

        :global(.close) {
            color: #fff;
            text-shadow: none;
        }

        .hackbca-event-type {
            letter-spacing: 0.1rem;
            font-weight: 600;
            font-size: 0.8rem;
        }

        .hackbca-event-time {
            white-space: nowrap;
        }

        .hackbca-event-more-link {
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 2;
        }
        
        .hackbca-event-more-link a {
            color: #70BBFF;
        }

        .hackbca-event-more-link a:link {
            color: #70BBFF;
        }

        .hackbca-event-details {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 2;
        }

        :global(.modal-body a), :global(.modal-body a:link) {
            color: #70BBFF;
        }

        :global(.hackbca-event-past) {
            opacity: 0.4;
        }
        `}</style>
        <h1>Schedule</h1>
        <Row>
            {sortedSchedule.map((event, index) => {
                const isHalfWidth = event.type === "workshop" || event.type === "activity";
                return <Col
                    xs={12}
                    md={isHalfWidth ? 6 : 12}
                    className={`my-2 px-2 ${isHalfWidth ? "hackbca-event-half-width" : ""} ${date > (event.end || event.start) ? "hackbca-event-past" : ""}`}
                    key={index}
                >
                    <div className="rounded shadow hackbca-event p-3 w-100 h-100">
                        {isHalfWidth && <div className="hackbca-event-type text-uppercase text-white-50">{event.type}</div>}
                        {isHalfWidth ? <div className="d-flex justify-content-between align-items-center w-100">
                            <h4 className="font-weight-bold w-auto flex-shrink-1">{event.name}</h4>
                            <span className="h5 pl-3 hackbca-event-time">{getTime(event.start)}{event.end && <span className="text-white-50"> - {getTime(event.end)}</span>}</span>
                        </div> : <span><strong>{getTime(event.start)}{event.end && `-${getTime(event.end)}`}</strong> - {event.name}{event.location && ` @ ${event.location}`}</span>}
                        {event.beginner === "recommended" && <p><Badge variant="success">Recommended for Beginners</Badge></p>}
                        {event.beginner === "friendly" && <p><Badge variant="primary">Beginner-Friendly</Badge></p>}
                        {isHalfWidth && (event.description ? <ReactMarkdown source={event.description.replace(/\n/g, "\n\n")} linkTarget="_blank" /> : <p className="text-white-50"><em>No description available.</em></p>)}
                        {isHalfWidth && (event.description || event.presenter || event.requirements) && <div className="hackbca-event-scrim rounded-bottom"></div>}
                        {isHalfWidth && (event.presenter || event.requirements) && <div className="hackbca-event-details pl-3 pb-3">
                            {(event.presenter || event.location) && <div>{event.presenter}{event.location && ` @ ${event.location}`}</div>}
                            {event.requirements && <div className="text-white-50">This {event.type} has special requirements.</div>}
                        </div>}
                        {(event.description || event.requirements) && <div className="hackbca-event-more-link pr-3 pb-3">
                            <a href="#" onClick={(ev) => {ev.preventDefault(); setModalEvent(event)}}>More <ChevronRight /></a>
                        </div>}
                    </div>
                </Col>
            })}
        </Row>

        <Modal show={modalEvent} onHide={() => setModalEvent(null)}>
            <Modal.Header closeButton>
                <Modal.Title>{modalEvent && modalEvent.name}</Modal.Title>
            </Modal.Header>
            {modalEvent && <Modal.Body>
                <div className="h5 hackbca-event-time">{getTime(modalEvent.start)}{modalEvent.end && <span className="text-white-50"> - {getTime(modalEvent.end)}</span>}</div>
                {modalEvent.location && <div className="h5">{modalEvent.location}</div>}
                {modalEvent.presenter && <div className="h5">{modalEvent.presenter}</div>}
                {modalEvent.beginner === "recommended" && <p><Badge variant="success">Recommended for Beginners</Badge></p>}
                {modalEvent.beginner === "friendly" && <p><Badge variant="primary">Beginner-Friendly</Badge></p>}
                <div className="my-3"></div>
                {modalEvent.description && <ReactMarkdown source={modalEvent.description.replace(/\n/g, "\n\n")} linkTarget="_blank" />}
                {modalEvent.requirements && <Fragment>
                    <h5 className="font-weight-bold">Requirements</h5>
                    <ReactMarkdown source={modalEvent.requirements} />
                </Fragment>}
            </Modal.Body>}
        </Modal>
    </ContentPage>
}

Schedule.getInitialProps = () => {
    return {date: new Date()};
};

export default Schedule;