import useInput from "../hooks/userInput";

const BasicForm = (props) => {
  const {
    value: fname,
    isValid: fnameIsValid,
    hasError: fnameError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: fnameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lname,
    isValid: lnameIsValid,
    hasError: lnameError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: lnameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(value);
  });

  let formIsValid = false;
  if(fnameIsValid && lnameIsValid && emailIsValid){
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    console.log('Submitted');
    console.log(fname,lname,email);
    alert('Submitted by '+ fname)
    fnameReset();
    lnameReset();
    emailReset();
  }

  const fnameClasses = fnameError ? "form-control invalid" : "form-control";
  const lnameClasses = lnameError ? "form-control invalid" : "form-control";
  const emailClasses = emailError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fnameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={fname}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
          {fnameError && <p className="error-text">*First name field must required.</p>}
        </div>
        <div className={lnameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={lname}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
          {lnameError && <p className="error-text">*last name field must required.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className="error-text">*Email is invalid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
