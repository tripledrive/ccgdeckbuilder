var decks = [];
var search_cards = cards;

(function(){
	//初期表示
	var cardlist = document.getElementById("cardlist")
    var copy_decks = []
	for(i = 0; i < cards.length; i++){
		cardlist.insertAdjacentHTML('afterbegin',"<img class='list card' id='"+i+"' src='"+cards[i][3]+"'' alt='"+cards[i][2]+"' />")
	}
    copy_decks = JSON.stringify(window.localStorage.getItem(['decks']))
    //console.log(copy_decks)
    if(copy_decks !== 'null'){
        //console.log("decks isnt null")
    }
}());

$(document).on('click', ".list", function(){
	card_id = $(this).attr('id');
	decks.unshift(search_cards[card_id])
	reload_deck()
})

$(document).on('click', '.deck' ,function(){
	card_id = $(this).attr('id');
	decks.splice(card_id,1)
	reload_deck()
})

$(document).on('click', '#change_size' ,function(){
    var val = document.getElementById('change_size').value * 0.01
    document.getElementById('decklist').style.width = "calc(80vw * "+ val + ")"
    //document.getElementsByClassname('decklist').style.width = "calc(10vw * "+ val + ")"
})

$('#submit').on('click', function(){
	$.when(
		search_card()
	).done(function(){
		output_card()
	})
})

function reload_deck(){
	var decklist = document.getElementById("decklist")
	$.when(
		$('#decklist').empty()
	).done(function(){
		for(i = 0; i < decks.length; i++){
            decklist.insertAdjacentHTML('afterbegin',"<img class='deck card' id='"+i+"' src='"+decks[i][3]+"'' alt='"+decks[i][2]+"' />")
		}
	})
}

function output_card(){
	var cardlist = document.getElementById("cardlist")
	$.when(
		$('#cardlist').empty()
	).done(function(){
		for(i = 0; i < search_cards.length; i++){
			cardlist.insertAdjacentHTML('afterbegin',"<img class='list card' id='"+i+"' src='"+search_cards[i][3]+"'' alt='"+search_cards[i][2]+"' />")
		}
	})
}

function search_card(){
	search_cards = []
	var search_word = new RegExp(document.getElementById('cardname').value)
    search_cards = cards.filter(function(value){
        return (value[2].match(search_word))
    })
}

$("#output_deck").on('click', function(){
    console.log(decks)
    var deck_flag = true
    var count = {}
    if(decks.length != 40){
        swal('デッキ枚数が40枚ではありません')
        deck_flag = false
    }else{
        for (var i = 0; i < decks.length; i++) {
            var elm = decks[i];
            count[elm] = (count[elm] || 0) + 1;
            if(count[elm] > 3){
                swal('デッキ構築ルールを違反しています')
                deck_flag = false
                break;
            }
          }
    }
    if(deck_flag){
        share_deck()
    }
})

async function share_deck(){
    var path = 'deck.html'
    var query = ""
    for(i = 0; i < decks.length; i++){
        query += decks[i][3]
        query += '+'
    }
    //console.log(await deck_encode(query))
    window.open(path + '?list=' + await deck_encode(query))
}

async function deck_encode(message){
    var hash = btoa(encodeURIComponent(message))
    return hash
}