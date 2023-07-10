var number1 = prompt("Введите число дня от 1-31");
var number2 = prompt("Введите месяц от 1-12");

if ((number1 >= 32 && number2 >= 13) || (number2 >= 13 && number1 >= 32)) {
  console.log("Вы уверены в этом ? я тоже нет");
} else if ((number1 >= 21 && number2 == 3) || (number1 <= 19 && number2 == 4)) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы овен!");
  } else {
    console.log("Введите правильное число!");
  }
  console.log("Овен!");
} else if ((number1 >= 21 && number2 == 4) || (number1 <= 21 && number2 == 5)) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы телец!");
  } else {
    console.log("Введите правильное число!");
  }
} else if ((number1 >= 22 && number2 == 5) || (number1 <= 21 && number2 == 6)) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы близнецы!");
  } else {
    console.log("Введите правильное число!");
  }
} else if ((number1 >= 22 && number2 == 6) || (number1 <= 22 && number2 == 7)) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы рак!");
  } else {
    console.log("Введите правильное число!");
  }
} else if ((number1 >= 23 && number2 == 7) || (number1 <= 21 && number2 == 8)) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы близнецы!");
  } else {
    console.log("Введите правильное число!");
  }
} else if ((number1 >= 22 && number2 == 8) || (number1 <= 23 && number2 == 9)) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы дева!");
  } else {
    console.log("Введите правильное число!");
  }
} else if (
  (number1 >= 24 && number2 == 9) ||
  (number1 <= 23 && number2 == 10)
) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы весы!");
  } else {
    console.log("Введите правильное число!");
  }
} else if (
  (number1 >= 24 && number2 == 10) ||
  (number1 <= 22 && number2 == 11)
) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы скорпион!");
  } else {
    console.log("Введите правильное число!");
  }
} else if (
  (number1 >= 23 && number2 == 11) ||
  (number1 <= 22 && number2 == 12)
) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы стрелец!");
  } else {
    console.log("Введите правильное число!");
  }
} else if (
  (number1 >= 23 && number2 == 12) ||
  (number1 <= 20 && number2 == 1)
) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы козерог!");
  } else {
    console.log("Введите правильное число!");
  }
} else if ((number1 >= 21 && number2 == 1) || (number1 <= 19 && number2 == 2)) {
  if (number1 <= 28 && number1 >= 1) {
    console.log("вы водолей!");
  } else {
    console.log("Введите правильное число!");
  }
} else if ((number1 >= 20 && number2 == 2) || (number1 <= 20 && number2 == 3)) {
  if (number1 <= 31 && number1 >= 1) {
    console.log("вы рыбы!");
  } else {
    console.log("Введите правильное число!");
  }
}
//  else if (
//   (number1 >= 32 && number2 >= 13) ||
//   (number2 >= 13 && number1 >= 32)
// ) {
//   console.log("Вы уверены в этом ? я тоже нет");
// }
else {
  console.log("Введите дату рождения правильно!");
}
