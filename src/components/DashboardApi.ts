import {observable} from "mobx";


export class DashboardApi {
    @observable data = {}

    addData = (data: any) => {
        this.data = Object.assign({}, this.data, {[data.key]: data.value})
        console.log('this.data: ', this.data)
    }
}

export const dashboardApi = new DashboardApi()