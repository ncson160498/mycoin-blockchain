import Statistics from "./views/Statistics";
import CreateWallet from "./views/CreateWallet";
import TransactionsHistory from "./views/TransactionHistory";
import NotFound from "./views/NotFound";
import SendCoins from "./views/SendCoins";
import MiningCoins from "./views/MiningCoins";

const routes = [
    {
        patch: "/statistics",
        exact: true,
        auth: true,
        component: Statistics,
    },
    {
        patch: "/send-coins",
        exact: true,    
        auth: true,
        component: SendCoins,
    },
    {
        patch: "/transactions-history",
        exact: true,
        auth: true,
        component: TransactionsHistory,
    },
    {
        patch: "/create-wallet",
        exact: true,
        component: CreateWallet,
    },
    {
        patch: "/mining",
        exact: true,
        component: MiningCoins,
    },
    {
        component: NotFound,
    },
    
];
export default routes;