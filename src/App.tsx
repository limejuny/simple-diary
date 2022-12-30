import './App.css';
import DiaryEditor, {DiaryElement} from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  new DiaryElement(1, "김철수", "오늘은 정말 좋은 날이었다.", 5, new Date().getTime()),
  new DiaryElement(2, "김영희", "오늘은 정말 나쁜 날이었다.", 1, new Date().getTime()),
  new DiaryElement(3, "김민수", "오늘은 정말 힘든 날이었다.", 3, new Date().getTime()),
  new DiaryElement(4, "김영수", "오늘은 정말 행복한 날이었다.", 5, new Date().getTime()),
  new DiaryElement(5, "김철호", "오늘은 정말 힘들었다.", 2, new Date().getTime()),
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
