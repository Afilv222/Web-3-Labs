import React from "react";

class CompanyItem extends React.Component { 
  render() {

     return ( 
        <div >
           <hr />
           <h3>{this.props.company.name}</h3> 
           <p>{this.props.company.address}</p>          
        </div>
      );
   }
}
export default CompanyItem
