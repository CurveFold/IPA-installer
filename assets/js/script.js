document.createElement("note");
function install() {
var URI = document.getElementById("URI").value;
  window.location.replace('itms-services://?action=download-manifest&url='+URI);
} 

function unc0ver() {
document.getElementById('URI').value = 'https://unc0ver.dev/downloads/7.0.2/11c3f7b0eea806ba3cac975f74dcc2cc4e916bac/unc0ver_Release_7.0.2.ipa';
}

function init() {
document.getelementbyid("app").innerHTML = "<h1>IPA installer</h1>
</h1>
<center><textarea id="URI" placeholder="https://example.com/app.ipa"></textarea><button href="#" onclick="install()"><b>GET</b></button>
  <h1></h1></center>
<center ><note>note:this does not sign the ipa</note></center>
<h5>suggested</h5>
<a href="#" onclick="unc0ver()">unc0ver</a>
<h1></h1>
<footer><center ><note>VaultDevs © 2020</note></center></footer>
";
}
