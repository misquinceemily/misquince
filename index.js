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

btnRegis.addEventListener("click", () => {
  let data = parseInt(document.getElementById("cntPersonas").value);

  let padre = document.getElementById("bodyCard");
  let modalUsu = document.getElementById("camposAdd");
  let fragment = document.createDocumentFragment();

  let i = 0,
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
  for (i; i < num + data; i++) {
    let clone = modalUsu.content.cloneNode(true);
    clone.querySelector(".idInvitado").innerHTML = "Invitado " + ++aux;
    fragment.appendChild(clone);
  }
  padre.appendChild(fragment);
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
      To: "johnnyaquintero@gmail.com",
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
})
