"use client";

import dynamic from "next/dynamic";
import Loading from "../(main)/courses/loading";

const App = dynamic(() => import("./app"), {
  ssr: false,
  loading: () => <Loading />,
});

export const AdminClient = () => {

  return (
    <App />
  );
};
