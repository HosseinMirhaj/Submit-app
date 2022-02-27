import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";
import { Fragment } from "react/cjs/react.production.min";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
  };

  const Overlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.message}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.button}>
          <Button onClick={props.onConfirm}>OKay</Button>
        </footer>
      </Card>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
