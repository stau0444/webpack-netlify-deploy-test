const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

/*
    1. entry를 통해 시작점을 찾고 
    2. entry의 내용들을 번들화한다.
    3. 번들시에 plugin들이 사용된다.
    4. 번들화된 파일이 output의 path 경로에 filename으로 만들어진다.

*/

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
    },
    module:{
        rules: [
            {   
                //.css 확장자인 것들은 use에 있는 모듈들을 사용하도록한다.
                test: /\.s?css$/,
                use: [
                    //4.css-loader가 해석한 것을 index.html의 style태그에 
                    //삽입하는 역할을 한다.
                    'style-loader',
                    //3.main.js에서 css 파일을 해석할 수 있도록한다.
                    'css-loader',
                    //2.공급업체 접두사 붙혀줌
                    'postcss-loader',
                    //1.sass를 통해 해석됨
                    'sass-loader'
                ]
            },
            {
                //webpack이 babel을 읽을 수 있도록 해주는 loader
                //js확장자 파일은 babel-loader를 통해 읽히고 
                //babel이 적용된다.
                test:/\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        // HtmlPlugin의 파라미터로 들어가는 파일과 
        //output 을 통해 만들어지는 js 파일의 합본이 dist에 만들어진다.,
        new HtmlPlugin({
            template: './index.html'
        }),
        //CopyPlugind을 통해 from 에 정의한 폴더가 
        //dist 로 copy된다.
        new CopyPlugin({
            patterns: [
                { from : 'static'}
            ]
        })
    ],
    devServer:{
        host: 'localhost'
    }
}