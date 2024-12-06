
// 生成隨機四位數字
function generateRandomNumber() {
    let number = "";
    while (number.length < 4) {
        let digit = Math.floor(Math.random() * 10); //Math.random js裡只能生成0-1之間的浮點數 //Math.floor 向下取整數
        if (!number.includes(digit)) { //如果生成的digit沒有在number裡，就加入number的字串
            number += digit;
        }
    }
    return number;
}

let correctNumber = generateRandomNumber(); // 重新生成隨機數字
console.log("正確答案是：" + correctNumber); // 測試時可以查看正確答案

let attempts = 0; // 用來計算猜測次數

function updateHistory(guess, aCount, bCount) {
    const historyContainer = document.getElementById("historyContainer");

    // 創建歷史記錄項目
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";
    historyItem.textContent = `${guess} -> ${aCount}A ${bCount}B`;

    // 將新項目加入歷史容器
    historyContainer.appendChild(historyItem);

    // 滾動至最底部
    historyContainer.scrollTop = historyContainer.scrollHeight;
}

// 檢查玩家的猜測
function checkGuess() {
    // 當猜測次數達到15次，顯示提示並禁用輸入
    if (attempts >= 20) {
        document.getElementById("result").innerText = `作答次數已達上限，正確答案是：${correctNumber}。請再接再厲！`;
        document.getElementById("guess").disabled = true; // 禁用輸入框
        document.querySelector("button").disabled = true; // 禁用猜測按鈕
        document.getElementById("restartButton").style.display = "inline"; // 顯示重新開始按鈕
        return;
    }

    const guess = document.getElementById("guess").value;
    if (guess.length !== 4 || isNaN(guess) || !Number.isInteger(Number(guess)) || guess.includes(".")) {
        document.getElementById("result").innerText = "請輸入一個四位數字！";
        return;
    }

    let aCount = 0;
    let bCount = 0;

    for (let i = 0; i < 4; i++) {
        if (guess[i] === correctNumber[i]) {
            aCount++;
        } else if (correctNumber.includes(guess[i])) {
            bCount++;
        }
    }

    // 增加猜測次數
    attempts++;

    // 如果猜對了
    if (aCount === 4) {
        document.getElementById("result").innerHTML = `恭喜你猜對了！正確答案是：${correctNumber} <br> 你使用了：${attempts} 次`;
        document.getElementById("guess").disabled = true; // 禁用輸入框
        document.querySelector("button").disabled = true; // 禁用猜測按鈕
        document.getElementById("restartButton").style.display = "inline"; // 顯示重新開始按鈕
    }
    //更新答題歷史
    updateHistory(guess, aCount, bCount);


}

// 處理按下 Enter 鍵的事件
document.getElementById("guess").addEventListener("keydown", function (event) {
    // 判斷是否是 Enter 鍵
    if (event.key === "Enter") {
        event.preventDefault();  // 防止表單提交
        checkGuess();  // 執行猜測
    }
});

// 重新開始遊戲
function restartGame() {
    location.reload();
    /*
    // 重置遊戲狀態
    attempts = 0;
    correctNumber = generateRandomNumber();  // 重新生成隨機數字
    document.getElementById("result").innerText = "";  // 清空結果顯示
    document.getElementById("guess").disabled = false;  // 啟用輸入框
    document.querySelector("button").disabled = false;  // 啟用猜測按鈕
    document.getElementById("historyContainer").innerHTML = '<h3>答題歷史</h3>';  // 清空歷史並重新添加標題
    
    // 讓結果區域清空
    document.getElementById("result").innerText = '';  // 這樣就會讓主控台的結果區域也被清空

    document.getElementById("restartButton").style.display = "none";  // 隱藏重新開始按鈕
    */
}

