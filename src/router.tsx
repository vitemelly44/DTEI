import { QueryClient } from "@tanstack/react-query";
import { createBrowserHistory, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: createBrowserHistory({ base: "/DTEI" }),
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
