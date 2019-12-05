import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import LazyIcon from "./LazyIcon";

export default function CircleIcon({icon, listItem}) {
    const content = (
        <span className="fa-layers fa-fw">
            <LazyIcon icon={faCircle} />
            <LazyIcon icon={icon} transform="shrink-8" />
        </span>
    );

    if (listItem) {
        return <span className="fa-li">{content}</span>
    } else {
        return content;
    }
}