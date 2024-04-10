function createUser(){
    var nomb = document.getElementById("name").value;
    var correo = document.getElementById("mail").value;
    var edad = document.getElementById("age").value;
    var contra = document.getElementById("pass").value;
    var contraConfi = document.getElementById("passconfir").value;
    if (nomb==""){
        alert("Este campo es obligatorio llenar");
        document.getElementById("name").focus();
    }else{
        if (correo==""){
            alert("Este campo es obligatorio llenar");
            document.getElementById("mail").focus();
        }else{
            if(edad==""){
                alert("Este campo es obligatorio llenar");
                document.getElementById("age").focus();
            }else{
                if (contra==""){
                    alert("Debe crear una contraseña contraseña");
                    document.getElementById("pass").focus();
                }else{
                    if (contraConfi==""){
                        alert("Ingrese nuevamente su contraseña");
                        document.getElementById("passconfir").focus();
                    }else{
                        alert("Gracias "+nomb+" le enviaremos un corre a: "+correo+" para validar su Usuario!")
                        location.replace("../page/principal.html")
                    }
                }
            }
        }
    }
    // alert("Gracias "+nomb+" le enviaremos un corre a: "+correo+" para validar su Usuario!")
    // location.replace("../page/principal.html")
}


