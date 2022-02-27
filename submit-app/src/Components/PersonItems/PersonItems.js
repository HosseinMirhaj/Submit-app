import "../PersonItems/PersonItems.css";

const PersonItems = (props) => {
  const personDeleteHandler = () => {
    props.onDeletePerson(props.id);
  };
  return (
    <li className="person-item" onClick={personDeleteHandler}>
      {props.children}
    </li>
  );
};

export default PersonItems;
