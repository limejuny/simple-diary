import {useRef, useState} from 'react';
import './App.css';
import DiaryEditor, {DiaryEditorState, DiaryElement} from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([] as DiaryElement[]);
  const dataId = useRef(0);

  const onCreate = (item: DiaryEditorState) => {
    const newItem: DiaryElement = new DiaryElement(
      dataId.current,
      item.author,
      item.content,
      item.emotion,
      new Date().getTime());
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (id: number) => {
    setData(data.filter((e: DiaryElement) => e.id != id))
    alert(id);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
