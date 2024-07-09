$(document).on('input', 'input[masc=data]', function (e) {
  var input = $(this);
  try {

      if (!input.hasClass('backspace')) {
          var data = input.val().replace("/", "");
          data = data.replace("/", "");

          var isnum = $.isNumeric(data);

          if (!isnum) {
              input.val("");
              input.focus();
          }
          else {
            var data01 = data.substring(0, 2);
            var data02 = data.substring(2, 4);
            var data03 = data.substring(4, 8);
            if (data01.length == 2) { data01 = data01 + "/"; }
            if (data02.length == 2) { data02 = data02 + "/"; }
            if (data03.length == 2) { data03 = data03; }

            input.val(data01 + data02 + data03);

            if (input.val().length == 10) {
                //validacaoData(input);
            }
              
          }
      }
      input.removeClass('backspace');
  } catch (e) {
      input.val("").focus();
  }
});
function validacaoData(form){

    // regular expression to match required date format
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if(form.startdate.value != '') {
      if(regs = form.startdate.value.match(re)) {
        // day value between 1 and 31
        if(regs[1] < 1 || regs[1] > 31) {
          alert("Invalid value for day: " + regs[1]);
          form.startdate.focus();
          return false;
        }
        // month value between 1 and 12
        if(regs[2] < 1 || regs[2] > 12) {
          alert("Invalid value for month: " + regs[2]);
          form.startdate.focus();
          return false;
        }
        // year value between 1902 and 2024
        if(regs[3] < 1902 || regs[3] > (new Date()).getFullYear()) {
          alert("Invalid value for year: " + regs[3] + " - must be between 1902 and " + (new Date()).getFullYear());
          form.startdate.focus();
          return false;
        }
      } else {
        alert("Invalid date format: " + form.startdate.value);
        form.startdate.focus();
        return false;
      }
    }

    alert("All input fields have been validated!");
    return true;
  
}
function validacaoEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}

$(document).on('click', '#btnEmail', function (e) {
    var btn = $(this);
    var input = $("#inputEmail");
    var valor = input.val();

   
    if (validacaoEmail(valor)) {
        input.css("border", "2px solid green");
        alert("Enviado!");
        input.val("");
        //swal('Boa!', 'Deu tudo certo!', 'success');
        } else {
        input.css("border", "2px solid red");
        input.focus();

    }
});
$(document).on('click', '#sessionBtnEnviar #btnEnviar', function (e) {
  var inputImageForm = $("#inputImageForm");
  var completo = false;
  var inputs = $("#sessionFormulario input");
  for (let index = 0; index < inputs.length; index++) {
    var input = inputs[index];
    if(input.type == "text"){
    input.style.border = "1px solid #ccc";
    } else if (input.type == "checkbox") {
      input.parentElement.style.border = "none";
    } else if (input.type == "image") {
      $(".cardImage").css("border","");
    }
  }
  for (let index = 0; index < inputs.length; index++) {
    var input = inputs[index];
    if(input.type == "text"){
      if (input.value == "" || input.value == "undefined") {
        input.style.border = "2px solid red";
        input.focus();
        completo = false;
        break;
      } 
    }else if (input.type == "checkbox") {
      if (input.checked == false) {
        input.parentElement.style.border = "2px solid red";
        input.focus();
        completo = false;
        break;
      }
    }else if (input.type == "image") {
      if (input.title == "" || input.title == "undefined") {
      $(".cardImage").css("border","2px solid red");
        completo = false;
        break;
      }
    }
    completo = true;
  }
  if(completo){
    alert("Enviado!")

    for (let index = 0; index < inputs.length; index++) {
      var input = inputs[index];
      if(input.type == "text"){
        input.value = "";
      }else if (input.type == "checkbox") {
        input.checked = false;
      }else if (input.type == "image") {
        $(".cardImage").css("background-image", "");
        $("#iconImageForm").css("display", "");

      }
  
    }
 }
 
});
function clickMenu(){
  if(topnav.style.display == 'block'){
      topnav.style.display = 'none'
  }else{
      topnav.style.display = 'block'
  }
}
function positionDropdown(){
  var leftPai = 0;
  document.getElementById('itensDrop').style.right = leftPai + 'px';
}
$(document).on('click', '.cardImage', function (e) {
  $("#uploadFiles").click();
});

function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("inputImageForm");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    var cardImage = document.querySelector(".cardImage");
    cardImage.style.backgroundImage = "url('" + event.target.result + "')";  };

  reader.readAsDataURL(selectedFile);
  document.querySelector("#iconImageForm").style.display = "none";
}
