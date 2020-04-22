import React from "react";

export const LinkCard = ({ link }) => {
  return (
    <>
      <h4>Link</h4>

      <p>
        Short link:
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Original link:
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Number of clicks on the link: <strong>{link.clicks}</strong>
      </p>
      <p>
        Date of creation:
        <strong> {new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};
