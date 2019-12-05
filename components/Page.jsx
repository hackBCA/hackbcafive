import { Fragment } from "react";
import "../style.scss";

export default function Page({children}) {
    return (
        <Fragment>
            {children}
        </Fragment>
    );
}