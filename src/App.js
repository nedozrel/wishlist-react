import {useEffect, useState} from "react";
import {Dropdown} from "./components/Dropdown";
import {WishList} from "./components/WishList";
import {BY_TIME, BY_PRIORITY, BY_NAME, SORTING_OPTIONS} from "./utils/constants";
import './css/main.css';

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
  }, [currentSortingOption, wishes.length, setWishes])

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
