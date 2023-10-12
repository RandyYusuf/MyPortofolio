document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/data", true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.onerror = function () {
    console.error("Kesalahan jaringan");
  };

  const data = {
    nama: formData.get("nama"),
    email: formData.get("email"),
    nomorHP: formData.get("nomorHP"),
    pesan: formData.get("pesan"),
  };
  const pattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  if (data.email.match(pattern)) {
    xhr.send(JSON.stringify(data));
    alert("Pesan berhasil dikirim!");
  } else {
    alert("email tidak valid!!");
  }
});
