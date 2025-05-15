<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Metrilize Homepage</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Arial', sans-serif;
        background: url('/factory-bg.jpg') no-repeat center center/cover;
        height: 100vh;
        position: relative;
        color: #003f6a;
      }

      nav {
        position: absolute;
        top: 30px;
        left: 50px;
        right: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav-left {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .nav-left img {
        height: 40px;
      }

      .nav-right a {
        margin-left: 20px;
        text-decoration: none;
        color: #003f6a;
        font-weight: 500;
        font-size: 14px;
      }

      .nav-right .btn {
        background: #f5c518;
        color: #003f6a;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: bold;
      }

      .hero-text {
        position: absolute;
        top: 200px;
        left: 60px;
        max-width: 600px;
      }

      .hero-text h1 {
        font-size: 28px;
        font-weight: 700;
        color: #002c48;
        margin-bottom: 10px;
      }

      .hero-text h2 {
        font-size: 28px;
        font-weight: 700;
        color: #002c48;
        margin-bottom: 20px;
      }

      .hero-text p {
        font-size: 18px;
        color: #00a3e0;
        margin-bottom: 20px;
      }

      .hero-text .btn-start {
        background: #d4f1f9;
        padding: 12px 30px;
        border-radius: 20px;
        color: #003f6a;
        font-weight: bold;
        border: none;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <nav>
      <div class="nav-left">
        <img src="/metrilize-logo.png" alt="Metrilize Logo" />
      </div>
      <div class="nav-right">
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Login</a>
        <a href="#">EN</a>
        <a href="#" class="btn">Book Demo</a>
      </div>
    </nav>

    <div class="hero-text">
      <h1>Sustainability Insights</h1>
      <h2>Designed Around Your Needs</h2>
      <p>
        ESG & Footprint Compliance Made Simple.<br />
        Precision, Expertise, and Clarity in One Platform.
      </p>
      <button class="btn-start">Start your journey</button>
    </div>
  </body>
</html>
