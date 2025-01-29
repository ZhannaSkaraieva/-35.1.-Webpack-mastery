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

npm run build:dev:start

npm install --save-dev css-loader

npm install --save-dev style-loader

npm install less less-loader --save-dev

npm install --save-dev mini-css-extract-plugin

npm i -D babel-loader @babel/core @babel/preset-env

browserslistrc
Файл .browserslistrc дозволяє нам визначити, для яких браузерів ми хочемо, щоб наш код був оптимізований. Це впливає на транспіляцію Babel та автопрефіксування в PostCSS.
> 0.25%
not dead
Ця конфігурація означає, що ми хочемо підтримувати браузери, які використовуються в більш ніж 0.25% випадків у світі та не позначені як "мертві" (тобто ті, які більше не оновлюються).

npm i -D eslint-webpack-plugin
Файл .eslintrc містить налаштування ESLint для нашого проєкту. Він визначає правила, середовища, з якими працює код, та рекомендації, яким набором правил слідувати.

npm i -D webpack-bundle-analyzer
npm run analyze