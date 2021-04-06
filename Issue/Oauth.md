# Oauth 인가코드받기 3가지 방법
Oauth 구현중 인가코드를 RestAPI 방법으로 받으려고 리서치 및 삽질중에 희소식을 알았다. 인가코드 받는 법은 총 3가지로 추리게 됐다. 아래와같이 라이브러리, SDK, RestAPI이렇게 3개가 된거같다.
아직은 방법을 못 찾았지만 인가코드받는 방식을 분류하게 돼서 무엇을 검색하고 공부해야되는지 알게됐다.

## react라이브러리를 사용하여 구현
가장 쉬운 방법으로 react-kakao-login을 다운받아서 하면된다.

## javascript SDK를 사용하여 구형
(https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js) html문서에 script삽입 하고
(https://developers.kakao.com/tool/demo/login/login?method=authorize) 함수를 가져다 사용하면 로그인 기능이 된다.

## Rest API를 사용하여 구현
지금 고민중 어떻게 redirect를 해야되는지...