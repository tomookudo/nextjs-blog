import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }

  // Next.jsではAppコンポーネントを使用して全てのページを初期化するようになっています。 そのため、このコンポーネントを継承したクラスがあるファイル、_app.js(tsx) を作成することでデフォルトのAppコンポーネントを上書きできます。
  // つまり、 全ページで必要な処理をここに書くことができます。他にもAppコンポーネントでは以下のようなことができます
  
  // ページ間の共通レイアウトを持たせることができる
  // 共通のstateを持つことができる
  // グローバルなCSS(全ページ共通の)を定義できる
  // componentDidCatchを利用したカスタムエラー処理
  // 各Routeコンポーネントをラップするもの
  // ReduxのProvider設定をする