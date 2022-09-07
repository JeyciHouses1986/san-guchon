import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white mt-2"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: {" "}
        <a className="text-dark" href="https://github.com/JeyciHouses1986" Target="_blank">
          Jeyci WebDeb
        </a>
      </div>
    </MDBFooter>
  );
}
