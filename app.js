function track() {
    var then = new Date("Novenber 12, 2018 22:00 GMT+8:00");

    var date = new Date();
    var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
        date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

    var curr = new Date(now_utc);
    var diff = curr.getTime() - then.getTime();
    var days = diff / 1000 / 60 / 60 / 24;
    var titleDays = days;
    days = days.toFixed(7);
    titleDays = titleDays.toFixed(5);

    document.getElementById("start").innerHTML = then;
    document.getElementById("now").innerHTML = curr;
    document.getElementById("time").innerHTML = days;
    document.getElementById("title").innerHTML = `${titleDays} days passed`;
}

setInterval(track, 100);