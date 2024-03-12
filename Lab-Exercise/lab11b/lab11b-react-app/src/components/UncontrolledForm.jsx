import { useState,createRef } from 'react';

const UncontrolledForm = (props) => {
	
	// define some references to our DOM form elements
	const name = createRef();
	const sector = createRef();
	const comments = createRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		let values = `Current values are ${ name.current.value } ${ sector.current.value } ${ comments.current.value }`;
		alert(values);
	}

   return (
		<form className="container" onSubmit={handleSubmit}>
			<fieldset id="box" className="has-background-white-ter">
				<legend className="is-size-5">Uncontrolled Components (DOM handles form state)</legend>
				<label className="label">Company Name</label>
				<input className="input" type="text" ref={name} />
				<label className="label">Sector</label>
				<div className="select">
					<select ref={sector}>
						<option>Select a sector</option>
						<option>Advertising</option>
						<option>Information Technology</option>
						<option>Telecommunications</option>
						<option>Textbooks</option>
					</select>       
				</div>
				<label className="label">Comments</label>
				<textarea className="textarea" ref={comments}></textarea>
				<button className="button is-link">Submit</button>
			</fieldset>                                   
		</form>
	);

}


export default UncontrolledForm;