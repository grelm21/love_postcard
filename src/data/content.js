export const mainPage = {
  headline: 'Тебе открыточка =)',
  buttonTitle: 'Открыть',
  dodgeAttempts: 5,
}
export const mainDialog = {
  title: 'Ура, она открылась =)',
  photo: '/love_cat.gif',
  photoAlt: 'love_cat',
  text: `🐾 Мяу-мяу! Люблю тебя, моё солнышко 🌞 Ты самая красивая 😻, замечательная, замурчательная
        🐱 (потому что я кот, а ты меня мурчать заставляешь!). Люблю всем своим кошачьим сердцем 💘
        Чмоки-чмоки в носик 💋 Твой муж =)`,
  exploreButton: 'Что ещё?',
  explorePath: '/hub',
}

export const hubPage = {
  title: 'Что откроем дальше?',
  subtitle: 'Выбирай — каждая открытка маленькое приключение',
}

export const hubItems = [
  {
    path: '/wheel',
    name: 'wheel',
    title: 'Колесо фортуны',
    description: 'Крути и узнай, что тебя ждёт',
    emoji: '🎡',
    disabled: false,
  },
  {
    path: '/scratch',
    name: 'scratch',
    title: 'Скретч-карта (скоро)',
    description: 'Сотри слой и открой послание',
    emoji: '✨',
    disabled: true,
  },
  {
    path: '/timeline',
    name: 'timeline',
    title: 'Наши воспоминания (скоро)',
    description: 'Таймлайн самых тёплых моментов',
    emoji: '📸',
    disabled: true,
  },
  {
    path: '/letter',
    name: 'letter',
    title: 'Письмо (скоро)',
    description: 'Открой письмо по кусочкам',
    emoji: '💌',
    disabled: true,
  },
]
