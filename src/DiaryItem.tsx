import {useRef, useState} from "react";
import {DiaryElement} from "./DiaryEditor";

type DiaryItemProps = {
  diary: DiaryElement;
  onDelete: (id: number) => void;
};

const DiaryItem = ({diary, onDelete}: DiaryItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {setIsEditing(!isEditing);};

  const [content, setContent] = useState(diary.content);
  const contentInput = useRef<HTMLTextAreaElement>(null);

  const handleSave = () => {
    if (content.length < 5) {
      alert("내용은 5자 이상 입력해주세요.");
      contentInput.current?.focus();
      return;
    } else if (window.confirm("정말 수정하시겠습니까?")) {
      diary.content = content;
      toggleEdit();
    }
  }
  const handleCancel = () => {
    setContent(diary.content);
    toggleEdit();
  }
  const handleDelete = () => {
    onDelete(diary.id);
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자: {diary.author} | 감정점수: {diary.emotion}
        </span>
        <span className="button">
          {
            isEditing ?
              <>
                <button onClick={handleSave}>저장</button>
                <button onClick={handleCancel}>취소</button>
              </> :
              <>
                <button onClick={toggleEdit}>수정</button>
                <button onClick={handleDelete}>삭제</button>
              </>
          }
        </span>
        <br />
        <span className="date">{new Date(diary.createdAt).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEditing ?
          <textarea
            ref={contentInput}
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          /> :
          diary.content
        }
      </div>
    </div >
  );
};

export default DiaryItem;
