import { Fragment } from "react";
import Head from "next/head";
import "../style.scss";

export default function Page({children, title}) {
    return (
        <Fragment>
            <Head>
                <title key="title">hackBCA V{title && ` - ${title}`}</title>
            </Head>
            {children}
        </Fragment>
    );
}