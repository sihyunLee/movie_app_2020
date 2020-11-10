import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 리엑트가 빠른 이유. ReactDom.render로 index.html에
// 있는 root에 html을 처리하기 때문에 소스코드가 보이지 않는다.
// 컴포넌트(App)는 HTML을 반환하는 함수. JSX 라고 한다.
// 컴포넌트는 한번에 하나만 부를수 있으니 추가적인 컴포넌트는
// App.js에 임포트하여 추가한다.

ReactDOM.render(<App />, document.getElementById("root"));
