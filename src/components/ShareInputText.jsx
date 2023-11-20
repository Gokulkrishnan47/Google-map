import React, { useState, useRef } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

import { RWebShare } from "react-web-share";

import "./App.css";

const App = () => {
  const [shareVisible, setShareVisible] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy to clipboard");
  const inputRef = useRef(null);

  function show() {
    setShareVisible(!shareVisible);
  }
  const copyText = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setCopyStatus("Copied!");
    }
  };

  return (
    <>
      {/* React Web Share */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <div className="share">
          {/* Container for share icons and copy link */}
          <div className="shareArticle">
            <div className="shareSocial">
              {/* Copy Link Section */}
              <div className="shareLink">
                <div className="permalink">
                  <input
                    className="textLink"
                    id="text copy-link"
                    type="text"
                    name="shortlink"
                    defaultValue="https://maps.app.goo.gl/ijCTAnDAjUFB7ZY79"
                    readOnly=""
                    ref={inputRef}
                  />
                  <span
                    className="copyLink"
                    id="copy"
                    tooltip={copyStatus}
                    onClick={copyText}
                  >
                    <i className="fa-regular fa-copy"></i>
                  </span>
                </div>
              </div>

              {/* Share Icons Section */}
              <section className="social-media-icons">
                <div className="social-media-icons">
                  <RWebShare
                    data={{
                      text: "",
                      url: "https://maps.app.goo.gl/ijCTAnDAjUFB7ZY79",
                      title: "",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <button>
                      <span className="material-symbols-outlined">share</span>
                    </button>
                  </RWebShare>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* React Share */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div className="share">
          {/* Container for share icons and copy link */}
          <div className="shareArticle">
            <div className="shareSocial">
              {/* Copy Link Section */}
              <div className="shareLink">
                <div className="permalink">
                  <input
                    className="textLink"
                    id="text copy-link"
                    type="text"
                    name="shortlink"
                    defaultValue="https://maps.app.goo.gl/ijCTAnDAjUFB7ZY79"
                    readOnly=""
                    ref={inputRef}
                  />
                  <span
                    className="copyLink"
                    id="copy"
                    tooltip={copyStatus}
                    onClick={copyText}
                  >
                    <i className="fa-regular fa-copy"></i>
                  </span>
                </div>
              </div>

              {/* Share Icons Section */}
              <section className="social-media-icons">
                <button onClick={show}>
                  <span className="material-symbols-outlined">share</span>
                </button>
                {shareVisible && (
                  <div
                    className={`social-media-icons ${
                      shareVisible ? "fadeIn" : "fadeOut"
                    }`}
                  >
                    <FacebookShareButton
                      url={"https://maps.app.goo.gl/ijCTAnDAjUFB7ZY79"}
                      quote={""}
                      hashtag=""
                      className="first-element"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <EmailShareButton
                      url={"https://maps.app.goo.gl/ijCTAnDAjUFB7ZY79"}
                      subject={""}
                    >
                      <EmailIcon size={32} round />
                    </EmailShareButton>

                    <WhatsappShareButton
                      url={"https://maps.app.goo.gl/ijCTAnDAjUFB7ZY79"}
                      title={""}
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <TwitterShareButton
                      url={"https://maps.app.goo.gl/ijCTAnDAjUFB7ZY79"}
                      title={""}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
