"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const aws_amplify_1 = require("aws-amplify");
aws_amplify_1.default.configure({});
class App extends react_1.default.Component {
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_1.Text>Open up App.ts to start working on your app!</react_native_1.Text>
        <react_native_1.Text>Changes you make will automatically reload.</react_native_1.Text>
        <react_native_1.Text>Shake your phone to open the developer menu.</react_native_1.Text>
      </react_native_1.View>);
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//# sourceMappingURL=App.js.map