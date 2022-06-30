// $("#currentDay").text("Current Time and Date : " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

let newUpdateTime = function () {
    let newDate = $("#currentDay").text("Current Time and Date : " + moment().format("dddd, MMMM Do YYYY, h:mm:ss"));
}
setInterval(newUpdateTime, 1000);

 newUpdateTime()