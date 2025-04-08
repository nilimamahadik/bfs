import { useEffect, useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

function TranslateButton({ targetId }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [googleLoaded, setGoogleLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        initializeGoogleTranslate();
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = () => initializeGoogleTranslate();
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = initializeGoogleTranslate;
    loadGoogleTranslate();
  }, []);

  const initializeGoogleTranslate = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
      setGoogleLoaded(true);
    } else {
      console.error("Google Translate script failed to load.");
    }
  };

  const handleClick = (event) => {
    if (!googleLoaded) {
      alert("Google Translate is still loading. Please wait.");
      return;
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang) => {
    setAnchorEl(null);
    if (lang) {
      const targetElement = document.getElementById(targetId);
      if (!targetElement) {
        console.error(`Element with ID "${targetId}" not found.`);
        alert("Target element not found. Please check the targetId.");
        return;
      }
  
      const retryInterval = setInterval(() => {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
          clearInterval(retryInterval); // Stop retrying once the element is found
          console.log("Google Translate dropdown found. Setting language:", lang);
          select.value = lang;
          select.dispatchEvent(new Event("change"));
  
          // Isolate translation to the target element
          targetElement.classList.add("translate-target");
        } else {
          console.warn("Retrying: Google Translate dropdown (.goog-te-combo) not found.");
        }
      }, 200); // Retry every 200ms
      setTimeout(() => {
        clearInterval(retryInterval);
        console.error("Failed to find Google Translate dropdown (.goog-te-combo) after 5 seconds.");
      }, 5000); // Stop retrying after 5 seconds
    }
  };
  return (
    <Box style={{ marginLeft: "10px" }}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Translate
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}>
        <MenuItem onClick={() => handleClose("mr")}>Marathi</MenuItem>
        <MenuItem onClick={() => handleClose("hi")}>Hindi</MenuItem>
      </Menu>

      {/* Hidden Google Translate Widget */}
      <Box display="none">
        <div id="google_translate_element"></div>
      </Box>
    </Box>
  );
}

export default TranslateButton;