import React, { useState } from "react";

const ShareInputText = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const shareToWebsites = () => {
    // Assuming you have APIs or methods to send data to different websites
    // You might use fetch(), axios, or other libraries to make HTTP requests

    // Example: Sending inputText to Website A
    fetch("https://api.websiteA.com/share", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        // Handle error
      });

    // Example: Sending inputText to Website B
    fetch("https://api.websiteB.com/share", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        // Handle error
      });

    // Repeat this pattern for other websites you want to send data to
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={shareToWebsites}>Share</button>
    </div>
  );
};

export default ShareInputText;
