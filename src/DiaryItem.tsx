import {DiaryElement} from "./DiaryEditor";

const DiaryItem = ({diary}: {diary: DiaryElement}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {diary.author} | 감정점수: {diary.emotion}
        </span>
        <br />
        <span className="date">{new Date(diary.createdAt).toLocaleString()}</span>
      </div>
      <div className="content">{diary.content}</div>
    </div>
  );
};

export default DiaryItem;
