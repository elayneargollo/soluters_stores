"use client";

import { signOut } from "next-auth/react";
import React from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  React.useEffect(() => {
    if(error.message.includes('status code 401'))
      signOut();
  });

  return (
    <div className="flex flex-col p-4 gap-4 justify-center items-center">
      <h2 className="text-2xl">Algo deu errado {"=("}</h2>
      <p>Faça o login e tente novamente</p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={reset}
      >
        Tente novamente
      </button>
    </div>
  );
};

export default ErrorPage;
