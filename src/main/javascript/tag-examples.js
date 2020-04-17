import * as React from "react";
import * as ReactDOM from "react-dom";
import TagsApp from "./components/tags-app";

window.addEventListener( "load", () => ReactDOM.render( <TagsApp/>, document.getElementById( "tags-entry" ) ) );