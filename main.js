/*1．「var」は値を入れる箱(変数)を作るための文法。
　　　箱を作れば、値を入れたり取り出したりできる。
　　　動きを付ける対象(＝ボタン)をHTMLから取得し「botan」という名前(変数名)で扱う。
　　（以降、「botan」はボタンそのものと考える）
　　「.」は左側の要素を扱うためのもの。"～を"、"～の"と思えばOK。
*/
var botan = document.getElementById('btn');

    /*2．ボタンクリックで運勢をランダム表示するomikuji関数を作る。
    　　　{}の中がomikuji関数の処理。*/
    botan.onclick = function omikuji() {

        /*3．ランダムな数値を3パターン作成する*/
        var number = Math.ceil(Math.random() * 3);

        /*4．ボタンの表示テキストに3パターン数値を設定。
        画面には3パターンのうちどれかの数値が表示される*/
        botan.textContent = number;
    
        /*5．数値パターン(1・2・3)に運勢を当てはめる。
        　　　以下の{}の中に3パターン分の処理を書く。*/
        switch(number) {
            
            /*numberが1なら「大吉」と表示(1を大吉に上書き)*/
            case 1:
                botan.textContent = "大吉";
                break;
            /*numberが2なら「吉」と表示(2を吉に上書き)*/
            case 2:
                botan.textContent = "吉";
                break;

            /*numberが3なら「凶」と表示(3を凶に上書き)*/
            case 3:
                botan.textContent = "凶";
                break;
        } 
    };           