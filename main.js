const display = document.getElementById("output");

function set() {
    const num = Math.floor(Math.random() * 10 + 1);
    const n = 1;

    switch (num) {
        case 1:
            display.textContent = "大吉";
            break;
        case 2:
        case 3:
            display.textContent = "中吉";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            display.textContent = "小吉";
            break;
        case 9:
            display.textContent = "凶";
            break;
        case 10:
            display.textContent = "大凶";
            break;
    }
}