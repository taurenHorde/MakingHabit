import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { makinghabit as appName } from './app.json';

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Root);