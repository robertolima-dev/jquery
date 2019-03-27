$(document).ready(function() {


	//Recuperando e manipulando atributos
	$('img').attr('src', 'esfera_2.png');

	//$('div').attr('style', 'background-color: blue; width: 200px; height: 200px;');

	//$('input').attr('value', 'Eu era um input!');

	//Recuperando e manipulando conteudo
	$('#div1').html('<b>Eu sou o valor novo</b>'); //retorna o html selecionado e substitui o conteudo

	$('#div2').text('<b>Eu sou o valor novo</b>'); //retorna todo o conteudo ecrito e substirui o conteudo!

	//Recuperando e manipulando valor
	$('#nome').val('Roberto Lima');

	$('#origem').val('2');

	$('.sexo:checked').val(); //recupera o valor selecionado (apenas uma unica seleção)

	$.each($('.interesse:checked'), (indice, valor) => { // each recupera mais de um valor selecionado!
		console.log(indice, valor.value);
	});

	//inserindo e removendo elementos
	$('#lista1').append('<li>Item 4</li>'); //append -> final / prepend -> inicio

	$('#lista2').before('<p>Sou um paragrafo</p>'); //before -> antes do elemento html / after -> depois do ...

	$('#linha').after('<p>Sou um paragrafo depois da linha!!!</p>');

	$('#linha').remove(); //remove o conteudo selecionado!

	//navegando entre elementos 
	$('.secao1').parent(); //selecionar elementos parentes

	$('.item').closest('#topo'); //selecionar elementos pais -> podendo estar acima em mais de um nivel!

	$('.item').closest('ul');

	$('#topo').find('.item'); //seleciona elementos filhos!

	//manipulando CSS
	//$('#topo1').css('background-color', '#155661').css('margin', '0px').css('padding', '10px 20px 10px 20px');

	//outra forma de escrita -> objeto literal!
	$('#topo1').css({'background-color': '#155661', 'margin': '0px', 'padding': '10px 20px 10px 20px'});

	$('body').css('margin', '0px');

	$('h1').css('color', 'white').css('margin', '0px');

	$('input').addClass('campo padrao');

	$('textarea').addClass('campo erro');

	console.log($('textarea').hasClass('padrao')); //verifica se existe uma classe -> retorna true ou false

	$('textarea').removeClass('erro').addClass('padrao');

	console.log($('textarea').hasClass('padrao')); //verifica se existe uma classe -> retorna true ou false



});