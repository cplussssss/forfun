<html>
<head>
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <style>
    .navbar{
      background-color: #d4ebf8;
      position: fixed;
      width: 100%;
      height: 60px; /* 設定高度 */
      z-index: 1000;
    }
    .navbar-dark .nav-link{
      color:#344C64
    }
    .navbar-dark .nav-link:hover{
      color:#008DDA
    }
    .content {
      padding-top: 70px; /* 與導航列的高度匹配，避免被遮擋 */
    }
    </style>
</head>

<body>

<nav class="navbar navbar-expand-sm navbar-dark ">
  <div class="container-fluid">
    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="home.php">C+'s Whimsical Corner</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="question.php" >Q</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="AB.php" >AB</a>
      </li>
    </ul>
  </div>
</nav>
</body>

