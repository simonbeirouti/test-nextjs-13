"use client";
import { useEffect } from "react";
import Hero from "../../../components/Hero";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center">
      <Hero intro="Error" text={error.message} />
      <div>
        <button
          className=" text-black text-center block px-3 py-2 text-base font-medium bg-gray-100 border rounded-xl hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          onClick={() => reset()}
        >
          Reset error
        </button>
      </div>
    </div>
  );
}
