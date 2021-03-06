module.exports = {
  titleLessons: [
    {
      id: 'Mathematics',
      title: 'Математика',
    },
    {
      id: 'Russian',
      title: 'Русский язык',
    },
    {
      id: 'English',
      title: 'Английский язык',
    },
    {
      id: 'World',
      title: 'Окружающий мир',
    },
  ],
  Mathematics: {
    questions: [
      {
        text: '"Подтащи" названия животных к картинкам',
        type: 'dragAndDrop',
        answers: [
          {
            image: 'turtle.png',
            sign: 'Черепаха',
          },
          {
            image: 'squirrel.png',
            sign: 'Белка',
          },
          {
            image: 'koala.png',
            sign: 'Коала',
          },
          {
            image: 'kangaroo.png',
            sign: 'Кенгуру',
          },
          {
            image: 'elephant.png',
            sign: 'Слон',
          },
          {
            image: 'tiger.png',
            sign: 'Тигр',
          },
        ],
        tips: [
          {},
          {
            answers: [
              {
                image: 'turtle.png',
                sign: 'Черепаха',
              },
              {
                image: 'squirrel.png',
                sign: 'Белка',
              },
            ],
          },
          {
            answers: [
              {
                image: 'turtle.png',
                sign: 'Черепаха',
              },
              {
                image: 'squirrel.png',
                sign: 'Белка',
              },
              {
                image: 'koala.png',
                sign: 'Коала',
              },
              {
                image: 'kangaroo.png',
                sign: 'Кенгуру',
              },
              {
                image: 'elephant.png',
                sign: 'Слон',
              },
              {
                image: 'tiger.png',
                sign: 'Тигр',
              },
            ],
          },
        ],
      },
      {
        text: 'Найди дятла на картинке',
        type: 'choice',
        answers: [
          {
            image: 'owl.png',
            right: 'false',
          },
          {
            image: 'duck.png',
            right: 'false',
          },
          {
            image: 'chick.png',
            right: 'false',
          },
          {
            image: 'toucan.png',
            right: 'true',
          },
        ],
        tips: [
          {
            text: 'Отличительная особенность дятлов - это их длинный прямой клюв и острые изогнутые когти, которые позволяют им держаться на горизонтальной поверхности (коре дерева).',
          },
          {
            text: 'Другая картинка дятла',
            image: 'toucan.png',
          },
          {
            answers: [
              {
                image: 'owl.png',
                right: false,
              },
              {
                image: 'duck.png',
                right: false,
              },
              {
                image: 'chick.png',
                right: false,
              },
              {
                image: 'toucan.png',
                right: true,
              },
            ],
          },
        ],
      },
      {
        text: 'Преобразуй единицы',
        type: 'input',
        answers: ['1', '3'],
        template: '13 см = :? дм + :? см',
        tips: [
          {
            text: '10 сантиметров содержат в себе 1 дециметр.',
          },
          {
            template: '14 см = :? дм + :? см',
            answer: ['1', '4'],
          },
          {
            template: '13 см = :? дм + :? см',
            answer: ['1', '3'],
          },
        ],
      },
    ],
  },
  Russian: {
    questions: [],
  },
  English: {
    questions: [],
  },
  World: {
    questions: [],
  },
};
