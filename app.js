// Import the boot function to intialize hrx.
import React from "react";
import { render } from "hrx";

// Import style onto the page.
import "./app.css";
import "hrx/rules.css";

// Import routes for the app.
import routes from "./routes";

// Render the app to the DOM.
render(
  {
    routes
  },
  document.getElementById("root")
);
