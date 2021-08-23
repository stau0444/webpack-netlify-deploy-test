//작성하는 모든 자바스크립트는 바벨을 통해서 ES5로 변경되서 나간다.
module.exports = {
    presets: ['@babel/preset-env'],
    //비동기 문법이 동작할 수 있도록 도와준다.
    plugins:[
        ['@babel/plugin-transform-runtime']
    ]
}