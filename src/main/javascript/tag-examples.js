import * as React from "react";
import { createRoot } from 'react-dom/client';

import TagsApp from "./components/tags-app";

const root = createRoot( document.getElementById( "tags-entry" ) );
window.addEventListener( "load", () => root.render( <TagsApp/> ) );