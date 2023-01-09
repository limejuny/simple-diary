import {DiaryElement} from "./DiaryEditor";
import DiaryItem from "./DiaryItem";

type DiaryListProps = {
  diaryList: DiaryElement[];
  onDelete: (id: number) => void;
};

const DiaryList = ({diaryList, onDelete}: DiaryListProps) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((diary) => (
          <DiaryItem key={diary.id} diary={diary} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
