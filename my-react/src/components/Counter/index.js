import React, { useState, useEffect } from 'react';

const  Counter = props => {
    const [count, setCount] = useState(0);

    /**可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
     * 每次渲染或更新，都会触发其回调
     * 分为需要清除回调和不清除回调， 见React API 中关于 Hooks讲解
     * https://zh-hans.reactjs.org/docs/hooks-effect.html
    */
    useEffect(() => {
        console.log(count);
    });

    return (
    <div>
      <p>计数器</p>
        <div>
            <button onClick={() => setCount(count - 1)}> - </button>
            你点了{count} 次 
            <button onClick={() => setCount(count + 1)}> + </button>
        </div>
    </div>
  )
}
export default  Counter;
