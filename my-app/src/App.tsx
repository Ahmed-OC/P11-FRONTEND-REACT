import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import { formatLogementForHome } from './formatter/Logement';
import logementJson from './data/logements.json'

class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {logements: []}
  }
  async componentDidMount(): void {
    const logements = await Promise.all(logementJson.map(async logement => formatLogementForHome(logement)));
    this.state.logements = logements;
  }
  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Banner image={'true'}/>
      </div>
    );
  }
}

export default App;
