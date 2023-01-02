var cards = [
    ["オペレーション","陸","剛力の咆哮","https://pbs.twimg.com/media/FjfalJ7UAAAX2ra?format=jpg&name=large"],
    ["オペレーション","空","勇気の体現","https://pbs.twimg.com/media/Fjfalj9UYAIHl3Q?format=jpg&name=large"],
    ["オペレーション","砲","英知の威光","https://pbs.twimg.com/media/FjfamTHVIAAqm0Z?format=jpg&name=large"],
    ["アイテム","無","汎用設計図","https://pbs.twimg.com/media/FjfadGWVUAA0eZH?format=jpg&name=large"],
    ["アイテム","無","耐久設計図","https://pbs.twimg.com/media/FjfadxXVQAAr9Ua?format=jpg&name=large"],
    ["ロボ","空","コハル・アヤカシ","https://pbs.twimg.com/media/FjfaS6PVsAEJEZx?format=jpg&name=large"],
    ["ロボ","砲","ホムラ・イサミネ","https://pbs.twimg.com/media/FjfaTTbVQAAL3eZ?format=jpg&name=large"],
    ["ロボ","陸","アイヴィス","https://pbs.twimg.com/media/FjfaG_-UcAA7O-f?format=jpg&name=large"],
    ["ロボ","空","クレアモルテ","https://pbs.twimg.com/media/FjfaHvBVsAAeqSL?format=jpg&name=large"],
    ["パーツ","陸","WB-ソードビット","https://pbs.twimg.com/media/FjfU4hhVsAAQWtt?format=jpg&name=large"],
    ["パーツ","空","WB-ビームビット","https://pbs.twimg.com/media/FjfU49MVIAE6Uo2?format=jpg&name=large"],
    ["パーツ","砲","WB-トーチカユニット","https://pbs.twimg.com/media/FjfU5hsUoAEzHuI?format=jpg&name=large"],
    ["パーツ","補","WB-リペアビット","https://pbs.twimg.com/media/FjfU5_jUYAAVtnQ?format=jpg&name=large"],
    ["アイテム","無","パーツブレイカー","https://pbs.twimg.com/media/FjfWAbFUUAIgZBW?format=jpg&name=large"],
    ["アイテム","無","スペアマガジン","https://pbs.twimg.com/media/FjfWBTvVQAAgoiL?format=jpg&name=large"],
    ["オペレーション","空","掃除屋と料理人","https://pbs.twimg.com/media/FjfVJ36VEAASNSf?format=jpg&name=large"],
    ["オペレーション","無","高速充填","https://pbs.twimg.com/media/FjfVKXJUYAAN6rL?format=jpg&name=large"],
    ["ロボ","補","ベリトリア","https://pbs.twimg.com/media/FjfUsynVIAYxRGN?format=jpg&name=large"],
    ["ロボ","陸","キュール","https://pbs.twimg.com/media/Fi-2r0MVEAEam5q?format=jpg&name=large"],
    ["ロボ","砲","リーゼル・ツヴァイク","https://pbs.twimg.com/media/Fi-2r0MVEAEam5q?format=jpg&name=large"],
    ["ロボ","補","エイミィ","https://pbs.twimg.com/media/Fi-2R6mUAAEl4BV?format=jpg&name=large"],
    ["ロボ","砲","セリュー・ブランシュ","https://pbs.twimg.com/media/Fi-2SZcUUAAJSkn?format=jpg&name=large"],
    ["オペレーション","無","エクスチェンジ","https://pbs.twimg.com/media/Fi-17q9VsAAmfjX?format=jpg&name=large"],
    ["オペレーション","砲","スナイプ","https://pbs.twimg.com/media/Fi-18FLUoAMPQtd?format=jpg&name=large"],
    ["アイテム","無","スイッチシグナル","https://pbs.twimg.com/media/Fi-1mo7UoAAbjqW?format=jpg&name=large"],
    ["アイテム","無","メタルラッシュ","https://pbs.twimg.com/media/Fi-1rbZVQAARfQI?format=jpg&name=large"],
    ["パーツ","無","バイパーシールド","https://pbs.twimg.com/media/Fi-0Wv_VUAArm_k?format=jpg&name=large"],
    ["パーツ","無","スパイクシールド","https://pbs.twimg.com/media/Fi-0XQgUUAA-w6t?format=jpg&name=large"],
    ["パーツ","無","ハートシールド","https://pbs.twimg.com/media/Fi-0YMIVQAAX2PB?format=jpg&name=large"],
    ["ロボ","空","フラクタリスガール","https://pbs.twimg.com/media/Fi-uso0UUAAI1kP?format=jpg&name=large"],
    ["ロボ","砲","ベルゼイラフガール","https://pbs.twimg.com/media/Fi-us1uUUAAABBK?format=jpg&name=large"],
    ["ロボ","空","アルシー・リベット","https://pbs.twimg.com/media/FizEVaNVUAE77Wm?format=jpg&name=medium"],
    ["ロボ","砲","モニカ・ゴールド","https://pbs.twimg.com/media/FizEVaNVUAE77Wm?format=jpg&name=medium"],
    ["オペレーション","補","シェルトラップ","https://pbs.twimg.com/media/FizEYJNUUAAKLNh?format=jpg&name=medium"],
    ["オペレーション","補","スロウトラップ","https://pbs.twimg.com/media/FizEYJKUcAACN7U?format=jpg&name=medium"],
    ["ロボ","補","メルフィ","https://pbs.twimg.com/media/FizEbToUoAAEsxG?format=jpg&name=medium"],
    ["ロボ","補","ペポ・プッチ","https://pbs.twimg.com/media/FizEbTiUYAAVzcl?format=jpg&name=medium"],
    ["アイテム","無","リサイクルジャンク","https://pbs.twimg.com/media/FizESwFVQAALIGw?format=jpg&name=medium"],
    ["アイテム","無","ダメージリムーバー","https://pbs.twimg.com/media/FizESwAUYAAoC8Z?format=jpg&name=medium"],
    ["パーツ","無","サンダーシューター","https://pbs.twimg.com/media/FiZ6cr2UoAAkLQU?format=jpg&name=large"],
    ["パーツ","無","ショックバズーカ","https://pbs.twimg.com/media/FiZ6dYyUUAAlhAW?format=jpg&name=large"],
    ["ロボ","陸","エリザロッテ","https://pbs.twimg.com/media/FiA1oBGaEAAKMI1?format=jpg&name=large"],
    ["ロボ","空","アンリエール","https://pbs.twimg.com/media/FiA1oaAVQAM58aG?format=jpg&name=large"],
    ["オペレーション","陸","クロスカウンター","https://pbs.twimg.com/media/FiA09-0UcAMutDL?format=jpg&name=large"],
    ["オペレーション","無","一機討ち","https://pbs.twimg.com/media/FiA0-bXaEAEKLYY?format=jpg&name=large"],
    ["ロボ","陸","月影もみじ","https://pbs.twimg.com/media/FiA0MmQUoAADyWl?format=jpg&name=large"],
    ["ロボ","陸","桜華","https://pbs.twimg.com/media/FiA0NBdVEAE1W3w?format=jpg&name=large"],
    ["ロボ","陸","ラズフラム","https://pbs.twimg.com/media/FiAz9b2VUAAV5X9?format=jpg&name=large"],
    ["ロボ","空","クリムローゼ","https://pbs.twimg.com/media/FiAz-DXacAIJ0ZP?format=jpg&name=large"],
    ["ロボ","砲","リリレイン","https://pbs.twimg.com/media/FiAz-jyaMAAJdX6?format=jpg&name=large"],
    ["ロボ","補","ウィンベル","https://pbs.twimg.com/media/FiAz_A7UYAA79xF?format=jpg&name=large"],
    ["アイテム","無","スクランブルホイッスル","https://pbs.twimg.com/media/FiAzzrrUAAAg04Z?format=jpg&name=large"],
    ["アイテム","無","チェインアンカー","https://pbs.twimg.com/media/FiAz0DjUUAUYpZJ?format=jpg&name=large"],
    ["パーツ","無","クイントバレット","https://pbs.twimg.com/media/FiAzq14VsAET-2s?format=jpg&name=large"],
    ["オペレーション","無","ジャスティース！","https://pbs.twimg.com/media/FiAzdcPUYAA8Cyl?format=jpg&name=large"],
    ["オペレーション","空","メテオフォール","https://pbs.twimg.com/media/FiAzd9HaEAAimVz?format=jpg&name=large"],
    ["ロボ","補","キュレーネ","https://pbs.twimg.com/media/FiAyfDcVQAAWxxf?format=jpg&name=large"],
    ["ロボ","補","ラクラボロス","https://pbs.twimg.com/media/FiAyfuLVQAA8124?format=jpg&name=large"],
    ["ロボ","補","トリンティア","https://pbs.twimg.com/media/FiAygPBVIAAVFqZ?format=jpg&name=large"],
    ["ロボ","砲","デストラクト","https://pbs.twimg.com/media/FiAyQmgVEAAPay0?format=jpg&name=large"],
    ["ロボ","砲","アルバトレオス","https://pbs.twimg.com/media/FiAyRInaUAArwB2?format=jpg&name=large"],
    ["ロボ","空","シェイデン","https://pbs.twimg.com/media/FhZA0gZVQAAtHU5?format=jpg&name=large"],
    ["ロボ","空","イルグリプス","https://pbs.twimg.com/media/FhZA07cVIAEG_RO?format=jpg&name=large"],
    ["アイテム","無","陸戦設計図","https://pbs.twimg.com/media/FhZAhL_UcAAqT7K?format=jpg&name=large"],
    ["アイテム","無","空戦設計図","https://pbs.twimg.com/media/FhZAhgtUUAAgNqh?format=jpg&name=large"],
    ["アイテム","無","砲戦設計図","https://pbs.twimg.com/media/FhZAiNLUUAAGJud?format=jpg&name=large"],
    ["アイテム","無","補助設計図","https://pbs.twimg.com/media/FhZAi0xVUAATfXX?format=jpg&name=large"],
    ["オペレーション","陸","オーバークロック","https://pbs.twimg.com/media/FhZAV1UVQAANXnL?format=jpg&name=large"],
    ["オペレーション","無","エスケープゲート","https://pbs.twimg.com/media/FhZAW9gVIAAUEM6?format=jpg&name=large"],
    ["パーツ","陸","メタルスレイヤー","https://pbs.twimg.com/media/FhX6tPoUAAE7K9f?format=jpg&name=large"],
    ["パーツ","空","ビームガトリング","https://pbs.twimg.com/media/FhX6uCXUAAAMpMv?format=jpg&name=large"],
    ["パーツ","砲","リニアキャノン","https://pbs.twimg.com/media/FhX6u-WVEAA27W6?format=jpg&name=large"],
    ["パーツ","補","オネストシールドα","https://pbs.twimg.com/media/FhX6vxiVIAQ1Qau?format=jpg&name=large"],
    ["ロボ","陸","ダークレヴナント","https://pbs.twimg.com/media/FhX6b7NUUAElCng?format=jpg&name=large"],
    ["ロボ","陸","ラゴウ","https://pbs.twimg.com/media/FhX6cXIVEAIO8NA?format=jpg&name=large"],
    ["ロボ","補","アーテ・メイド","https://pbs.twimg.com/media/FhX6Ps3VEAIua9-?format=jpg&name=large"],
    ["ロボ","補","ユネッサ","https://pbs.twimg.com/media/FhX6QG2VQAEv61-?format=jpg&name=large"],
    ["ロボ","砲","ガシマ甲式","https://pbs.twimg.com/media/FhX5-DmUYAILO-m?format=jpg&name=large"],
    ["ロボ","砲","サジタルマクシス","https://pbs.twimg.com/media/FhX5-8wUYAAhrjk?format=jpg&name=large"],
    ["オペレーション","無","神頼み","https://pbs.twimg.com/media/FgaAB4-UAAAlOPz?format=jpg&name=large"],
    ["オペレーション","補","ドジっ子ユウカ","https://pbs.twimg.com/media/FgaACUxUUAAv4zw?format=jpg&name=large"],
    ["アイテム","無","ENサルベージャー","https://pbs.twimg.com/media/FgZ_4jfVsAILWAC?format=jpg&name=large"],
    ["アイテム","無","パーツサルベージャー","https://pbs.twimg.com/media/FgZ_4_jUAAAwZCB?format=jpg&name=large"],
    ["パーツ","陸","ブロードソード","https://pbs.twimg.com/media/FgZ_p4-VsAA5pe2?format=jpg&name=large"],
    ["パーツ","空","ワイドビームガン","https://pbs.twimg.com/media/FgZ_tjKUAAACOXx?format=jpg&name=large"],
    ["パーツ","砲","ロケットランチャー","https://pbs.twimg.com/media/FgZ_uCjUoAAuCxQ?format=jpg&name=large"],
    ["パーツ","補","アモーレランス","https://pbs.twimg.com/media/FgZ_udJVQAI669E?format=jpg&name=large"],
    ["ロボ","空","メカジェッター","https://pbs.twimg.com/media/FgZ-Ge1UoAAY7D4?format=jpg&name=large"],
    ["ロボ","空","ゴースレイダー","https://pbs.twimg.com/media/FgZ-G4FUYAAZ5mS?format=jpg&name=large"],
    ["ロボ","陸","ミカドマックス","https://pbs.twimg.com/media/FgZyGZLUAAEK9z-?format=jpg&name=large"],
    ["ロボ","陸","マイティバイン","https://pbs.twimg.com/media/FgZyG2dVIAA_3Ed?format=jpg&name=large"],
    ["オペレーション","陸","バースト","https://pbs.twimg.com/media/FgZo7qAaAAA6152?format=jpg&name=large"],
    ["オペレーション","空","デフレクト","https://pbs.twimg.com/media/FgZo8D6aEAA6yqF?format=jpg&name=large"],
    ["オペレーション","補","エルメ・S","https://pbs.twimg.com/media/FgZodDAacAAgGC9?format=jpg&name=large"],
    ["オペレーション","補","シャインバスター","https://pbs.twimg.com/media/FgZodcAacAAIYmJ?format=jpg&name=large"],
    ["アイテム","無","リペアパック","https://pbs.twimg.com/media/FgZnGwmUcAA-i58?format=jpg&name=large"],
    ["アイテム","無","リペアパックB","https://pbs.twimg.com/media/FgZnHnqUcAAvCXB?format=jpg&name=large"],
    ["パーツ","無","カッター","https://pbs.twimg.com/media/FgZmSo7UAAA1pA3?format=jpg&name=large"],
    ["パーツ","無","スウィフトジェットBS","https://pbs.twimg.com/media/FgZmTvwVEAAafkj?format=jpg&name=large"],
    ["ロボ","砲","キャノンボール","https://pbs.twimg.com/media/FgZl6CDUAAEU4pE?format=jpg&name=large"],
    ["ロボ","砲","ビクトリー1","https://pbs.twimg.com/media/FgZl9FgVsAEIl1z?format=jpg&name=large"],
    ["オペレーション","陸","アサルト","https://pbs.twimg.com/media/FgZjpy8UoAAd-es?format=jpg&name=large"],
    ["オペレーション","補","ジャミング","https://pbs.twimg.com/media/FgZjqP9VQAEAmRQ?format=jpg&name=large"],
    ["ロボ","空","ソードウィング","https://pbs.twimg.com/media/FgZjAFPUUAAHgun?format=jpg&name=large"],
    ["ロボ","空","へリンガル","https://pbs.twimg.com/media/FgZjArIUAAIVtBP?format=jpg&name=large"],
    ["ロボ","陸","ゼロファイター","https://pbs.twimg.com/media/FgZivFpVQAERFxc?format=jpg&name=large"],
    ["ロボ","陸","ゼロセイバー","https://pbs.twimg.com/media/FgZiv9gUAAA_bAf?format=jpg&name=large"]
];

var decks = [];
var search_cards = [];

(function(){
	//初期表示
	var cardlist = document.getElementById("cardlist")
	for(i = 0; i < cards.length; i++){
		cardlist.insertAdjacentHTML('afterbegin',"<img class='list card' id='"+i+"' src='"+cards[i][3]+"'' alt='"+cards[i][2]+"' />")
	}
}());

function reload_deck(){
	var decklist = document.getElementById("decklist")
	$.when(
		$('#decklist').empty()
	).done(function(){
			for(i = 0; i < decks.length; i++){	decklist.insertAdjacentHTML('afterbegin',"<img class='deck card' id='"+i+"' src='"+decks[i][3]+"'' alt='"+decks[i][2]+"' />")
		}
	})
}

$(".list").on('click', function(){
	card_id = $(this).attr('id');
	decks.push(cards[card_id])
	reload_deck()
})

$(".deck").on('click', function(){
	card_id = $(this).attr('id');
	console.log(card_id)
	decks.splice(card_id,1)
	reload_deck()
})

function output_card(){
	var cardlist = document.getElementById("cardlist")
	$.when(
		$('#cardlist').empty()
	).done(function(){
		for(i = 0; i < search_cards.length; i++){
			cardlist.insertAdjacentHTML('afterbegin',"<img class='deck card' id='"+i+"' src='"+search_cards[i][3]+"'' alt='"+search_cards[i][2]+"' />")
		}
	})
}

function reset_card(){
	var cardlist = document.getElementById("cardlist")
	$.when(
		$('#cardlist').empty()
	).done(function(){
		for(i = 0; i < cards.length; i++){
			cardlist.insertAdjacentHTML('afterbegin',"<img class='deck card' id='"+i+"' src='"+search_cards[i][3]+"'' alt='"+search_cards[i][2]+"' />")
		}
	})
}

function search_card(){
	search_cards = []
	var search_word = document.getElementById('cardname').value
	var type_rand = document.getElementById('type_rand').value
	var type_air = document.getElementById('type_air').value
	var type_cannon = document.getElementById('type_cannon').value
	var type_support = document.getElementById('type_support').value
	var type_none = document.getElementById('type_none').value
	
}

$('#reset').on('click', function(){
	reset_card()
})

$('#submit').on('click', function(){
	$.when(
		search_card()
	).done(function(){
		output_card()
	})
})

