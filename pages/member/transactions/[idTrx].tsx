import jwtDecode from "jwt-decode";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import {
  HistoryTransactionTypes,
  JWTPayloadTypes,
  UserTypes,
} from "../../../services/data-types";
import { getTransactionsDetail } from "../../../services/member";

interface transactionsDetailProps {
  transactionsDetail: HistoryTransactionTypes;
}

export default function TransactionsDetail(props: transactionsDetailProps) {
  const { transactionsDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar active="Transactions" />
      <TransactionDetailContent data={transactionsDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userPayload: UserTypes = payload.player;
  const img = process.env.NEXT_PUBLIC_IMG;
  userPayload.avatar = `${img}/${userPayload.avatar}`;
  const response = await getTransactionsDetail(idTrx, jwtToken);
  return {
    props: {
      transactionsDetail: response.data,
    },
  };
}
