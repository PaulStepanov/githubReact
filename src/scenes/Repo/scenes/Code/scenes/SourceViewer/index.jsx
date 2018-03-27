import React, { Component } from "react";

import ControlPanel from "./scenes/ControlPanel";

const buttons = [
  { name: "Create new file" },
  { name: "Upload files" },
  { name: "Find file" }
];

class index extends Component {
  render() {
    return (
      <div>
        <ControlPanel buttons={buttons} />
      </div>
    );
  }
}

export default index;
