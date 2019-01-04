import React, {Fragment} from "react"
import ReactDOM from 'react-dom';
import Summary from './Summary';
import NavBar from './NavBar';
import CurrentListings from './CurrentListings';


class HomePage extends React.Component {
    render(){
      return (
        <Fragment>

        <NavBar />

        <Summary />

        <CurrentListings />

        </Fragment>

      );
    }
}

export default HomePage
