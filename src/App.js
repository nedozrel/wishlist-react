import './css/main.css';
import {useEffect, useState} from "react";
import {Dropdown} from "./components/Dropdown";
import {WishList} from "./components/WishList";

const BY_TIME = "byTime"
const BY_PRIORITY = "byPriority"
const BY_NAME = "byName"

const SORTING_OPTIONS = [
  {id: 1, label: "Времени добавления", value: BY_TIME, reversed: false},
  {id: 2, label: "Времени добавления", value: BY_TIME, reversed: true},
  {id: 3, label: "Приоритету", value: BY_PRIORITY, reversed: false},
  {id: 4, label: "Приоритету", value: BY_PRIORITY, reversed: true},
  {id: 5, label: "Названию", value: BY_NAME, reversed: false},
  {id: 6, label: "Названию", value: BY_NAME, reversed: true},
]

function App() {
  const [currentSortingOption, setCurrentSortingOption] = useState(SORTING_OPTIONS[0])
  const [wishes, setWishes] = useState([])

  useEffect(() => { // Сортировка wishes
    if (!wishes.length) return

    setWishes((prev) => {
      let wishesSorted = prev.slice()

      if (wishesSorted.length < 1) return prev

      if (currentSortingOption.value === BY_NAME) {
        wishesSorted = wishesSorted.sort(
          (a, b) => currentSortingOption.reversed ?
            b.text.localeCompare(a.text):
            a.text.localeCompare(b.text)
        )
      } else if (currentSortingOption.value === BY_TIME) {
        wishesSorted = wishesSorted.sort(
          (a, b) => currentSortingOption.reversed ?
            b.time - a.time:
            a.time - b.time)
      } else if (currentSortingOption.value === BY_PRIORITY) {
        wishesSorted = wishesSorted.sort(
          (a, b) => currentSortingOption.reversed ?
            b.priority.value - a.priority.value:
            a.priority.value - b.priority.value
        )
      }
      return wishesSorted
    })
  }, [currentSortingOption, wishes.length])

  return (
    <div className="App">
      <Dropdown options={SORTING_OPTIONS}
                selected={currentSortingOption}
                setSelected={setCurrentSortingOption}
                isSorting={true}/>
      <WishList wishes={wishes} setWishes={setWishes}/>
    </div>
  )
}

export default App
