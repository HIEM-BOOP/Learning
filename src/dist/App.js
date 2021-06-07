"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
require("./App.css");
var index_1 = require("./features/todo/pages/index");
var index_2 = require("./features/album/pages/index");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", component: index_2["default"], exact: true }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/todos", component: index_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/albums", component: index_2["default"] }))));
}
exports["default"] = App;
