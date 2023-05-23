import { useState } from "react";
export default function SingupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    event; // 발생한 이벤트
    event.target; //작동된 태그
    event.target.value; // 작동된 태그의 입력된 값

    setEmail(event.target.value); //작동된 태그의 입력된 값이 email 변수에 저장됨
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    // email, pw에 잘 포장이 되어 들어갔는지 확인
    // console.log(email);
    // console.log(password);

    //검증하기
    if (email.includes("@") == false)
      //   alert("이메일이 올바르지 않습니다. @ 필요");

      //   document.getElementById("error").innerText =
      //     "이메일이 올바르지 않습니다. @ 필요";
      setEmailError("이메일이 올바르지 않습니다. @ 필요");
    else {
      alert("회원가입을 축하합니다.");
      //메세지 알림이전, Backend 컴퓨터에 있는 API(함수) 요청하기
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
