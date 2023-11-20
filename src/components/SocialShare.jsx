import React, { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { FaShareAltSquare } from "react-icons/fa";

import "../Styles/socialShare.css";
import { RWebShare } from "react-web-share";

function SocialShare() {
  const [inputText, setInputText] = useState("https://www.bmesolutions.in/");
  const [copyStatus, setCopyStatus] = useState("Copy to Clipboard");
  const inputRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setCopyStatus("Copied");
    }
  };

  // const shareUrl = "https://www.bmesolutions.in/";
  return (
    <div className="social-parent">
      <h2 className="social-heading">Social Share </h2>
      <div className="input-div">
        <Stack spacing={3} className="social-input">
          <Input
            variant="outline"
            placeholder="Enter Text"
            type="text"
            errorBorderColor="red.300"
            value={inputText}
            ref={inputRef}
            onChange={handleInputChange}
          />
        </Stack>
        <Button
          tooltip={copyStatus}
          className="copy-button"
          onClick={handleCopy}
        >
          copy
        </Button>
      </div>

      <div className="button-div">
        <div>
          <RWebShare
            data={{
              text: "",
              url: "https://maps.app.goo.gl/ijCTAnDAjUFB7ZY79",
              title: "",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button className="social-button">
              <FaShareAltSquare />
              <span> Web share</span>
            </Button>
          </RWebShare>
        </div>
        <Button className="social-button" onClick={onOpen}>
          <FaShareAltSquare />
          <span> Share</span>
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="share-parent">
              <WhatsappShareButton url={inputText} title={""}>
                <WhatsappIcon size={52} round={true} />
                <p className="icon-name">whatsApp</p>
              </WhatsappShareButton>
              <FacebookShareButton url={inputText} quote={""}>
                <FacebookIcon size={52} round={true} />
                <p className="icon-name">Facebook</p>
              </FacebookShareButton>
              <TwitterShareButton url={inputText} title={""}>
                <TwitterIcon size={52} round={true} />
                <p className="icon-name">Twitter</p>
              </TwitterShareButton>
              <EmailShareButton url={inputText} subject={""}>
                <EmailIcon size={52} round />
                <p className="icon-name">Email</p>
              </EmailShareButton>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SocialShare;
