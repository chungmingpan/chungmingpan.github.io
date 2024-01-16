function lastModified() {
    var modiDate = new Date(document.lastModified);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var M = modiDate.getMonth();
    var showAs = months[M] + " " + modiDate.getDate() + ", " + modiDate.getFullYear();
    return showAs
}

//function format_time(t) {
//            var Day = t.getDay();
//            var Date = t.getDate();
//            var Month = t.getMonth();
//            var Year = getFullYear(t);
//            timeString = "";
//            timeString += days[Day];
//            timeString += " ";
//            timeString += months[Month];
//            timeString += " ";
//            timeString += Date;
//            timeString += ", ";
//            timeString += Year;
//            return timeString;
//}

function GetTime() {
    var modiDate = new Date();
    var Seconds

    if (modiDate.getSeconds() < 10) {
        Seconds = "0" + modiDate.getSeconds();
    } else {
        Seconds = modiDate.getSeconds();
    }

    var modiDate = new Date();
    var CurTime = modiDate.getHours() + ":" + modiDate.getMinutes() + ":" + Seconds
    return CurTime
}

//document.write("Last updated on ")
//document.write(lastModified() + " @ " + GetTime());
//document.write(" [D M Y 24 Hour Clock]")
//document.write("");

document.write("Last modified: ")
document.write(lastModified());