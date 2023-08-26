import "./App.css";
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const items = ["New York", "Paris", "San Fransisco", "Tokyo", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const onClick = () => {
    return setAlertVisibility(true);
  };
  const closeAlert = () => setAlertVisibility(false);
  const [AlertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {AlertVisible && (
        <Alert onClose={closeAlert}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button onClick={onClick} color="info">
        open info <i className="fa-regular fa-mug-hot"></i>
      </Button>
    </>
  );
}

export default App;
