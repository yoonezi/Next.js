import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      작성자 : <RedInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목 : <RedInput type="text" onChange={props.onChangeTitle} />
      <br />
      내용 : <RedInput type="text" onChange={props.onChangeContents} />
      <br />
      <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
        GRAPHQL-API(동기) 요청하기
      </BlueButton>
    </>
  );
}
