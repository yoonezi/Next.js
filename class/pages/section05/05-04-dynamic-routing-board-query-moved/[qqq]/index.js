// import { gql } from "apollo-boost";
// import { useQuery } from "react-apollo";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.qqq) },
  });
  console.log(data);

  return (
    <>
      {/* 데이터가 있으면 그리고 없으면 그리지 마 */}
      {/* 먼저, 정적인 부분을 보여주고 그 다음 데이터가 들어오면 {data.fetchBoard.~}부분을 그려준다, */}
      <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>
      {/* data?. : optional chaiging */}
      <div>작성자 : {data && data.fetchBoard?.writer} </div>
      <div>제목 : {data?.fetchBoard?.title} </div>
      <div>내용 : {data ? data.fetchBoard?.contents : "loding .."} </div>
    </>
  );
}
