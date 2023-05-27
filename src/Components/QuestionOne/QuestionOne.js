import React from 'react';
import { useState } from 'react';


const QuestionOne = () => {
     //Question-1
  const [inputValues, setInputValues] = useState({
    username: '', status: ''
  });
  
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

    return (
        <div>
              {/* Question-1 */}
      <div>
        <form onChange={handleOnChange}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Status:
            <input type="text" name="status" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <button>Active</button>
        <button>complete</button>
        <button>All</button>
        
      </div>
        </div>
    );
};

export default QuestionOne;