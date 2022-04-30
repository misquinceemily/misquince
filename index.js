var btnConfirm = document.getElementById("modalUsu");
var btnRegis = document.getElementById("cntPerson");
var inputInvitao = document.getElementById("floatingInputValue");

inputInvitao.addEventListener("change", () => {
  if (inputInvitao.innerHTML == " ") {
    document.getElementById("btnsubmit").disabled = true;
  } else {
    document.getElementById("btnsubmit").disabled = false;
  }
});
let cntCuadros = 0;
btnRegis.addEventListener("click", () => {
  let data = parseInt(document.getElementById("cntPersonas").value);
  if(cntCuadros >= 5){
    swal("Ups!", "No puedes agregar mas invitados", "error");
    document.getElementById("cntPersonas").innerHTML = "";
    document.getElementById("cntPersonas").value = "";
  }else{
    if(data == 0 || data < 0 || document.getElementById("cntPersonas").value == ''){
      swal("Aviso", "Agrega mas invitados", "warning");
    }else{
      if(data <= 5){
        
        let padre = document.getElementById("bodyCard");
        let modalUsu = document.getElementById("camposAdd");
        let fragment = document.createDocumentFragment();
      
        let i = 1,
          num = 0,
          aux = 1;
      
        if (!!document.querySelector(".idInvitado")) {
      
          var valor =
            document.querySelectorAll(".idInvitado")[
              document.querySelectorAll(".idInvitado").length - 1
            ].innerHTML;
          num = parseInt(valor.split(" ")[1]);
          i = num;
          aux = num;
        }
        if((num+data)>5){
          swal("Ups!","Te estas pasando de la cantidad maxima de invitados", "error");
        }else{
          let n = num+data;
          if(data == 1){
            if(cntCuadros == 1) n++;
          }
          for (i; i < n; i++) {
            let clone = modalUsu.content.cloneNode(true);
            clone.querySelector(".idInvitado").innerHTML = "Invitado " + ++aux;
            fragment.appendChild(clone);
          }
          cntCuadros+=data;
          padre.appendChild(fragment);
        }
        
      }else{
        swal("Ups!", "Has pasado la maxima cantidad de invitados", "error");
        document.getElementById("cntPersonas").innerHTML = "";
        document.getElementById("cntPersonas").value = "";
      }
    }
  }
});

btnSubmi = document.getElementById("btnsubmit");

btnSubmi.addEventListener("click", () => {
  if (!inputInvitao.value) {
    swal("Ups!", "No has enviado tu nombre!", "error");
  } else {
    dataNombres = document.querySelectorAll(".inputNombres");
    dataceluc = document.querySelectorAll(".inputCelu");
    let personas = "<h3> Cantidad de invitados: " + dataNombres.length + "</h3>";
    for (let j = 0; j < dataNombres.length; j++) {
      personas += "<br>" + dataNombres[j].value + " " + dataceluc[j].value;
    }
    Email.send({
      Host: "smtp.gmail.com",
      Username: "lubrillantasjezreel@gmail.com",
      Password: "rvuxyiyppggwcrvx",
      To: "emilynarvaezquintero@gmail.com",
      From: "lubrillantasjezreel@gmail.com",
      Subject: "Invitados",
      Body: personas,
    }).then(() => {
      swal("Registro Exitoso", "Te espero, no faltes!", "success")
      .then(()=>{
        location.reload();
      })
    });
  }
});

document.getElementById("btnCancela").addEventListener('click',()=>{
  location.reload();
});
document.getElementById("btnEquis").addEventListener('click',()=>{
  location.reload();
});
