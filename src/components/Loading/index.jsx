import React from "react";

function Loading({ remainingFriends, totalFriends }) {
  const progress = ((totalFriends - remainingFriends) / totalFriends) * 100;

  return (
    <div className="progress" role="progressbar" aria-label="Loading progress" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar" style={{ width: `${100 - progress}%` }}></div>
    </div>
  );
}

export default Loading;
