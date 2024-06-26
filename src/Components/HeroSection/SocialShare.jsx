import React, { useState } from "react";
import "./HeroSection.css";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

const SocialShare = () => {
  const currentPageUrl = window.location.href;
  const [inputText, setInputText] = useState(currentPageUrl);
  const [isCopied, setIsCopied] = useState(false);

 

  const handleCopyToClipboard = () => {
    // Check if the browser supports clipboard API
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(inputText)
        .then(() => {
          console.log("Text copied to clipboard");
          // Optionally, you can provide user feedback here
          setIsCopied(true);
          setTimeout(()=>{
            setIsCopied(false);
          }, 5000)
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          // Optionally, you can provide user feedback here
        });
    } else {
      // Fallback for browsers that don't support clipboard API
      console.error("Clipboard API not supported");
      // Optionally, you can provide alternative behavior here
    }
  };
  return (
    <div>
      <div className="social-share-list flex justify-center">
        <EmailShareButton url={currentPageUrl}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <FacebookShareButton url={currentPageUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <FacebookMessengerShareButton url={currentPageUrl}>
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
        <TwitterShareButton url={currentPageUrl}>
          <XIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={currentPageUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <InstapaperShareButton url={currentPageUrl}>
          <InstapaperIcon size={32} round />
        </InstapaperShareButton>
        <LinkedinShareButton url={currentPageUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <PinterestShareButton url={currentPageUrl}>
          <PinterestIcon size={32} round />
        </PinterestShareButton>
        <TelegramShareButton url={currentPageUrl}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>
      <div className="copy-link flex justify-between align-center">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          disabled
        />
        <span onClick={handleCopyToClipboard}>{isCopied ? 'Copied' : 'Copy Link'}</span>
      </div>
    </div>
  );
};

export default SocialShare;
