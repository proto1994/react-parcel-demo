import {take, all, fork} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {ADD_HOME_COUNT, REDUCE_HOME_COUNT} from './redux';
function *watch() {
    while(true) {
        const type = yield take([ADD_HOME_COUNT, REDUCE_HOME_COUNT]);
        console.log(type, '222');
    }   
}
export function *sagaRoot() {
    yield all([
        fork(watch)
    ])
}