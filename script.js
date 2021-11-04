function install() {
var URI = document.getElementById("URI").value;
  window.location.replace('itms-services://?action=download-manifest&url='+URI);
} 