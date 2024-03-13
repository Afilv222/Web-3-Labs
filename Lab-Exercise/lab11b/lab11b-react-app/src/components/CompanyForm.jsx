
const CompanyForm = (props) => {

  // if no company has been selected, don’t display the edit form
  if (!props.data){
    return
  }

  // this will be a controlled form: every time an element is changed
  // by the user, update the state data
  const handleChange = (e) => {
    // create a copy of the company object
    const updatedCompany = { ...props.data };
    // use bracket notation to modify the relevant object property
    updatedCompany[e.target.name] = e.target.value;
    // use the passed save function (implemented in CompanyBrowser)
    props.save(updatedCompany);
    } 

   return (
      <div className="col-span-5 ">
         <div className="max-w-full mx-auto my-10 text-gray-300">
            <div className=" shadow-lg rounded-lg overflow-hidden ml-4 mr-4">



      <div className="bg-gray-600 rounded shadow-lg p-4 px-4 md:p-8 mb-6">

        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
          <div className="text-gray-200">
            <p className="font-medium text-lg">Company Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
               <div className="md:col-span-4">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={props.data.name} onChange={handleChange}  className="h-10 border mt-1 rounded px-4 w-full text-gray-600 bg-gray-50"  />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="symbol">Symbol</label>
                <input type="text" value={props.data.symbol} readOnly  className="h-10 border mt-1 rounded px-4 w-full text-gray-600 bg-gray-50"    />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="hq">HQ</label>
                <input type="text" name="hq" value={props.data.hq} onChange={handleChange}  className="h-10 border mt-1 rounded px-4 w-full text-gray-600 bg-gray-50" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="sector">Sector</label>
                <input type="text" name="sector" value={props.data.sector} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full text-gray-600 bg-gray-50"  />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={props.data.description} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full text-gray-600 bg-gray-50"  />
              </div>


            </div>
          </div>
        </div>
      </div>




            </div>
         </div>
      </div>
   )

}

export default CompanyForm;