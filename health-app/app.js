const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const zodiacPredictions = {
  aries: "🔥 Today you are unstoppable! Big wins are coming.",
  taurus: "🌿 Stability surrounds you. Money & growth energy ahead.",
  gemini: "💨 Exciting conversations bring opportunities!",
  cancer: "🌊 Emotional clarity and peace will guide your day.",
  leo: "🦁 Leadership vibes! People will notice your power.",
  virgo: "🌼 Productivity mode ON. Success through discipline.",
  libra: "⚖️ Balance & good decisions will bring happiness.",
  scorpio: "🦂 Mystery energy… but luck is secretly supporting you.",
  sagittarius: "🏹 Adventure calls! A positive surprise awaits.",
  capricorn: "⛰️ Hard work today = Huge rewards soon.",
  aquarius: "💧 Creative spark! Great ideas flow to you.",
  pisces: "🐋 Spiritual calmness & inner peace surrounds you."
};

function randomEnergy() {
  return Math.floor(Math.random() * 41) + 60;
}

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>AstroWain DevOps App</title>
    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', Arial;
        background: radial-gradient(circle at top, #6a4fbf, #0e0e2e);
        color: white;
        text-align: center;
      }

      .container {
        margin: 70px auto;
        width: 70%;
        padding: 40px;
        border-radius: 20px;
        background: rgba(255,255,255,0.1);
        box-shadow: 0 0 40px rgba(255,255,255,0.2);
        backdrop-filter: blur(6px);
      }

      h1 { color: #ffd700; font-size: 40px; letter-spacing: 2px; }
      h2 { color: #ff9a00; }

      select {
        padding: 10px;
        border-radius: 10px;
        border: none;
        font-size: 18px;
      }

      button {
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
        margin-top: 10px;
        font-size: 18px;
        background: #ffd700;
        color: black;
        font-weight: bold;
        cursor: pointer;
      }

      .status {
        background: #14ff72;
        color: black;
        display: inline-block;
        padding: 10px 20px;
        border-radius: 10px;
        margin-top: 15px;
        font-weight: bold;
      }

      .energyBox {
        margin-top: 20px;
        font-size: 30px;
      }

      .energyBarOuter {
        width: 80%;
        height: 20px;
        background: rgba(255,255,255,0.3);
        border-radius: 20px;
        margin: auto;
      }

      .energyBarInner {
        height: 20px;
        background: linear-gradient(90deg, #ff0080, #ffcd00);
        border-radius: 20px;
      }

      .footer {
        margin-top: 25px;
        opacity: .7;
      }

    </style>
  </head>
  
  <body>
    <div class="container">
      <h1>🔮 AstroWain – Cosmic Service</h1>
      <h2>Get Your Daily Universe Prediction</h2>

      <form method="POST" action="/predict">
        <select name="sign">
          <option value="aries">♈ Aries</option>
          <option value="taurus">♉ Taurus</option>
          <option value="gemini">♊ Gemini</option>
          <option value="cancer">♋ Cancer</option>
          <option value="leo">♌ Leo</option>
          <option value="virgo">♍ Virgo</option>
          <option value="libra">♎ Libra</option>
          <option value="scorpio">♏ Scorpio</option>
          <option value="sagittarius">♐ Sagittarius</option>
          <option value="capricorn">♑ Capricorn</option>
          <option value="aquarius">♒ Aquarius</option>
          <option value="pisces">♓ Pisces</option>
        </select>
        <br>
        <button type="submit">Reveal My Prediction ✨</button>
      </form>

      <div class="status">✔ App Running Smoothly </div>
    </div>

    <div class="footer">Made with ❤️ | Monitored by n8n</div>
  </body>
  </html>
  `);
});

app.post("/predict", (req, res) => {
  const choice = req.body.sign;
  const msg = zodiacPredictions[choice];
  const energy = randomEnergy();

  res.send(`
  <html>
  <head><title>Your Prediction</title></head>

  <body style="background:#0c0c29; color:white; text-align:center; padding-top:80px; font-family:Segoe UI">
    <h1>🔮 Your Cosmic Reading</h1>
    <h2>${msg}</h2>

    <div class="energyBox">
      Cosmic Energy Score: <b>${energy}%</b>
      <div class="energyBarOuter">
        <div class="energyBarInner" style="width:${energy}%"></div>
      </div>
    </div>

    <br>
    <a href="/" style="color:#ffd700; font-size:24px;">Go Back</a>
  </body>
  </html>
  `);
});

app.listen(3000, () => console.log("AstroWain app running on port 3000 ✨"));
