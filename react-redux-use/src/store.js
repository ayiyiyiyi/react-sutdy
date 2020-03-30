import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'

/**
 * createStore 的第一个参数必须是 reducer， 如果是多个， 要在 reducer 目录下先使用 combineReducers 合并之后再导出
 */
export default createStore(reducers, applyMiddleware(thunk));