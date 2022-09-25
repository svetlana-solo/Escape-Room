export enum NameSpace {
  App = 'APP',
  Quest = 'QUEST',
  DetailedQuest = 'DETAILED_QUEST',
  Order = 'ORDER',
}

export enum APIRoute {
  Quests = '/quests',
  Quest = '/quests/:id',
  Orders = '/orders'
}

export enum AppRoute {
  Main = '/',
  Contacts = '/contacts',
  DetailedQuest = '/detailed-quest/:id',
  NotFound = '*',
}

export enum LoadingStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

export const QuestGenre: { [key: string]: string } = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;

export const Level: { [key: string]: string } = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'легкий'
} as const;
