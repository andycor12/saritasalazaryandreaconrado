document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);

function iniciarSesion(){
    var sCorreo='';
    var sPass= '';
    var bAcceso =false;
    sCorreo=document.querySelector('#txtcorrreo').value;
    sPass=document.querySelector('#txtcontraseña').value;
    bAcceso=validarroles(sCorreo,sPass);
  

  if (bAcceso==true){
  	ingresar();
  }
}

function ingresar(){
	var rol = localStorage.getItem('rolactivo');
	switch(rol){
         case 'Administrador':
          window.location.href='menu-login.html';
          alert('bienvenido administrador');
             break;

             case 'user':
               alert('bienvenido usted es un usuario especial');
                window.location.href='menu-login.html';
              
                   break;
                   default:
                   window.location.href='index.html';

                   break;

	}
}