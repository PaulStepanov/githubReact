import React, { Component } from "react";

import ControlPanel from "./scenes/ControlPanel";
import CommitDetails from "./scenes/CommitDetails";

const buttons = [
  { name: "Create new file" },
  { name: "Upload files" },
  { name: "Find file" }
];

const lastCommitDetails = {
  userAvatarUrl: "https://avatars3.githubusercontent.com/u/18052706?s=40&v=4",
  userName: "Zarabon",
  commitMessage: "Commit message",
  latestCommitId: "1581c3f",
  latestCommitAgoText: "11 days ago"
};

class index extends Component {
  render() {
    return (
      <div>
        <ControlPanel buttons={buttons} />
        <CommitDetails {...lastCommitDetails} />
      </div>
    );
  }
}

export default index;
