
$('#submit').click(function(){

   let login= $('#login').val(),
       password = $('#password').val();

  console.log(login + password)

   if (login ==='admin' && password ==='123') {
       alert('success');
   } else{
       alert('error');
   }

});


