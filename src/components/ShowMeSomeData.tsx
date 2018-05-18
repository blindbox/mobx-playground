import * as React from "react";
import {observer} from "mobx-react";
import {DashboardApi} from "./DashboardApi";
import {ChangeEventHandler} from "react";

/**
 * I say it's a dashboard but to be honest, it just shows data.
 */
@observer
export class ShowMeSomeData extends React.Component<{dashboardApi: DashboardApi}, {}>{
    render() {
        return <p>ShowMeSomeData: {JSON.stringify(this.props.dashboardApi.data)}</p>
    }
}