import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #타입 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      #실제 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables = $역할
        seller: "ezi",
        createProductInput: {
          name: "티셔츠",
          detail: "검은색",
          price: 3000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
