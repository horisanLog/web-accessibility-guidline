import React, { memo } from "react";

export const TopPage: React.FC = memo(() => {

  return (
    <>
      {/* ドキュメントにはmainランドマークが1つ含まれていなければなりません */}
      <main>
        <h1>TOP</h1>
        <div>こんにちは</div>
        {/* 画像には代替テキストがなければなりません */}
        <img src="logo192.png" alt="reactのロゴ" />
        {/* 隣接領域とのコントラスト比の確保 */}
        <div style={{ backgroundColor: "#F7F5F5", color: "#2864F0" }}>
          こんにちは
        </div>
      </main>
    </>
  );
});
