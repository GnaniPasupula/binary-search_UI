import React from "react";
import "./Appbar.css";

function Appbar() {
  return (
    <header>
      <div>
        <div class="ui stackable secondary tiny menu">
          <a class="item">
            <i id="icons" class="behance big icon"></i>
            <h2>binarysearch</h2>
          </a>
          <a class="item">
            <i class="globe large icon"></i>
            <b>Problems</b>
          </a>
          <a class="item">
            <i class="chess queen large icon"></i>
            <b>Leaderboards</b>
          </a>
          <a class="item">
            <i class="twitch large icon"></i>

            <b>Live</b>
          </a>
          <a class="item">
            <i class="gem outline large icon"></i>

            <b>Shop</b>
          </a>
          <a class="item">
            <i class="building large icon"></i>

            <b>Jobs</b>
          </a>

          <div class="right menu">
            <a class="item">
              <button id="background" class="ui grey button">
                Log in
              </button>
            </a>

            <div class="item">
              <div class="ui icon input">
                <input
                  id="background2"
                  type="text"
                  placeholder="Enter your email"
                />
                <i aria-hidden="true" class="search icon"></i>
              </div>
            </div>

            <a class="item">
              <button id={"iconsz"} class="ui button">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Appbar;
