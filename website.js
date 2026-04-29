function salam() {
  alert("Selamat datang di website kami!");
}
function pesanBeranda() {
  alert("Anda menuju halaman Beranda");
}
function pesanMenu() {
  alert("Anda menuju halaman Menu");
}
function pesanAbout() {
  alert("Ini adalah halaman About");
}
function pesanContact() {
  alert("Ini adalah halaman Contact");
}
function cekLoginMenu() {
  let status = localStorage.getItem("login");

  if (status === "true") {
    window.location.href = "9Menu.html";
  } else {
    alert("Silakan login terlebih dahulu!");
    window.location.href = "login.html";
  }
}