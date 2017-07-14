	//GK
	$("#addGk").on('click',function(){
		const name = $("#gkFirstName").val();
		const last = $("#gkLastName").val();
		const rating = $('#gkRating').val();
		const idp = $("#gkId").val();
		$.ajax({
			url :"users",
			method :"post",
			data :JSON.stringify({
				fname :name,
				lname :last,
				rating:rating,
				__id :idp
			}),
			contentType : "application/json",
			success : function(data){
				console.log(data);
				const objData= JSON.parse(data);				
			},
			error : function(data){
				console.log(data);
			}
		})
		const findid = $('#gkId').val();
		$.ajax({
			url : "/users/" + findid,
			method : "get",
			contentType : "application/json",
			success : function(data){
				console.log(data);
				const objData= JSON.parse(data);
				$('#gkp').text(objData.fname + " " + objData.lname);

			},
			error : function(data){
				console.log(data);
			}
		})

	});
		$('#deleteGk').on("click", function(){
		$.ajax({
			url : "/users/" + $('#gkId').val(),
			method : "DELETE",
			contentType : "application/json",
			success : function(data){
				console.log(data);
				$('#gkp').html("");
			},
			error : function(data){
				console.log(data);
			}
		})
	});
	//DF
		$("#addDf").on('click',function(){
		const name = $("#dfFirstName").val();
		const last = $("#dfLastName").val();
		const rating = $('#dfRating').val();
		const idp = $("#dfId").val();
		$.ajax({
			url :"users",
			method :"post",
			data :JSON.stringify({
				fname :name,
				lname :last,
				rating:rating,
				__id :idp
			}),
			contentType : "application/json",
			success : function(data){
				console.log(data);
				const objData= JSON.parse(data);				
			},
			error : function(data){
				console.log(data);
			}
		})
		//////
			const findid = $('#dfId').val();
		$.ajax({
			url : "/users/" + findid,
			method : "get",
			contentType : "application/json",
			success : function(data){
				console.log(data);
				const objData= JSON.parse(data);
				$('#dfp').text(objData.fname + " " + objData.lname);
			},
			error : function(data){
				console.log(data);
			}
		})

	});
			$('#deleteDf').on("click", function(){
		$.ajax({
			url : "/users/" + $('#dfId').val(),
			method : "DELETE",
			contentType : "application/json",
			success : function(data){
				console.log(data);
				$('#dfp').html("");
			},
			error : function(data){
				console.log(data);
			}
		})
	});

	//MD
	$("#addMd").on('click',function(){
		const name = $("#mdFirstName").val();
		const last = $("#mdLastName").val();
		const rating = $('#mdRating').val();
		const idp = $("#mdId").val();
		$.ajax({
			url :"users",
			method :"post",
			data :JSON.stringify({
				fname :name,
				lname :last,
				rating:rating,
				__id :idp
			}),
			contentType : "application/json",
			success : function(data){
				console.log(data);
				const objData= JSON.parse(data);				
			},
			error : function(data){
				console.log(data);
			}
		})
			const findid = $('#mdId').val();
		$.ajax({
			url : "/users/" + findid,
			method : "get",
			contentType : "application/json",
			success : function(data){
				console.log(data);
				const objData= JSON.parse(data);
				$('#mdp').text(objData.fname + " " + objData.lname);
			},
			error : function(data){
				console.log(data);
			}
		})

	});
			$('#deleteMd').on("click", function(){
		$.ajax({
			url : "/users/" + $('#mdId').val(),
			method : "DELETE",
			contentType : "application/json",
			success : function(data){
				console.log(data);
				$('#mdp').html("");
			},
			error : function(data){
				console.log(data);
			}
		})
	});
	
	//FW	
	$("#addFw").on('click',function(){
		const name = $("#fwFirstName").val();
		const last = $("#fwLastName").val();
		const rating = $('#fwRating').val();
		const idp = $("#fwId").val();
		$.ajax({
			url :"users",
			method :"post",
			data :JSON.stringify({
				fname :name,
				lname :last,
				rating:rating,
				__id :idp
			}),
			contentType : "application/json",
			success : function(data){
				console.log(data);
				const objData= JSON.parse(data);				
			},
			error : function(data){
				console.log(data);
			}
		})
			const findid = $('#fwId').val();
		$.ajax({
			url : "/users/" + findid,
			method : "get",
			contentType : "application/json",
			success : function(data){
				console.log(data);
				const objData= JSON.parse(data);
				$('#fwp').text(objData.fname + " " + objData.lname);
			},
			error : function(data){
				console.log(data);
			}
		})

	});
	$('#deleteFw').on("click", function(){
		$.ajax({
			url : "/users/" + $('#fwId').val(),
			method : "DELETE",
			contentType : "application/json",
			success : function(data){
				console.log(data);
				$('#fwp').html("");
			},
			error : function(data){
				console.log(data);
			}
		})
	});
		