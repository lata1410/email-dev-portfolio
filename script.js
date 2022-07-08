let radios = document.getElementsByName("mail");

for (let i = 0; i < radios.length; i++) {
  radios[i].setAttribute("onchange", "changeMail()");
}

// for (let i = 0; i < radios.length; i++) {
//   if (radios[i].checked) {
//     changeMail(i);
//   }
// }

function changeMail() {
  let actualMail = undefined;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      actualMail = radios[i].value;
      if(actualMail == 'mail1'){
        document.getElementById('iframe-mail').src = "portfolio-mails/email-616-assessor.html";
      }else if (actualMail == 'mail2') {
        document.getElementById('iframe-mail').src = "portfolio-mails/jtp_01.html";
      }else if (actualMail == 'mail3') {
        document.getElementById('iframe-mail').src = "portfolio-mails/lulobank_1.html";
      }else if (actualMail == 'mail4') {
        document.getElementById('iframe-mail').src = "portfolio-mails/lulobank_2.html";
      }else if (actualMail == 'mail5') {
        document.getElementById('iframe-mail').src = "portfolio-mails/natura_01.html";
      }else if (actualMail == 'mail6') {
        document.getElementById('iframe-mail').src = "portfolio-mails/natura_30_06.html";
      }else if (actualMail == 'mail7') {
        document.getElementById('iframe-mail').src = "portfolio-mails/nubank_01.html";
      }else if (actualMail == 'mail8') {
        document.getElementById('iframe-mail').src = "portfolio-mails/dc_01/dc_ingreso_nueva_obligacion.html";
      }else if (actualMail == 'mail9') {
        document.getElementById('iframe-mail').src = "portfolio-mails/natura_ARG_30_06.html";
      }else if (actualMail == 'mail10') {
        document.getElementById('iframe-mail').src = "portfolio-mails/stronger_01/stronger_01.html";
      }else if (actualMail == 'mail11') {
        document.getElementById('iframe-mail').src = "portfolio-mails/nubank_02.html";
      }else if (actualMail == 'mail12') {
        document.getElementById('iframe-mail').src = "portfolio-mails/dc_02/mail_pontealdia.html";
      }else if (actualMail == 'mail13') {
        document.getElementById('iframe-mail').src = "portfolio-mails/dc_03/bc_vivienda.html";
      }else if (actualMail == 'mail14') {
        document.getElementById('iframe-mail').src = "portfolio-mails/dc_04/buscacredito_inversion.html";
      }else if (actualMail == 'mail15') {
        document.getElementById('iframe-mail').src = "portfolio-mails/dc_04/midc_historia.html";
      }else if (actualMail == 'mail16') {
        document.getElementById('iframe-mail').src = "portfolio-mails/dc_04/midc_verifica.html";
      }else if (actualMail == 'mail17') {
        document.getElementById('iframe-mail').src = "portfolio-mails/dc_04/upselling_farmers.html";
      }else if (actualMail == 'mail18') {
        document.getElementById('iframe-mail').src = "portfolio-mails/natura_mail_15_06.html";
      }else if (actualMail == 'mail19') {
        document.getElementById('iframe-mail').src = "portfolio-mails/zuana_01/dc_zuana.html";
      }else if (actualMail == 'mail20') {
        document.getElementById('iframe-mail').src = "portfolio-mails/natura_argentina_06.html";
      }else if (actualMail == 'mail21') {
        document.getElementById('iframe-mail').src = "portfolio-mails/stronger_02.html";
      }else if (actualMail == 'mail22') {
        document.getElementById('iframe-mail').src = "portfolio-mails/stronger_03.html";
      }
    }
  }
}


//          <iframe src="" title="description"></iframe>
