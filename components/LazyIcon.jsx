import dynamic from "next/dynamic";
const FontAwesomeIcon = dynamic(() => import("./FontAwesomeIcon"), {ssr: false});

export default function LazyIcon(props) {
    return <FontAwesomeIcon {...props}></FontAwesomeIcon>
}