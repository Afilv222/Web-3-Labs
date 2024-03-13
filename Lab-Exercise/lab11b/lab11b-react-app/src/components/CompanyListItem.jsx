import editIcon from '../assets/react.svg';

const CompanyListItem = (props) => {

	const handleClick = () => {
		props.changeCompany(props.company.symbol)
	}

   return (
      <li className="p-3 flex justify-between items-center user-card">
		 <div className="flex items-center">
			<span className="ml-3 font-medium">{props.company.name}</span>
		 </div>
		 <div>
			<button className="text-gray-500 hover:text-gray-700" onClick={handleClick}  >
			   <img src={editIcon}  className="w-5" />
			</button>
		 </div>
      </li>
   )
}

export default CompanyListItem;