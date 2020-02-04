import ContentPage from "../components/ContentPage";
import schedule from "../public/data/schedule.yaml";
import { useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { DateTime } from "luxon";

function getTime(date) {
    return DateTime.fromJSDate(date).setZone("America/New_York").toFormat("HH:mm");
}

export default () => {
    const sortedSchedule = useMemo(() => schedule.sort((a, b) => a.start - b.start), [schedule]);

    return <ContentPage title="Schedule & Workshops">
        <style jsx>{`
        :global(.event) {
            background-color: #0d3254;
        }
        `}</style>
        <h1>Schedule</h1>
        <Row>
            {sortedSchedule.map((event, index) => {
                return <Col xs={12} className="rounded shadow event p-3 my-1" key={index}><strong>{getTime(event.start)}</strong> - {event.name}</Col>
            })}
        </Row>
    </ContentPage>
}
