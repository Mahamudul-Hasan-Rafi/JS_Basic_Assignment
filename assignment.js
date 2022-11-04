//1st Problem
function kilometerToMeter(distance) {
    return distance * 1000;
}
var distance = 2;
console.log(kilometerToMeter(distance));

//2nd Problem
function budgetCalculator(w, m, l) {
    return (w * 50 + m * 100 + l * 500);
}
var numOfWatch = 2;
var numOfMobile = 3;
var numOfLaptop = 2;
console.log(budgetCalculator(numOfWatch, numOfMobile, numOfLaptop));

//3rd Problem
function hotelCost(days) {
    if (days <= 10)
        return (days * 100);
    else if (days <= 20)
        return (10 * 100 + (days - 10) * 80);
    else
        return (10 * 100 + 20 * 80 + (days - 20) * 50);
}
var days = 34;
console.log(hotelCost(days));

//4th Problem
function megaFriend(friends) {
    var mx = friends[0].length;
    var pos = 0;

    for (var i = 1; i < friends.length; i++) {
        var len = friends[i].length;
        if (len > mx) {
            mx = len;
            pos = i;
        }
    }
    return friends[pos];
}
friends = ['Rafiq', 'Kalam', 'Jubayer', 'Raj'];
console.log(megaFriend(friends));