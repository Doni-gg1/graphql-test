module.exports = {
  courses: [
    {
      id: 1,
      title: 'Course',
      testers: [
        {
          id: 1,
          fio: "Иванов Иван Иванович",
          status: "Входное тестирование | Старт",
          state: "Активен",
        }
      ]
    },
    {
      id: 2,
      title: 'Course 2',
      testers: [
        {
          id: 4,
          fio: "Иванов Иван Иванович",
          status: "Входное тестирование | Старт",
          state: "Деактивирован  | Не прошел ассесмент",
        }
      ]
    },
    {
      id: 3,
      title: 'Course 3',
      testers: [
        {
          id: 1,
          fio: "Иванов Иван Иванович",
          status: "Входное тестирование | Старт",
          state: "Активен",
        },
        {
          id: 2,
          fio: "Иванов Иван Иванович",
          status: "Входное тестирование | Старт",
          state: "Активен",
        }
      ]
    },
    {id: 4, title: 'Course 4', testers: []},
    {id: 5, title: 'Course 5', testers: []},
    {id: 6, title: 'Course 6', testers: []},
    {id: 7, title: 'Course 7', testers: []},
    {id: 8, title: 'Course 8', testers: []},
    {id: 9, title: 'Course 9', testers: []},
  ],
  testers: [
    {
      id: 1,
      fio: "Иванов Иван Иванович",
      status: "Входное тестирование | Старт",
      state: "Активен",
      courses: [
        {id: 1, title: 'Course'}
      ]
    },
    {
      id: 2,
      fio: "Иванов Иван Иванович",
      status: "Входное тестирование | Старт",
      state: "Активен",
      courses: [
        {id: 1, title: 'Course'}
      ]
    },
    {
      id: 3,
      fio: "Иванов Иван Иванович",
      status: "Входное тестирование | Старт",
      state: "Активен",
      courses: [
        {id: 1, title: 'Course'}
      ]
    },
    {
      id: 4,
      fio: "Иванов Иван Иванович",
      status: "Входное тестирование | Старт",
      state: "Деактивирован  | Не прошел ассесмент",
      courses: [
        {id: 1, title: 'Course'}
      ]
    },
    {
      id: 5,
      fio: "Иванов Иван Иванович",
      status: "Входное тестирование | Старт",
      state: "Деактивирован  | Отчислен",
      courses: [
        {id: 1, title: 'Course'}
      ]
    }
  ]
}
