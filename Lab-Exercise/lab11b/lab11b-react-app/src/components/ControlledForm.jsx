import { useState } from 'react';
import Company from './Company';

const ControlledForm = (props) => {
	// initialize our state
	const [company, setCompany] = useState(
		{
		name: "FunWebDev Corp",
		sector: "Textbooks",
		comments: "They know things!"
		}
	);
   
    /* add additional functions here */
	const handleSubmit = (e) => {
		e.preventDefault();
		let values = `Current values are ${company.name} ${company.sector} ${company.comments}`;
		alert(values);
	}; 

	const handleChange = (e) =>{
		//The spread operator (…) is used to make a copy of the contents of the company object that is already in state.
		const updatedCompany = { ... company };
		updatedCompany[e.target.name] = e.target.value;
		setCompany(updatedCompany)
	}

    return (
		<form className="container" onSubmit={handleSubmit}>
			<fieldset id="box" className="has-background-white-ter">
				<legend className="is-size-4">Controlled Components (React handles state)</legend>
				<label className="label">Company Name</label>
				<input className="input" type="text" name = 'name' value={company.name} onChange={handleChange} />
				<label className="label">Sector</label>
				<div className="select">
					<select name = 'sector' value={company.sector} onChange={handleChange}  >
						<option>Select a sector</option>
						<option>Advertising</option>
						<option>Information Technology</option>
						<option>Telecommunications</option>
						<option>Textbooks</option>
					</select>       
				</div>
				<label className="label">Comments</label>
				<textarea className="textarea" name = 'comments' value={company.comments} onChange={handleChange} ></textarea>
				<button className="button is-link">Submit</button>
			</fieldset>                                   
		</form>
	);

}

export default ControlledForm;
