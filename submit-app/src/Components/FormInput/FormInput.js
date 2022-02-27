import Button from "../UI/Button/Button";
import FormControl from "./FormControl";
import { Fragment, useState } from "react";
import ErrorModal from "../UI/ErorrModal/ErrorModal";
const FormInput = (props) => {
  const [enteredUserName, setenteredUserName] = useState(" ");
  const [enteredAge, setenteredAge] = useState(" ");
  const [isValid, setIsvalid] = useState(true);
  const [isError, setIsError] = useState();

  const UsernameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsvalid(true);
    }
    setenteredUserName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsvalid(true);
    }
    setenteredAge(event.target.value.toString());
  };
  const submitChangeHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Invalid UserName!",
        message: "Please Entere a Valid UserName",
      });
      setIsvalid(false);

      return;
    }
    if (enteredAge < 1) {
      setIsError({
        title: "Invalid Age!",
        message: "Please Entere a Valid Age : (Age > 0)",
      });
      return;
    }
    props.onAdd(enteredUserName, enteredAge);
    setenteredUserName(" ");
    setenteredAge(" ");
  };

  const errorHandler = () => {
    setIsError(null);
  };

  return (
    <Fragment>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onConfirm={errorHandler}
        />
      )}
      <FormControl className={!isValid && "invalid"}>
        <form className="form-control" onSubmit={submitChangeHandler}>
          <label>UserName</label>
          <input
            type="text"
            value={enteredUserName}
            onChange={UsernameChangeHandler}
          />
          <label>Age(Years)</label>
          <input type="text" value={enteredAge} onChange={AgeChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </FormControl>
    </Fragment>
  );
};

export default FormInput;
