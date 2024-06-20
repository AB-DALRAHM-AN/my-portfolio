import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <section>
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control amaximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </section>
  );
};

export default Loading;
