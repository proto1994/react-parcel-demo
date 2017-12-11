import {all, fork} from 'redux-saga/effects';
import {homeSagaRoot} from './views/home';

export default function *rootSaga() {
    yield all([
        fork(homeSagaRoot)
    ])
}