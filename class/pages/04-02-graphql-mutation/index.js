import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "ezi_w", title: "ezi_t", contents: "ezi_c") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
