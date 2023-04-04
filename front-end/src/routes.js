// import Layout from 'views/Layout';
import Statistics from "views/Statistics";
import CreateWallet from "views/CreateWallet";
import TransactionsHistory from "views/TransactionsHistory";
import NotFound from "views/NotFound";
import SendCoins from "views/SendCoins";
import MiningCoins from "views/MiningCoins";

const routes = [
  {
    path: "/statistics",
    exact: true,
    auth: true,
    component: Statistics,
  },
  {
    path: "/send-coins",
    exact: true,
    auth: true,
    component: SendCoins,
  },
  {
    path: "/transactions-history",
    exact: true,
    auth: true,
    component: TransactionsHistory,
  },
  {
    path: "/create-wallet",
    exact: true,
    component: CreateWallet,
  },
  {
    path: "/mining",
    exact: true,
    component: MiningCoins,
  },
  {
    component: NotFound,
  },
];

export default routes;
