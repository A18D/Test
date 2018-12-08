React & Redux
=====================
This is a test single page application.
Author: A18D

```javascript


```

Demo
-------------
[Demo](https://github.com/A18D/Test.git)


#### Installation
Run this npm command to install dependencies.
```
$ npm install
```

#### Build
Run this npm command to build the JavaScript Bundle
```
$ npm run build
$ yarn run build

```

#### Run
Run this npm command to build the JavaScript Bundle and open the browser to the app using the file api.
```
$ npm start
$ set Debug=true && npm start
$ set Debug=true && yarn run dev

```

Delete packet
-------------
local packet:
npm uninstall http-server

global packet:
npm uninstall http-server -g

Описание проекта
=====================
Проект представляет собой тестовое SPA приложение, разработанное в рамках самообучения с использованием таких библиотек JavaScript, как: react, redux, bootrstrap, jss.

Для работы с сервисами приложения перейдем в раздел "Обучение" -> "С чего начать". Суть сервисов заключается в решении задач трех типов. При переходе в раздел предмета "Математика" запускается процесс решения задач. Для других предметов задачи находятся в разработке.<br>
<br>
Для каждой задачи есть активные ​​области ​​изображения:<br>
<li>Контейнер “Время” - отображает время потраченное на выполнение задания, простой хронометр ​с​ ​​отсчетом ​​по ​​возрастанию, ​​начиная ​с​ ​​00:00:00.<br>
<li>Контейнер “Кол-во баллов” - увеличивается на число 10, если дан правильный ответ.<br>
<li>Контейнер “Количество монет” - увеличивается на число 1, за каждые набранные 10 баллов.<br>
Доступны следующие элементы управления сервисом:
<li>Кнопка “Подтвердить”. При клике по кнпоке система анализирует результат решения задачи. Выводит на экран соответствующую результату решения задачи картинку. В случае ​​неверного ​​ответа контейнеры “Кол-во баллов” и “Количество монет” ​​остаются ​​неизменными.<br>
<li>Кнопка “Подсказка” выдает подсказки трех уровней. Подсказки будут выводиться только после того, как будет дан неверный ответ.<br>
    *Первый уровень - это правило.<br>
    *Второй уровень - это подобная задача с готовым решением.<br>
    *Третий уровень - это ответ на текущую задачу.<br>
При использовании подсказки баллы и монеты не начисляются. Подсказки выводятся ниже кнопки подсказка. Если пользователь ошибся первый раз, то по кнопке подсказка ему выдается подсказка первого уровня, второй раз - вторая, а при ошибке третий раз - подсказка третьего уровня. Подсказки трех уровней есть не для ​​всех ​з​адач. ​​Для ​​первой ​з​адачи ​т​олько ​​две ​​подсказки: под самими подсказками есть ссылка “Еще одна подсказка”, по которой сразу отображается подсказка следующего уровня. В таком случае, если, к примеру, пользователь решал задачу и воспользовавшись подсказкой первого уровня, не давая ответа, воспользовался подсказкой второго уровня, а после этого дал неверный ответ, то при следующей попытке решения задачи по нажатию на кнопку “Подсказка” должна отобразиться подсказка ​т​ретьего ​у​ровня.

В тестовом задании не предполагается наличие полноценной базы данных, вывод задач зациклен до получения верного ответа, т.е. если пользователь дал неверный ответ, то ему опять предлагается решить ту же самую задачу.

Предполагается решение задач трех типов:
    *drag&drop. Пользователю предлагается подставить под картинкой нужные слова, обозначающие название вида животного.
    *choice. Пользователю ​​предлагается ​​выбрать ​​нужную ​к​артинку. Для этого типа вопроса ​​есть ​т​ри ​​подсказки.
    *input. Пользователю ​​предлагается ​​вписать ​​нужное ​з​начение ​​в ​​поле. Также предполагается наличие трех подсказок.
После решения всех трех задач система начнет повторное тестирование.