import React from "react";
import { loadable } from "hrx";

let routes = [
  {
    path: "/",
    component: loadable({
      loader: () => import("./pages/home"),
      loading: props => "Your cool loader..."
    })
  },
  {
    path: "*",
    component: props => <div>404 NOT FOUND</div>
  }
];

export default routes;
