import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './CourseInput.css'; //these styles are not scoped to this component only... see button.js for more info 
import styled from 'styled-components';

//styled-component
//vscode-styled-components extension added 
const FormControl = styled.div`
  margin: 0.5rem 0;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  // &.invalid input {
  //   border-color: red;
  //   background-color: rgb(218, 155, 155);
  // }

  // &.invalid label {
  //   color: red;
  // }
`;

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
      {/* dynamically adding 'invalid' (css class style) conditionally */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>  */}
      {/* <FormControl className={!isValid && 'invalid'}>  same as above but using styled-components */}
      <FormControl invalid={!isValid}> {/* styled component with dynamic props */}
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
        </FormControl>
      {/* </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
