import React from 'react';
import {connect} from 'react-redux';
import {addCount, reduceCount} from '../redux';
import {Button} from 'antd';
import styles from './Home.less';
const Home = ({count, addCount, reduceCount}) => {
    return (
        <div>
            <p className={styles.title}>测试</p>
            <Button type="primary" onClick={() => {addCount()}}>增加</Button>
            <Button type="primary" onClick={() => {reduceCount()}}>减少</Button>
            <p>{count}</p>
        </div>
    )
}
export default connect((state) => {
    return {
        count: state.homeReducer.count
    }
}, {
    addCount,
    reduceCount
})(Home);