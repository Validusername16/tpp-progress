/// <reference path="tpp-structure.ts" />
var Duration = (function () {
    function Duration(days, hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        if (typeof (days) === "string") {
            var parsed = Duration.parse(days);
            this.days = parsed.days;
            this.hours = parsed.hours;
            this.minutes = parsed.minutes;
            this.seconds = parsed.seconds;
        }
        else
            this.days = days;
    }
    Object.defineProperty(Duration.prototype, "TotalSeconds", {
        get: function () {
            return this.seconds + (this.minutes * 60) + (this.hours * 60 * 60) + (this.days * 60 * 60 * 24);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "TotalDays", {
        get: function () {
            return this.TotalSeconds / 60 / 60 / 24;
        },
        enumerable: true,
        configurable: true
    });
    Duration.parse = function (time) {
        var matches = /^\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i.exec(time);
        return new Duration(parseInt(matches[1]) || 0, parseInt(matches[2]) || 0, parseInt(matches[3]) || 0, parseInt(matches[4]) || 0);
    };
    return Duration;
})();
function makeGrid(ppd) {
    var bgImageSrc = document.createElement("canvas");
    bgImageSrc.height = 1;
    bgImageSrc.width = ppd / 2;
    var draw = bgImageSrc.getContext("2d");
    draw.strokeStyle = "darkgray";
    draw.moveTo(ppd / 2, -1);
    draw.lineTo(ppd / 2, 2);
    draw.stroke();
    return bgImageSrc.toDataURL();
}
function createChart(data, ppd) {
    var chart = document.createElement("div");
    chart.className = "progressChart";
    setTimeout(function () { document.body.appendChild(chart); }, 1);
    var days = 0;
    data.forEach(function (run) {
        var runLength = Duration.parse(run.Duration).TotalSeconds / 60 / 60 / 24;
        if (days < runLength)
            days = runLength;
        chart.appendChild(drawRun(run));
    });
    var ruler = document.createElement("div");
    ruler.className = "ruler";
    chart.insertBefore(ruler, chart.firstChild);
    for (var i = 0; i - .5 < days; i++) {
        var stop = document.createElement('div');
        ruler.appendChild(stop);
        stop.className = "stop";
    }
    setTimeout(function () { return applyScale(ppd || window.innerWidth / days); }, 10);
}
function drawRun(runInfo) {
    var run = document.createElement("div");
    run.className = "run";
    run.setAttribute("data-time", runInfo.Duration);
    run.setAttribute("data-label", runInfo.RunName + ": " + runInfo.Duration);
    run.style.backgroundColor = runInfo.ColorPrimary;
    run.style.borderColor = run.style.color = runInfo.ColorSecondary;
    run.appendChild(drawHost(runInfo));
    runInfo.Events.sort(function (e1, e2) { return Duration.parse(e1.Time).TotalSeconds - Duration.parse(e2.Time).TotalSeconds; }).forEach(function (event) { return run.appendChild(drawEvent(event)); });
    return run;
}
function drawHost(runInfo) {
    var host = drawEvent({
        Group: "host",
        Name: runInfo.HostName,
        Image: runInfo.HostImage,
        Time: ''
    });
    host.style.left = "0";
    return host;
}
function drawEvent(eventInfo) {
    var event = document.createElement("div");
    var eventImg = document.createElement("img");
    event.appendChild(eventImg);
    event.className = "event " + eventInfo.Group.replace(/[^A-Z0-9]/i, '').toLowerCase();
    var label = eventInfo.Name;
    if (eventInfo.Time)
        label += "\n" + eventInfo.Time;
    if (eventInfo.Attempts)
        label += "\n(" + eventInfo.Attempts + " Attempt" + (eventInfo.Attempts > 1 ? "s" : "") + ")";
    eventImg.src = eventInfo.Image;
    eventImg.alt = label;
    event.setAttribute('data-label', label);
    event.setAttribute("data-time", eventInfo.Time);
    return event;
}
function applyScale(ppd) {
    ppd = Math.pow(2, Math.floor(Math.log(ppd || 64) / Math.log(2)));
    var $ = function (selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); };
    var $find = function (elements, selector) { return elements.map(function (e) { return Array.prototype.slice.call(e.querySelectorAll(selector)); }); };
    $('.progressChart').forEach(function (chart) {
        chart.style.backgroundImage = 'url("' + makeGrid(ppd) + '")';
    });
    $find($(".progressChart .ruler"), ".stop").forEach(function (clump) { return clump.forEach(function (stop, i) {
        stop.style.left = i * ppd + "px";
    }); });
    $(".progressChart .run").forEach(function (run) { return run.getAttribute('data-time') && (run.style.width = Duration.parse(run.getAttribute('data-time')).TotalDays * ppd + "px"); });
    $(".progressChart .run .event").forEach(function (event) { return event.getAttribute('data-time') && (event.style.left = Duration.parse(event.getAttribute('data-time')).TotalDays * ppd + "px"); });
}
