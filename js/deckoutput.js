var decks = [];

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
    }
}

