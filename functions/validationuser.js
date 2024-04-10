//  Se crea función para recuperar los valores de los campos del login, validar que los mismos no estén vacíos
//  Al pulsar el botón Ingresar se imprima en consola y se redirija a la página principal
function captform1(){
    var nam = document.getElementById("username").value;
    var correo = document.getElementById("mail").value;
    var contra = document.getElementById("pass").value;
        if (nam==""){
            alert("El Usuario es obligatorio completar");
            document.getElementById("username").focus();
        }else{
            if (correo==""){
                alert("El correo es obligatorio completar");
                document.getElementById("mail").focus();
            }else{
            if (contra==""){
                alert("Ingresar Contraseña");
                document.getElementById("pass").focus();
            }else{
                console.log(" " + nam + " " + correo);
                alert("Bienvenido de nuevo "+nam+" tenemos novedades para ti :)")
                // document.getElementById("username").value="";
                // document.getElementById("mail").value="";
                // document.getElementById("pass").value="";
                // document.getElementById("name").focus();
                location.replace("../page/principal.html")
            }
        }
    }  
}
