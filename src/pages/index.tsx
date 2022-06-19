import React, { memo } from "react";

export const TopPage: React.FC = memo(() => {
  return (
    <>
      <main>
        <h1>TOP</h1>
        <div>こんにちは</div>
        <img src="logo192.png" alt="reactのロゴ" />
      </main>
    </>
  );
});
