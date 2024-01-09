import React from "react";
import CompanyItem from './CompanyItem.js';

class CompanyList extends React.Component { 
  render() {

     return ( 
        <article >
           <h2>List fetched from our Node API</h2>
         { this.props.companies.map( (c) => <CompanyItem company={c} /> ) }              
        </article>
      );
   }
}
export default CompanyList
