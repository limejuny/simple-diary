import {DiaryElement} from "./DiaryEditor";

type DiaryItemProps = {
  diary: DiaryElement;
  onDelete: (id: number) => void;
};

const DiaryItem = ({diary, onDelete}: DiaryItemProps) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {diary.author} | 감정점수: {diary.emotion}
        </span>
        <span className="button">
          <button onClick={() => {
            if (window.confirm("정말 삭제하시겠습니까?")) {
              onDelete(diary.id);
            }
          }}>삭제</button>
        </span>
        <br />
        <span className="date">{new Date(diary.createdAt).toLocaleString()}</span>
      </div>
      <div className="content">{diary.content}</div>
    </div>
  );
};

export default DiaryItem;
