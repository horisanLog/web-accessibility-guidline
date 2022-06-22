import React, { memo } from "react";

export const LinkPage: React.FC = memo(() => {
  return (
    <>
      <main>
        <h1>こんにちは</h1>
        <nav role="navigation">
          <h2>メニュー</h2>
          <ul>
            <li>
              <a href="#content">コンテンツ一覧</a>
            </li>
            <li>
              <a href="#tag">タグ一覧</a>
            </li>
            <li>
              <a href="#footer">サイト情報</a>
            </li>
          </ul>
        </nav>
        <aside id="content" aria-label="コンテンツ一覧">
          <h2>コンテンツ一覧</h2>
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ul>
        </aside>
        <aside id="tag" aria-label="タグ一覧">
          <h2>タグ一覧</h2>
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ul>
        </aside>
      </main>
      <footer id="footer" role="contentinfo">
        <h2>サイト情報</h2>
      </footer>
    </>
  );
});
