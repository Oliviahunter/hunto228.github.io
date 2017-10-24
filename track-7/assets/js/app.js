var time = 15000;

update_wallet();

$('.item').click(function() {
	var item   = $(this).data('item'),
		amount = $(this).data('amount');

charge_card(amount, item);
});




function charge_card(amount, item) {
	if (time >= amount) {
	time = time - amount;
	update_wallet();
	$('.closet-items').append(item + ', ');
} else{
alert('out of time.');
	}
}

function update_wallet() {
$('.time').html(time);

}

