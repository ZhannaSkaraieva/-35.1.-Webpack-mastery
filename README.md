# -35.1.-Webpack-mastery

npm init -y

npm install webpack webpack-cli --save-dev // используют толькона этапе разработки, устанавливают в дев зависимости 

"build": "webpack" //вызываем только для сборки бандла(бандл это то что получается в результате сборки)
npm run build

создаем 
webpack.config.js

npm run build:dev

npm run build:prod

npm install -g typescript //устанавливаем на комп глобально.

npm install --save-dev ts-loader

DEV-сервер:
npm install -D webpack-dev-server 
npm start 

npm install --save-dev css-loader

npm install --save-dev style-loader

npm install less less-loader --save-dev

npm install --save-dev mini-css-extract-plugin

npm i -D babel-loader @babel/core @babel/preset-env

