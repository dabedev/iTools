import React from "react";
import VerticalBar from "../components/VerticalBar";
import NotFound from "../pages/NotFound";
import { useSearchParams, useParams } from 'react-router-dom';

export default () => {
    const [queryParameters] = useSearchParams();
    const { chartType } = useParams();
    const labels = queryParameters.get("labels")?.split(";") ?? [];
    const title = queryParameters.get("title") ?? "";
    const dataSetLabels = queryParameters.get("dataSetLabels")?.split(";") ?? [];
    const dataSetValues = queryParameters.get("dataSetValues")?.split(";") ?? [];
    const dataSetColors = queryParameters.get("dataSetColors")?.split(";") ?? [];

    const dataSet = dataSetLabels.map((value, i) => {
        var parsedData = dataSetValues[i].split(",").map(val => parseInt(val)) as GLfloat[];
        var parsedColor = `#${dataSetColors[i]}` as string;
        return {
            label: value, data: parsedData, backgroundColor: parsedColor
        }
    })

    switch (chartType) {
        case "vertical":
            return <VerticalBar title={title} labels={labels} dataSet={dataSet} />
        default:
            return (<NotFound />)
    }
}