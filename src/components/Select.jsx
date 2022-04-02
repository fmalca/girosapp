import React from 'react'

const Select = ({data,default}) => {
  return (
    <>
      <div className="col-12">
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue={0}
        >
        {
            data.map(item =>{
                `<option value =${data.id} > ${data.name} </option> `
            })

        }

        </select>
      </div>
    </>
  );
}

export default Select