import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  // 이벤트핸들러 함수
  const onClickAsync = () => {
    const data = axios.get("https://koreanjson.com/posts/1");
    console.log(data);
  };

  //   async function onClicksync() {
  const onClicksync = async () => {
    const data = await axios.get("https://koreanjson.com/posts/1");
    console.log(data);
    console.log(data.data);
    console.log(data.data.title);
    setTitle(data.data.title);
  };

  return (
    <>
      <button onClick={onClickAsync}>비동기 REST-API 요청하기</button>
      <button onClick={onClicksync}>동기 REST-API 요청하기</button>
      <div>{title}</div>
    </>
  );
}
