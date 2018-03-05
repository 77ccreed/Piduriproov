"use strict";
document.getElementById("table").style.visibility = "hidden";

function calc(a) {

  document.getElementById("table").style.visibility = "visible";

  //input
  const tuhikaal = document.proov.tuhikaal.value;
  const tuhitelgi = document.proov.tuhitelgi.value;
  const laetudkaal = document.proov.laetudkaal.value;
  const laetudtelgi = document.proov.laetudtelgi.value;

  //calculate output
  const tuhinoutav = tuhikaal * 55 / 100;
  const tuhitegelik = tuhitelgi * 3.5;
  const laetudnoutav = laetudkaal * 33 / 100;
  const laetudtegelik = laetudtelgi * 7;
  const kokkunoutav = tuhinoutav + laetudnoutav;
  const kokkutegelik = tuhitegelik + laetudtegelik;
  const kaalkokku = (tuhikaal * 1) + (laetudkaal * 1);
  const telgikokku = (tuhitelgi * 1) + (laetudtelgi * 1);
  const kasipidureid = kaalkokku / 100;

  //output
  $("#tuhi_noutav").text(tuhinoutav);
  $("#tuhi_tegelik").text(tuhitegelik);
  $("#laetud_noutav").text(laetudnoutav);
  $("#laetud_tegelik").text(laetudtegelik);
  $("#kokku_noutav").text(kokkunoutav);
  $("#kokku_tegelik").text(kokkutegelik);
  $("#kokku_kaal").text(kaalkokku);
  $("#kokku_telgi").text(telgikokku);
  $("#kasipidureid").text(Math.ceil(kasipidureid/4));

  if (kokkunoutav > kokkutegelik && (tuhikaal !== "" && tuhitelgi !== "" || laetudkaal !== "" && laetudtelgi !== "")) {
    // Materialize.toast(message, displayLength, className, completeCallback);
    Materialize.toast('Tegelik pidurdusjõud peab nõutavast suurem olema!', 2000); // 4000 is the duration of the toast
  }
  if ((tuhikaal ==="" && tuhitelgi > 1) || (tuhikaal > 1 && tuhitelgi ==="")) {
    // Materialize.toast(message, displayLength, className, completeCallback);
    Materialize.toast('Viga tühjade vagunite sisestamisel!', 3000); // 4000 is the duration of the toast
    document.getElementById("table").style.visibility = "hidden";
  }
  if ((laetudkaal ==="" && laetudtelgi > 1) || (laetudkaal > 1 && laetudtelgi ==="")) {
    // Materialize.toast(message, displayLength, className, completeCallback);
    Materialize.toast('Viga laetud vagunite sisestamisel!', 3000); // 4000 is the duration of the toast
    document.getElementById("table").style.visibility = "hidden";
  }
  if (tuhikaal==="" && tuhitelgi ==="" && laetudkaal==="" && laetudtelgi ==="") {
    document.getElementById("table").style.visibility = "hidden";
     // Materialize.toast(message, displayLength, className, completeCallback);
     Materialize.toast('Sisesta andmed!', 2500); // 4000 is the duration of the toast
  }
}



var elem = document.querySelector('.fixed-action-btn');
var instance = new M.FloatingActionButton(elem, {
  toolbarEnabled: true
});

  var elem = document.querySelector('.modal');
  var instance = M.Modal.init(elem, options);

//Tooltip
    $(document).ready(function () {
      $('.tooltipped').tooltip({
        delay: 50
      });
    });
