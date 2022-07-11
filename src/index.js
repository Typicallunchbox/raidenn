import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss'
import App from "./App";
const express = require('express')
const path = require('path')

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// const app = express()
// app.use('/', express.static(path.joins(__dirname, 'src/pages')))

// app.listen(9999, ()=> {
//     console.log('Server up at 9999')
// })