import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';
export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    let store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    store['runSaga'] = sagaMiddleware.run;
    store.runSaga(rootSaga).done.catch((error) => console.warn(error));
    return store;
  }
  