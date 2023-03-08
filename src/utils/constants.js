
export const BY_TIME = "byTime"
export const BY_PRIORITY = "byPriority"
export const BY_NAME = "byName"

export const SORTING_OPTIONS = [
  {id: 1, label: "По времени добавления", value: BY_TIME, reversed: false},
  {id: 2, label: "По времени добавления", value: BY_TIME, reversed: true},
  {id: 3, label: "По приоритету", value: BY_PRIORITY, reversed: false},
  {id: 4, label: "По приоритету", value: BY_PRIORITY, reversed: true},
  {id: 5, label: "По названию", value: BY_NAME, reversed: false},
  {id: 6, label: "По названию", value: BY_NAME, reversed: true},
]

export const PRIORITY_OPTIONS = [
  {id: 1, label: "Высокий", value: 3},
  {id: 2, label: "Средний", value: 2},
  {id: 3, label: "Низкий", value: 1},
]