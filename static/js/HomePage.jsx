import React from "react"
import ReactDOM from 'react-dom';
import Summary from './Summary';
import App from './App';
class HomePage extends React.Component {
    render(){
      return (
        <div>
        <App />
        <Summary />
        </div>

      );
    }
}

export default HomePage
