import * as React from "react";
import {observer} from "mobx-react";
import {dashboardApi} from "./DashboardApi";

/**
 * I say it's a dashboard but to be honest, it just shows data.
 */
@observer
export class TryImportingItDirectly extends React.Component<{}, {}>{
    render() {
        return <p>TryImportingItDirectly: {JSON.stringify(dashboardApi.data)}</p>
    }
}