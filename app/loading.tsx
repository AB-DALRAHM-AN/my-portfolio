import React from "react";
import "./loading.css";
import { Dice1 } from "lucide-react";

const Loading = () => {
  return (
    <section className="h-screen">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>
    </section>
  );
};

export default Loading;
