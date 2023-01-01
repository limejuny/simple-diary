import {useRef, useState} from "react";

export interface DiaryEditorState {
  author: string;
  content: string;
  emotion: number;
}

export class DiaryElement implements DiaryEditorState {
  id: number;
  author: string;
  content: string;
  emotion: number;
  createdAt: number;

  constructor(id: number, author: string, content: string, emotion: number, createdAt: number) {
    this.id = id;
    this.author = author;
    this.content = content;
    this.emotion = emotion;
    this.createdAt = createdAt;
  }
}

type DiaryEditorProps = {
  onCreate: (diary: DiaryEditorState) => void;
};

const DiaryEditor = ({onCreate}: DiaryEditorProps) => {
  const authorInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLTextAreaElement>(null);
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
    if (state.author.length === 0) {
      // alert("작성자를 입력해주세요.");
      authorInput.current?.focus();
      return;
    }

    if (state.content.length < 5) {
      // alert("내용은 5자 이상 입력해주세요.");
      contentInput.current?.focus();
      return;
    }

    onCreate(state);
  };

  return (
    <div className="DiaryEditor" >
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <span>오늘의 감정점수: </span>
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
