import {useState} from 'react';
import {createContainer} from "unstated-next";
import {useMemoRequest} from "../hooks/useMemoRequest";
import {useRequest} from "ahooks";


export const Store = createContainer(() => {
    console.log("#### new Store")

    const [version, setVersion] = useState<number>(1)

    const helloMemoRequest = useMemoRequest(async () => {
        console.log("### useMemoRequest")
        return Promise.resolve(`Hello, version: ${version}!`);
    })

    const helloRequest = useRequest(async () => {
        console.log("### useRequest")
        return Promise.resolve(`Hello, version: ${version}!`);
    })

    return {version, setVersion, helloMemoRequest, helloRequest}
});
