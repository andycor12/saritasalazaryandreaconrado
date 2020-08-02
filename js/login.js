function obtenerdatos(){
    var listar=JSON.parse(localStorage.getItem('lista'));
    if (listar==null){
        listar=
        [
        ['1','admin','','andy@gmail.com','admin','1999-04-15','Administrador'],
        ['2','sarita','salazar','sarita@gmail.com','123','2000-05-25','user']
        ]
    
    } 
    return listar;
    
    }
    
    function validarroles(puser,pcontraseña){
        var listar=obtenerdatos();
        var bAcceso=false;
        for (var i=0;i<listar.length;i++){
            if(puser==listar[i][1] && pcontraseña==listar[i][4]){
                bAcceso=true;
                localStorage.setItem('usuarioActivo',listar[i][1]+''+listar[i][2]);
                localStorage.setItem('rolactivo',listar[i][6]);
              
                    localStorage.removeItem(listar[i][1])
                    localStorage.removeItem(listar[i][2])
                    localStorage.removeItem(listar[i][6]);
                       
                
            }
        }
    return bAcceso;
    }