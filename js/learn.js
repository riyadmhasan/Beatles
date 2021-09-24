// function print(name ,  discription ){
//     console.log(name)
//     console.log(discription)
        
// }

// print('i am riytad' , 'i am from gogool');
let names, rools, years;
names = "Md. Mainuddin Hasan";
rools = "80";
years = "3rd"

function print_details(name, rool, year ) {
    console.log(`my name is ${name}`);
    console.log('my rool is ' + rool);
    console.log("my class name is " + year);
}

// print_details(names, rools, years );

names = "Md. Abudur Rahim";
rools = "82";
years = "ten";

// print_details(names, rools, years );


// function goto_bazar(tk,rice_packet) {
//     // console.log(tk, rice_packet);
//     return 'ji vai ame chal paici. amar massage hoccce '
//      + rice_packet + 'baki taka hocce : ' + (tk - 85);
// }

// let darowan = goto_bazar(100, 'ei nen  vai apnar cal');

// console.log(darowan);

let amar_hate_ace = 500;

let after_expense_money = 0;

function bazar_track(tk,element,price) {
    console.log('egg : ' + price + 'tk');
    return tk - price;
}

// after_expense_money = bazar_track(amar_hate_ace, 'egg', 110);
// console.log(after_expense_money);

// after_expense_money = bazar_track(after_expense_money, 'rice', 90);
// console.log(after_expense_money);

// after_expense_money = bazar_track(after_expense_money, 'vagitable', 150);
// console.log(after_expense_money);

// after_expense_money = bazar_track(after_expense_money, 'onio', 150);
// console.log(after_expense_money);


function calculates(num1, num2) {
     console.log(`sum = ${num1 + num2}`);
     console.log(`sub = ${num1 - num2}`);
     console.log(`mul = ${num1 * num2}`);
     console.log(`div = ${num1 / num2}`);
     console.log(`modulus = ${num1 % num2}`);

     document.getElementById("myList").innerHTML = '';

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`sum = ${num1 + num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`sub = ${num1 - num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`mul = ${num1 * num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`div = ${num1 / num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(`modulus = ${num1 % num2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);

}

// calculate(30, 20)
// calculate(60, 20)