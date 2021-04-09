# 모듈화
백엔드에서 라우트 부분에서 코드가 너무 복잡하고 지저분해서 모듈화를 생각했다. 모듈화를 통해 함수를 불러와서 값만 리턴해 코드를 깔끔하게 했다.
```javascript
//변경 전 코드
const queryStringBody = Object.keys(bodyData)
        .map(k => encodeURIComponent(k) + "=" + encodeURI(bodyData[k]))
        .join("&");

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: queryStringBody
    };

    const getData = await fetch(process.env.KAKAO_URL, requestOptions);
    const accessToken = await getData.json();

const data = await fetch('https://kapi.kakao.com/v2/user/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken.access_token}`
        }
    });
const user = await data.json();
//변경 후 코드
const accessToken = await getAccessToken(process.env.KAKAO_URL, bodyData);
const user = await getUser(accessToken);
```
이렇게 백엔드에서는 모듈을 통해 코드를 간결화 시켜 가독성문제를 해결했다.
프론트에서도 따로 함수를 만들어 코드를 간결화 하도록 해야겠다.