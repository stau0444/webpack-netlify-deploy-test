#
## Webpack
#

#
### 설치 및 사용
#

```js
//webpack  : 번들러 동작을 위해 필요한 코어 패키지
//webpack-cli  : 터미널에서 사용하는 cli
//webpack-dev-server : 개발용 서버
npm i -D webpack webpack-cli webpack-dev-server

//package.json에 스크립트 추가

"scripts": {
    //개발용 서버를 연다
    //개발 서버를 열기 위해선 webpack.config.js 파일이 필요
    "dev" : "webpack-dev-server --mode development",
    //프로젝트 build시에 실행
    "build" : "webpack --mode production"
}
```
#
### webpack.config.js 파일 구성
#

```js
//webpack.config.js는 node.js 에서 동작한다.


//webpack.config.js의 기본적인 설정 
const path = require('path')

module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    entry:'./js/main.js',
    //결과물(번들)을 반환하는 설정 
    output:{
        //node js 에서는 path라는 module을 통해 경로를 표현한다.
        //첫번째 인수인 __dirname은 현재 webpack.config.js의 경로를 말한다.
        //두밴째 인수에는 만들어낼 경로를 말한다.
        //resolve는 첫번째 파라미터와 두번째 파라미터를 합쳐 경로를 만들어낸다.
        //default 설정이 dist라는 폴더이기 때문에 따로 경로를 입력하지 않아도 된다.
        path: path.resolve(__dirname, 'dist'),
        //main.js라는 이름으로 파일이 만들어진다.
        //(default 설정은 엔트리에 정의된 파일 이름으로 filename이 지정된다.)
        filename:'main.js',
        //빌드시 기존에 남아 있던 파일을 지우고 파일을 생성한다.
        clean: true
    }
}


//개발 서버 설정을 위한 플러그인
npm i -D html-webpack-plugin


```

