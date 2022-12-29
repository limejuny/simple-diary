import {useState} from "react";

interface DiaryEditorState {
  author: string;
  content: string;
  emotion: number;
}

const DiaryEditor = () => {
  const [state, setState] = useState<DiaryEditorState>({
    author: "",
    content: "",
    emotion: 1,
  });

  type Events = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  const handleChangeState = (e: React.ChangeEvent<Events>) => {
    const {name, value} = e.target;

    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // e: React.MouseEvent<HTMLButtonElement>
    console.log(state);
    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor" >
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>
          일기 저장하기
        </button>
      </div>
    </div>
  );
}

export default DiaryEditor;
