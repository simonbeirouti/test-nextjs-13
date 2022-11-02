"use client";
import { useEffect } from "react";
import Hero from "../../../components/utilities/Hero";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="flex justify-center items-center">
        <Hero intro="Error" text={error.message} />
      </div>
    </>
  );
}
