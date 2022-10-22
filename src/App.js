import "./styles.css";

export default function App() {
  /*
  splice関数
  要素を削除、置換、追加できる
  引数1: 配列を変更する先頭の位置
  引数2: 配列の start の位置から取り除く古い要素の個数
  引数3: 配列に追加する要素で、start から始まります
  返り値: 取り除かれた要素
  */
  const items = ["item1", "item2", "item3"];

  // item1とitem2を入れ替える
  const remove = items.splice(1, 1); // item2を削除
  console.log(remove);
  items.splice(0, 0, remove[0]); // item2を0番目に追加する
  console.log(items); // ["item2", "item1", "item3"]

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
