import './App.css';
import logo from './logo.svg';
import * as React from 'react';

import {Dashboard} from "./components/Dashboard";
import {dashboardApi} from "./components/DashboardApi";
import {ShowMeSomeData} from "./components/ShowMeSomeData";
import {TryImportingItDirectly} from "./components/TryImportingItDirectly";

class App extends React.Component {
    state = {
        show: true
    }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reactz</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Dashboard dashboardApi={dashboardApi}/>
          <ShowMeSomeData dashboardApi={dashboardApi}/>
          {this.state.show ? <TryImportingItDirectly/> : null}
          <button type="button" onClick={() => this.setState({show: !this.state.show})}>Toggle TryImportingItDirectly</button>
      </div>
    );
  }
}

export default App;
