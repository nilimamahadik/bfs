import React from "react";
import { Link } from "react-router-dom";
import "./quick-links.css";

export default function QuickLinks({ sideNavOpenKeysHandler }) {
  const QuickLinksContainer = ({ link, icon, bg, linkName }) => {
    return (
      <Link to={link}>
        <div className="quick-links-inner-container">
          <div style={{ backgroundColor: bg }} className="quick-link">
            {icon}
          </div>
          <span className="quick-link-title">{linkName}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="quick-links-wrapper">
    

      <div className="quick-links-container">
        <QuickLinksContainer
          link="/upload"
          bg="#344D6740"
          linkName="Upload Data"
          icon={
            <i
              style={{ color: "#344D67" }}
              class="bi bi-box-fill quick-links-icon"></i>
          }
        />
        <QuickLinksContainer
          link="/all-data"
          bg="#6ECCAF40"
          linkName="All Data"
          icon={
            <i
              style={{ color: "#6ECCAF" }}
              class="bi bi-bag-fill quick-links-icon"></i>
          }
        />
        <QuickLinksContainer
          link="*"
          bg="#FD841F40"
          linkName="Account"
          icon={
            <i
              style={{ color: "#FD841F" }}
              class="bi bi-receipt quick-links-icon"></i>
          }
        />
        <QuickLinksContainer
          link="*"
          bg="#00ABB340"
          linkName="Report"
          icon={
            <i
              style={{ color: "#00ABB3" }}
              class="bi bi-wallet-fill quick-links-icon"></i>
          }
        />
      

        <QuickLinksContainer
          link="*"
          bg="#0D4C9240"
          linkName="SETTINGS"
          icon={
            <i
              style={{ color: "#0D4C92" }}
              class="bi bi-gear-fill quick-links-icon"></i>
          }
        />
      </div>
    </div>
  );
}
