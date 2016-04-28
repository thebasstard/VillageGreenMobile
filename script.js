// popover au chargement de la page
	$('#page1').on('pageshow', function () {
	    setTimeout(function () {
	        $('#popup').popup('open', {
	            transition: 'pop'
	        });
	    }, 1000);
	});
//fin popover

//fonction récupération de recherche produit
$(document).ready(function(){

	$("#textbox1").on("input", function(){
			
			var mot = encodeURI($("#textbox1").val());
			console.log(mot);
			var donnees = "query=" + mot;
			var apiURL = "http://dl.bienvu.net/ludod/VillageGreenMobile/liste.php";

			$.ajax({
						url: apiURL,
						data: donnees,
						success:function (resultat){

							AfficheResult(resultat);
						},

						error:function (request,error){

							alert('Une erreur est survenue, saisissez un produit');
						}

			});
	});

		function AfficheResult(data)
		{
			console.log("Affichage liste ok");
			$('#liste').empty();
			$("#liste2").hide();
			$("#liste").show();

			for (var i=0; i< data.length; i++) 
			{
				var ligne = data[i];
				codeHTML = '<div data-id="'+ligne.ID_Produit+'" class="detail">';
				codeHTML += '<li class="list-group-item">';
				codeHTML += '<span class="badge">';
				codeHTML += '<span class="glyphicon glyphicon-menu-right">';
				codeHTML += '</span>';
				codeHTML += '</span>';
				codeHTML += '<h3>' + ligne.Ref_Fournisseur + '</h3>';
				codeHTML += '<p>' + ligne.Lib_C + '</p>';
				codeHTML += '<p>' + ligne.Lib_L + '<p>';
				codeHTML += '</li>';
				codeHTML += '</div>';
				$('#liste').append(codeHTML);
			}

				$('#liste').listview('refresh');
		}

			$('.detail').click(function()
			{
				$('#liste2').empty();
				$("#liste").hide();
				$("#liste2").show();
				var id = $(this).data("id");
				var donnees = "query=" + id;
				var apiURL = "http://dl.bienvu.net/ludod/VillageGreenMobile/liste.php";
				$.ajax
				({
	 				url: apiURL,
	 				data: donnees,
	 				success: function (resultat) 
	 				{
	 					AfficheResult2(resultat);
	 				},
	 				error: function (request,error) 
	 				{
	 					alert('Une erreur est survenue, vous devez saisir un texte');
	 				}
	 			});

				function AfficheResult2(data)
				{
					$("#catalogue").hide();
					$('#liste2').empty();
					var ligne = data[0];
					codeHTML = '<div data-id="'+id+'" class="detail">';
					codeHTML += '<h1 class="text-center">' + ligne.Ref_Fournisseur + '</h1></br>';
					codeHTML += '<h4 class="text-center">' + ligne.Lib_C + '</h4></br>';
					codeHTML += '<img id="imageproduit" src="images/' + Photo + '"/>'
					codeHTML += '</div>';
					$('#liste2').append(codeHTML);

					$("#boutonrecherche").click(function()
					{
						console.log("yop");
						$("#liste2").hide();
						$("#produits").show();
						$("#textbox1").val("");
						$("#liste1").show();
					});
					
						
						
				};	
				
			});
});

