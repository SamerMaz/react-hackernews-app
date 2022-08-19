export function timeDifference(n) {


var num = new Date(n * 1000);
var today = new Date();

var todayDate = today.getTime()
var articleDate = num.getTime()

var diff = todayDate-articleDate
var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes

if(diffHrs === 0){
    return diffMins + " minutes ago"
}else {
    return diffHrs + " hours ago"
}



// return diffHrs + " h" + diffMins + " min ago";
}



// function showHrMin(){

// }


// export function timeDifference(n) {
//     const date = new Date(n * 1000);

//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`
//     return time

// }

// function padTo2Digits(num) {
//     return num.toString().padStart(2, '0');
//   }