import * as trpcNext from "@trpc/server/adapters/next";
import {appRouter} from "../../../backend/router";

const AppRouterHandler = trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
})

export default AppRouterHandler