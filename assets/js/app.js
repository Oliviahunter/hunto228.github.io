var cash = 10000;

$('.cash').html(cash);

$('.item').click(function() {
	console.log($(this));

});




function charge_card(amount) {
	if (cash >= amount) {
	cash = cash - amount;
	console.log(cash);
} else{
console.log('not enough money.');
	}
}



