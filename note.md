# react란?

너가 쓰는 모든 요소들을 생성한다는 뜻
자바스크립트와 같이 그걸 만들고 그걸 html에 넣음

**virtual Document Object Model** : 소스코드에는 존재하지 않음! react 그걸 만들어내는 것임, react가 빠른 이유!

react는 소스코드에 처음부터 HTMl을 넣지 않고 HTML에서 HTML을 추가하거나 제거하는 법을 알고 있음

fabicon = 웹브라우저 탭에 있는 작은 로고
manifest.json = PWA

## <App/> 이것은 HTML인가?

아니다!

기본적으로 이것은 component라고 부른다. 그리고 react는 component와 함께 동작한다. 모든 것은 component다.
component는 html을 반환하는 함수 따라서 우리는 function, application을 갖고 있고 html을 반환한다.
react는 component를 사용해서 html처럼 작성하려는 경우에 필요

## jsx

javascript와 html 사이의 조합
react에서 나온 중요한 개념!
jsx는 react에 특화된 개념 중 하나인데, 유일한 것 같음

## component 만들기

1. .js file 만들고 꼭 import react from "react"해야함!
   하지않으면 react가 jsx가 있는 component를 사용하는 것을 알지 못함

react는 component를 가져와서 html을 rendering함

react app은 한번에 하나의 component만 rendering이 가능!!

## react의 강점은?

재사용이 가능한 component를 만들 수 있다는 점

## component에서 component/children component로 정보를 보내는 방법!

```javascript
<User name="wookkl"> user의 앱에 name이 전달됨 User component에 wookkl이라는 value 로 prop name을 전달
```

## prop-types: prop이 내가 원하는 prop인지 확인시켜주는 패키지

## class component

```javascript
class App extends from React.Component{
}
```

## state

state는 object이고 component의 data를 넣을 공간이 있고 이 데이터는 변함

setState(): 호출할 때 마다 react는 새로운 state와 함께 render function을 호출

## component lifecycle!

component는 라이프사이클을 가지고 있는데 라이프사이클 메서드는 기본적으로 리액트가 컴포넌트 를 생성하고 없애는 방법

컴포넌트가 생성될 때, 렌더 메서드 전에 호출되는 몇 가지 메서드가 존재
렌더 메서드 호출 후에 호출되는 메서드도 있음

1. mounting(): 컴포넌트 생성
   - constructor(): 이 메서드는 리액트에서 온게 아니라 자바스크립트에서 클래스를 만들 때 호출 되는 메서드 마운트될 때, 컴포넌트가 스크린에 표시될 때, 컴포넌트가 너의 웹사이트에 갈 떄 호출
   - render():
   - componentDidMount(): 이 컴포넌트는 처음 렌더링 됐다는 것을 알려줌
2. updating(): 업데이팅

   - static getDerivedStateFromProps():
   - shouldComponentUpdate(): 업데이트 할건지 말건지 결정
   - render():
   - componentDidUpdate()

3. unmounting() 컴포넌트 소멸 ex) 페이지 바꿀때
   -componentWillUnmount()

이론적으로 우리가 할 일은 componentDidMouint에서 Data를 Fetch함
API로부터 data fetching이 완료되면 그떄 렌더링

## axios

마치 fetch 위에 작은 layer

## async

getMovies = async() =>{
const movies = await axios.get("");
}
getMoives라는 함수는 비동기 함수이기 때문에 끝날때 까지 기다려야함 블로킹됨
