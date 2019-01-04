import React from "react";
import ListingsCard from "./ListingsCard"

export default class CurrentListings extends React.Component{
  render (){
    return <div className="listings">
              <h2> Current Listings </h2>
              <ListingsCard />
          </div>

  }
}
