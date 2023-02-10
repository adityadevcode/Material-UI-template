import * as React from "react";
import Button from "@mui/material/Button";
import Appbar from "./Components/Appbar";
import Table from "./Components/Table";
import Googledirections from "./Components/Googledirections";
import Alerts from "./Components/Alerts";
import Progressbar from "./Components/Progressbar";


function App() {
  return (
    <div>
      <Appbar />
      <p>Appbar component</p>
      <Button variant="contained">Hello World</Button>
      <p> App component</p>
      <Table />
      <p>Table component</p>
      <Googledirections />
      <p>Googledirections Component</p>
      <Alerts />
      <p>Alert Component</p>
      <Progressbar />
      <p>Progressbar Component</p>
    </div>
  );
}

export default App;
