import React from "react";
import VerticalBar from "../components/VerticalBar";
import { useSearchParams, useParams } from 'react-router-dom';

export default () => {
    const [queryParameters] = useSearchParams();
    const { ChartType } = useParams();
    console.log(queryParameters)
    console.log(queryParameters.get("a"))
    const dataSet = [{
        label: "datasetname1",
        data: [1, 2, 3],
        backgroundColor: "#de6b48"
    },
    {
        label: "datasetname2",
        data: [1, 2, 3],
        backgroundColor: "#e5b181"
    }]
    const labels = queryParameters.get("labels")?.split(",") ?? [];
    const title = queryParameters.get("title") ?? "";
    switch (ChartType) {
        case "vertical":
            return <VerticalBar title={title} labels={labels} dataSet={dataSet} />
        default:
            return (<div><h1>404</h1></div>)
    }
}