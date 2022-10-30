"use client";

import Hero from "../../../components/Hero";

export default function IssueErrorPage({ error }) {
  return (
    <div className="flex justify-center items-center">
      <Hero intro="Error" text={error.message} />
    </div>
  );
}
