var ccg02 = ["フログランダー","ビーゾルA","ビルダーム","タラントリック","ポーンジャー","マニモガール","ペペンガール","ミヅハ","ジャガーアーム","イスチナ・バレット","サイコフォーミュラ","プリストルQ","ガナハウンド","アクイーア","シュトルバンガー","シエス","ルト・ミカヅチ","ソア・ラ・ニンバス","エレオノール","ネムリム","ベリルスキッド","メタトゥエル","ラグナバレット","グライノート","キャロ・バレンタイン","シャーナ","リンカー・リンクス","ペルセナキア","フラワリングガン","エアスラッシャー","カゼナギ","シールドガン","黒刀・影打","スネイルボムLGJ","しゅーごーっ！！","コストオーバー","食いしばり","ワンダードラッグ","マニモドール","クリアランス"]
var ccg01 = ["ゼロファイター","ソードウィング","キャノンボール","エルメ・S","ラズフラム","クリムローゼ","リリレイン","ウィンベル","月影もみじ","ヘリンガル","ビクトリー1","シャインバスター","エリザロッテ","メカジェッター","ガシマ甲式","メルフィ","マイティバイン","フラクタリスガール","ベルゼイラフガール","キュレーネ","ラゴウ","クレアモルテ","アルバトレオス","ラクラボロス","ブロードソード","ワイドビームガン","ロケットランチャー","アモーレランス","スウィフトジェットBS","WB-ソードビット","WB-ビームビット","WB-トーチカユニット","アサルト","神頼み","クロスカウンター","シェルトラップ","一機討ち","エクスチェンジ","スナイプ","バースト","メテオフォール","リペアパック","パーツサルベージャー","耐久設計図","スイッチシグナル","メタルラッシュ","スペアマガジン","リサイクルジャンク","パーツブレイカー","スクランブルホイッスル"]
var foil = ["シエス","ルト・ミカヅチ","ベリルスキッド","メタトゥエル","ラグナバレット","シャーナ","リンカー・リンクス","ペルセナキア","黒刀・影打","食いしばり"]
var allcards = ccg02.concat(ccg01).concat(foil)
var BT = ["メルフィ","エリザロッテ","フラクタリスガール","ベルゼイラフガール"]
var PR = ["ヘリンガル","月影もみじ","ビクトリー1","シャインバスター","高速充填","カッター","チェインアンカー","汎用設計図"]

$(document).on('click', '#open_box',function(){
    $('#output_cards').empty()
    var picklist = document.getElementById("output_cards")
    var openbox = []
    var openpack = []
    var ou_cards
    for(i=0;i<10;i++){
        openpack = open_pack()
        for(j=0;j<5;j++){
            openbox.push(openpack[j])
        }
    }
    openbox.sort()
    for(p=0;p<openbox.length;p++){
        console.log(openbox[p])
        $.when(
            ou_cards = pickcard(openbox[p])
        ).done(function(){
            picklist.insertAdjacentHTML('afterbegin',"<img class='deck card' id='"+i+"' src='"+ou_cards[0][3]+"'' alt='"+ou_cards[0][2]+"' draggable='true' ondragstart='drag(event)' />")
        })
    }

    var boxtoper = pickcard(BT[Math.floor( Math.random() * 4 )])
    var promotion = pickcard(PR[Math.floor( Math.random() * 8 )])

    picklist.insertAdjacentHTML('beforeend',"<img class='deck card' id='"+i+"' src='"+boxtoper[0][3]+"'' alt='"+boxtoper[0][2]+"' draggable='true' ondragstart='drag(event)' />")
    picklist.insertAdjacentHTML('beforeend',"<img class='deck card' id='"+i+"' src='"+promotion[0][3]+"'' alt='"+promotion[0][2]+"' draggable='true' ondragstart='drag(event)' />")
})

function open_pack(){
    var pack = []
    var max_01 = ccg01.length
    var max_02 = ccg02.length
    var max_al = allcards.length
    pack.push(ccg01[Math.floor( Math.random() * max_01 )])
    pack.push(ccg01[Math.floor( Math.random() * max_01 )])
    pack.push(ccg02[Math.floor( Math.random() * max_02 )])
    pack.push(ccg02[Math.floor( Math.random() * max_02 )])
    pack.push(allcards[Math.floor( Math.random() * max_al )])
    return pack;
}

function pickcard(search_word_box){
    return cards.filter(function(value){
        return (value[2].match(search_word_box))
    })
}

// ドラッグ開始時にデータをセット
function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }
  
  // ドラッグオーバー時にデフォルトの動作をキャンセル
  function allowDrop(event) {
    event.preventDefault();
  }
  
  // ドロップ時に要素を移動
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    const dropTarget = event.target;
  
    // ドラッグされた要素とドロップ先の要素を入れ替える
    dropTarget.parentNode.insertBefore(draggedElement, dropTarget);
  }
  