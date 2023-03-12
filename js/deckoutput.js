var decks = [];
var decks_perf = [];

async function get_card(keyword){
    var get_cards = []
    get_cards = cards.filter(function(value){
        if(keyword == value[3]) return value[3]
    })
    decks_perf.unshift(get_cards)
    console.log(decks_perf)
}

(async function(){
		await deckload()
}());

async function deckload(){
    var param = location.search.replace('?list=','')
    var param_decode = decodeURIComponent(atob(param))
    var decklist = document.getElementById("output_decklist")
    decks = param_decode.split("+")
    console.log(decks)
    for(i = 0; i < decks.length-1; i++){
        decklist.insertAdjacentHTML('afterbegin',"<img class='deck card' id='"+i+"' src='"+decks[i]+"' alt='' />")
        await get_card(decks[i])
    }
}

$(document).on('click', '#copy_deck' ,function(){
    window.localStorage.clear()
    if (window.localStorage) {
        $.when(function(){
            let json = JSON.stringify(decks_perf, undefined, 1);
            localStorage.setItem('decks', json);
        }).done(function(){
            location.href = './index.html'
        })
    }else{
        alert('お使いのブラウザはこの機能に対応してないみたいです！ごめんね。。')
    }
})
