import LazyLoad from "react-lazyload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LazyIcon(props) {
    return <LazyLoad><FontAwesomeIcon {...props}></FontAwesomeIcon></LazyLoad>
}