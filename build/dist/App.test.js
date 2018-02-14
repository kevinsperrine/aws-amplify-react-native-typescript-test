"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const App_1 = require("./App");
const renderer = require("react-test-renderer");
it('renders without crashing', () => {
    const rendered = renderer.create(<App_1.default />).toJSON();
    expect(rendered).toBeTruthy();
});
//# sourceMappingURL=App.test.js.map