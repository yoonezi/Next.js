import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

// import dkdjfenk from "./BoardWrite.presenter";  -> export default로 이름 바꿔서 가져오기
// import dkdjfenk , { apple } from "./BoardWrite.presenter";  -> export default와 export 함께 가져오기

// import * as S from './BoardWrite.presenter' -> export 한번에 다 가져오기
// S.BlueButton
// S.RedInput

export default function BoardWrite() {
  const [writer, setWrite] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables = $역할
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWrite(event.target.value);

    // writer,title,contents 어떤 것을 먼저, 마지막에 입력해도 세개가 다 입력됐을때
    // isActive가 true가 되도록 이 로직을 세군데 다 넣어준다.
    // 만약 onChangeContents에만 이 로직을 넣게 되면, 마지막에 입력한 것이 내용이어야만
    // isActive가 ture가 되는 문제가 발생한다.
    if (event.target.value && title && contents) {
      setIsActive(true);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setIsActive(true);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    }
  };
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
  );
}
