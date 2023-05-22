import { gql, useMutation } from "@apollo/client";

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
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables = $역할
        writer: "duck_w",
        title: "duck_t",
        contents: "duck_c",
      },
    });
    console.log(result);
  };
  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
