import './css/main.css';
import {useState} from "react";
import {Dropdown} from "./components/Dropdown";
import {WishList} from "./components/WishList";


function App() {

  const sortingOptions = [
    {label: "Времени добавления", value: "byTime"},
    {label: "Времени добавления", value: "byTimeReversed"},
    {label: "Приоритету", value: "byPriority"},
    {label: "Приоритету", value: "byPriorityReversed"},
    {label: "Названию", value: "byName"},
    {label: "Названию", value: "byNameReversed"},
  ]
  const [currentSortingOption, setCurrentSortingOption] = useState(sortingOptions[0])

  const [wishes, setWishes] = useState([])

  const sortWishes = (sortingOption) => {
    /*
    .slice() чтобы создать копию массива и не менять исходный

    allEqual нужен чтобы при сортировке в обратном порядке,
    если все элементы одинаковы, массив не сортировался и его не разворачивало
    */

    let wishesSorted = wishes.slice()

    if (wishesSorted.length < 1) return
    if (sortingOption.value.includes("byName")) {
      const allEqual = wishesSorted.every((val, i, arr) => val.text === arr[0].text)
      if (allEqual) return
      wishesSorted = wishesSorted.sort((a, b) => a.text.localeCompare(b.text))
    } else if (sortingOption.value.includes("byTime")) {
      const allEqual = wishesSorted.every((val, i, arr) => val.time === arr[0].time)
      if (allEqual) return
      wishesSorted = wishesSorted.sort((a, b) => a.time - b.time)
    } else if (sortingOption.value.includes("byPriority")) {
      const allEqual = wishesSorted.every((val, i, arr) => val.priority.value === arr[0].priority.value)
      if (allEqual) return
      wishesSorted = wishesSorted.sort((a, b) => a.priority.value - b.priority.value)
    }
    if (sortingOption.value.includes("Reversed")) {
      wishesSorted = wishesSorted.reverse()
    }

    setWishes([...wishesSorted])
  }

  return (
    <div className="App">
      <Dropdown options={sortingOptions}
                selected={currentSortingOption}
                setSelected={setCurrentSortingOption}
                sort={sortWishes}/>
      <WishList wishes={wishes} setWishes={setWishes}/>
    </div>
  )
}

export default App
