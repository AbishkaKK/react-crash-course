import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] is variable (selectedIndex)
  // arr[1] is updater function
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items founds</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
