function likes(num) {
if (num < 1000) {
    return num;
}else if (num < 1000000) {
        num = num / 1000;
        return Math.trunc(num) + 'K';
}else{
        num = num / 1000000;
        return Math.trunc(num)+ 'M';
    }
}

console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"