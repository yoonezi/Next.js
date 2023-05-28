import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    #타입 적는 곳
    createBoard(writer: $writer, title: $title, contents: $contents) {
      #실제 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시하고, catch에 있는 내용이 실행됨.

      const result = await 나의함수({
        variables: {
          //variables = $역할
          writer: "duck_w",
          title: "duck_t",
          contents: "duck_c",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      // router.push("/05-05-dynamic-routing-board-mutation-moved/" + result.data.createBoard.number);
      router.push(
        `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };
  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
