import CompanyListItem from './CompanyListItem.jsx';


const CompanyList = (props) => {
  return (      
   <div className="max-w-sm mx-auto mx-5 my-5 bg-gray-600">
      <div className=" shadow-lg rounded-lg overflow-hidden ml-4">
            <ul className="text-gray-300 ">
            { props.data.map( (c,indx) => <CompanyListItem company={c} key={indx} changeCompany={props.changeCompany} />) } 
            </ul>
      </div>
   </div>
  )

}

export default CompanyList;