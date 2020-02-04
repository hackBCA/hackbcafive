import ContentPage from "../components/ContentPage";
import schedule from "../public/data/schedule.yaml";
import { useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { DateTime } from "luxon";
import ReactMarkdown from "react-markdown";

function getTime(date) {
    return DateTime.fromJSDate(date).setZone("America/New_York").toFormat("HH:mm");
}

export default () => {
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
            height: 96px;
            pointer-events: none;
            z-index: 1;
        }
        `}</style>
        <h1>Schedule</h1>
        <Row>
            {sortedSchedule.map((event, index) => {
                const isHalfWidth = event.type === "workshop" || event.type === "activity";
                return <Col
                    xs={12}
                    md={isHalfWidth ? 6 : 12}
                    className={`my-2 px-2 ${isHalfWidth ? "hackbca-event-half-width" : ""}`}
                    key={index}
                >
                    <div className="rounded shadow hackbca-event p-3 w-100 h-100">
                        {isHalfWidth ? <div className="d-flex justify-content-between align-items-center w-100">
                            <h4 className="font-weight-bold w-auto flex-shrink-1">{event.name}</h4>
                            <span className="h5 pl-3">{getTime(event.start)}{event.end && <span className="text-white-50"> - {getTime(event.end)}</span>}</span>
                        </div> : <span><strong>{getTime(event.start)}{event.end && `-${getTime(event.end)}`}</strong> - {event.name}</span>}
                        {isHalfWidth && (event.description ? <ReactMarkdown source={event.description.replace(/\n/g, "\n\n")} linkTarget="_blank" /> : <p className="text-white-50"><em>No description available.</em></p>)}
                        {isHalfWidth && <div className="hackbca-event-scrim rounded-bottom"></div>}
                    </div>
                </Col>
            })}
        </Row>
    </ContentPage>
}
