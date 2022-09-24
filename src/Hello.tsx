import React, {FC, useEffect} from 'react';
import './Hello.pcss';
import {Store} from "./store/Store";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    console.log("> Hello")
    const {version, setVersion, helloRequest, helloMemoRequest} = Store.useContainer();

    useEffect(() => {
        console.log("### helloRequest is changing")
    }, [helloRequest])

    useEffect(() => {
        console.log("### helloMemoRequest is changing")
    }, [helloMemoRequest])

    return <div>
        <div>
            <button onClick={() => setVersion(n => n + 1)}>Update version ({version})</button>
        </div>
        <div>
            <button onClick={() => helloRequest.refresh()}>helloRequest.Refetch</button>
            <button onClick={() => helloMemoRequest.refresh()}>helloMemoRequest.Refetch</button>
        </div>
    </div>
}
