import PersonItems from "../PersonItems/PersonItems";
import "../PersonList/PersonList.css";
const PersonList = (props) => {
  return (
    <ul className="person-list">
      {props.items.map((person) => (
        <PersonItems
          key={person.id}
          id={person.id}
          onDeletePerson={props.onDelete}
        >
          <div>
            {person.username} is {person.age} years old.{" "}
          </div>
        </PersonItems>
      ))}
    </ul>
  );
};

export default PersonList;
