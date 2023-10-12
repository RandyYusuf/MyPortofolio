const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());

app.post("/data", (req, res) => {
  try {
    const receivedData = req.body;
    const data = `Nama : ${receivedData["nama"]}
                          Email : ${receivedData["email"]}
                          Nomor HP : ${receivedData["nomorHP"]}
                          Pesan : ${receivedData["pesan"]}`;

    console.log("Data yang diterima:", receivedData);
    res.send("Data diterima!");
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "cikopacu@gmail.com",
        pass: "uykhzrocxuwpjxtb",
      },
      tls: {
        rejectUnauthorized: false, // Mengabaikan verifikasi sertifikat
      },
    });

    const mailOptions = {
      from: "cikopacu@gmail.com",
      to: "randyyusuf45@gmail.com",
      subject: "Pesan dari porto",
      text: data,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Kesalahan pengiriman:", error);
      } else {
        console.log("Email berhasil dikirim: " + info.response);
      }
    });
  } catch (error) {
    console.error("eror", error);
  }
});

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
