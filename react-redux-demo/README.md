### react-redux 使用
1. 创建 reducers
2. 合并 reducers
3. createStore
4. 通过 Provider 传递 store
5. 通过 connect 接收 store
6. actionCreators 生成用于传输给 dispatch 的 action 
7. 通过 dispatch 调用 reducers， 改变 state

同步 action 过程： actionCreator => dispatch(actionCreator()) => reducer => store => view
异步 action 过程： actionCreator => middleware处理生成新的 action => dispatch(actionCreator()) => reducer => store => view