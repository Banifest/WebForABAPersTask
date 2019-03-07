let username = prompt("Your username is", "");
let flg_contain_number = false;

for (let character of username) {
    if (!isNaN(parseInt(character))) {
        flg_contain_number = true;
        break;
    }
}

let answer = "";

if (flg_contain_number) {
    for (let i = 0; i < username.length; i++) {
        if (i % 2 === 0) {
            answer += username[i].toLocaleUpperCase();
        } else {
            answer += username[i].toLowerCase();
        }
    }
} else {
    for (let i = username.length - 1; i >= 0; i--) {
        answer += username[i];
    }
}

alert(answer);