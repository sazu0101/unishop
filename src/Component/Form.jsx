import React from "react";

const Form = ({handleSubmit,value,setValue }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
       <input type="name" className="form-control" value={value}
          onChange={(e) =>setValue (e.target.value)} />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
