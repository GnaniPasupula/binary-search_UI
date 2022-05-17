import React from "react";
import "./Upperbody.css";

function Upperbody() {
  return (
    <div className="Upperbody">
      <div class="ui grid">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
      </div>
      <div class="ui stackable three column grid">
        <div class="row">
          <div class="left aligned ten wide column">
            <div>
              <p className="gigantic_header">Learn Algorithms Together </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="left aligned three wide column">
            <h2>Join a room</h2>
            <p className="gigantic_header_text gigantic_header_color">
              Join or create a room, invite your friends, and get ready to solve
              problems together.
            </p>
          </div>
          <div class="left aligned three wide column">
            <h2>Start the room</h2>
            <p className="gigantic_header_text gigantic_header_color">
              You'll all get the same coding question to solve. Only you can see
              your editor.
            </p>
          </div>
          <div class="left aligned three wide column">
            <h2>Solve problems</h2>
            <p className="gigantic_header_text gigantic_header_color">
              Chat and solve questions together. Once you're done, you can
              browse other people's solutions.
            </p>
          </div>
        </div>
        <div className="gap">
          <div class="ui icon input">
            <input
              id="background2"
              type="text"
              placeholder="Enter your email"
            />
            <i aria-hidden="true" class="search icon"></i>
          </div>
          <button id={"iconsz"} class="ui blue button">
            Get Started
          </button>
        </div>
        <div class="row">
          <div class="left aligned three wide column">
            <p className="gigantic_header_color">
              It's free and always will be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upperbody;
