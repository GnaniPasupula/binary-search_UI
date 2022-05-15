import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div class="ui grid">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>

        <div class="left aligned four wide column">
          <div class="row">
            <div class="column">
              <i id={"icons"} class="behance big icon"></i>
            </div>
            <div class="column">
              <h3>binarysearch</h3>
            </div>
          </div>
          <div class="row">
            <p className="gigantic_header_text2 gigantic_header_color">
              © 2022 binarysearch. All rights reserved.
            </p>
          </div>
        </div>
        <div class="left aligned four wide column">
          <div>
            <h3>Product</h3>
          </div>
          <div class="row">
            <a className="gigantic_header_text2 gigantic_header_color">About</a>
          </div>
          <div class="row">
            <a className="gigantic_header_text2 gigantic_header_color">FAQ</a>
          </div>
          <div class="row">
            <a className="gigantic_header_text2 gigantic_header_color">
              Contact
            </a>
          </div>
          <div class="row">
            <a className="gigantic_header_text2 gigantic_header_color">
              Support
            </a>
          </div>
          <div class="row">
            <a className="gigantic_header_text2 gigantic_header_color">
              Partnerships
            </a>
          </div>
        </div>
        <div class="left aligned four wide column">
          <div class="row">
            <div>
              <h3>Resources</h3>
            </div>
            <div>
              <a className="gigantic_header_text2 gigantic_header_color">
                Top Interview Problems
              </a>
            </div>

            <div class="row">
              <a className="gigantic_header_text2 gigantic_header_color">
                Top Google Problems
              </a>
            </div>
            <div class="row">
              <a className="gigantic_header_text2 gigantic_header_color">
                Top Facebook Problems
              </a>
            </div>
            <div class="row">
              <a className="gigantic_header_text2 gigantic_header_color">
                Top Amazon Problems
              </a>
            </div>
            <div class="row">
              <a className="gigantic_header_text2 gigantic_header_color">
                Top Microsoft Problems
              </a>
            </div>
          </div>
        </div>
        <div class="left aligned four wide column">
          <div>
            <h3>Terms</h3>
          </div>

          <div class="row">
            <a className="gigantic_header_text2 gigantic_header_color">
              Privacy Policy
            </a>
          </div>
          <div class="row">
            <a className="gigantic_header_text2 gigantic_header_color">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      <div class="ui grid">
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
      </div>
    </div>
  );
}

export default Footer;
