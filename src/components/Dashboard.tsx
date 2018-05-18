import * as React from "react";
import {observer} from "mobx-react";
import {dashboardApi, DashboardApi} from "./DashboardApi";
import {ChangeEventHandler} from "react";

/**
 * I say it's a dashboard but to be honest, it just shows data.
 */
@observer
export class Dashboard extends React.Component<{dashboardApi: DashboardApi}, {}>{
    state = {
        key: '',
        value: '',
    }

    handleChange: ChangeEventHandler<any> = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    addData = () => {
        dashboardApi.addData(this.state)
    }

    render() {
        return (
            <div>
                Data: {JSON.stringify(dashboardApi.data)} <br />
                <form>
                    <label>
                        Key
                        <input name="key" type="text" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Value
                        <input name="value" type="text" onChange={this.handleChange}/>
                    </label>
                    <button type="button" onClick={this.addData}>Submit</button>
                </form>
            </div>
        )
    }
}