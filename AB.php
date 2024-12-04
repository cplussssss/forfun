<?php require_once "header.php" ?>
<title>幾A幾B遊戲</title>
<style>
    @import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);
    body {
        font-family: 'Noto Sans TC', sans-serif,Arial;
        text-align: center;
    }
    .game-container{
        display:flex;
        justify-content: center;
        flex-direction: column;  /* 確保所有子元素在縱向顯示 */
        align-items: center;
    }
    .result {
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;
    }
    input {
        padding: 5px;
        font-size: 16px;
        margin-top: 10px;
    }
    button {
        padding: 10px;
        font-size: 16px;
        margin-top: 10px;
        cursor: pointer;
    }
</style>

<body>
    <div class="container content" >
        <div class="row" style="margin-top:auto;" ><h1>幾A幾B遊戲</h1></div>
        <div class="row"><p>猜一個四位數字，每猜一次系統會給出幾A幾B的提示。</p></div>
        
        <div class="row align-middle">
            <div class="game-container col " style="background:#659874; min-height: 300px;">
                <input type="text" id="guess" maxlength="4" placeholder="輸入四位數字">
                <button onclick="checkGuess()">猜測</button>
            </div>
            <div class="history-container col" id="historyContainer" style="background:#FFCBCB; min-height: 300px;">
                <div class="mt-3 d-flex justify-content-center"><h3>答題歷史</h3></div>
            </div>
        </div>
    </div>

    <div class="result" id="result"></div>
    <button id="restartButton" style="display: none;" onclick="restartGame()">重新開始</button>
    <script src="AB.js"></script>
</body>
