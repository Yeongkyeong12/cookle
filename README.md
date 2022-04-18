# 🍳Cookle

### 프로젝트 소개
- [Demo](https://cookle-project.netlify.app/) 
- Cook + Google = Cookle 이라는 이름으로 기획된 **요리레시피 검색 웹사이트**입니다.
- [Spoonacular API](https://spoonacular.com/food-api)를 async await 함수로 호출하였습니다.
- Home화면에서 랜덤으로 추천되는 레시피를 확인할 수 있고, 검색어를 입력하면 관련 레시피들을 카드 형식으로 보여줍니다.
- `React.js`, `styled-components`, `Bootstrap`을 주로 활용하였습니다.
- [Create React App](https://github.com/facebook/create-react-app)로 제작되었습니다.


## 배운 점

- `react-router-dom`을 사용해 페이지를 분류하고, 화면이 전환되는 방식을 배웠습니다.
- `react-splide`를 사용해 레시피 카드를 슬라이드 형식으로 적용하는 방식을 익혔습니다.
- `useState`, `useParams`, `useEffect` 등 `React.js`의 유용한 Hook 등을 직접 적용해보며 동작 방식을 익혔습니다.
- `styled-components`와 `Bootstrap`을 활용한 반응형 웹사이트 제작 방법을 익혔습니다.


### 추가할 내용
- (22.04.18 기준, 개발 진행 중)
- 레시피 카드의 `♥(like)` 아이콘을 누르면, `♥(like)`페이지에 해당 레시피들이 정리되도록 하기(상태관리 필요)
- 로그인 기능을 추가해서 각 유저마다 `♥(like)`를 누른 레시피 내용이 다르도록 만들기 
- Home화면 추천 레시피 카드의 splide를 반응형으로 만들기
