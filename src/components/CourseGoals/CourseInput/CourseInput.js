import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true) //use this state to style components conditionally

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){ //when user starts typing change isValid back to true to change conditional inline styles
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0){//trim() is a built in method that removes exvess white space at the beginning or the end
      setIsValid(false);
      return; //return nothing to stop users from adding blank goal fields
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* dynamically adding 'invalid' class (css class style) conditionally */}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}> 
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
        
        {/* using Conditional (ternary) operator to output a different style depending on isValid state*/}
        {/* inLine styles have the Highest priority!!! in CSS, will overwrite any other styles*/}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        /> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
