/**
 * Created by nkrajan on 16/02/14.
 */
var pathToMp3 = "agni-pradeepan.mp3";

function run_cmd(cmd, args, done) {
    var spawn = require("child_process").spawn;
    var child = spawn(cmd, args );
    var result = "";
    var error = "";
    child.stdout.on("data", function (data) {
        result += data.toString();
    });
    child.stdout.on("end", function () {
        done(result);
    });
}

run_cmd("exiftool", ["-j","-n",pathToMp3], function (result) {
    console.log(JSON.parse(result)[0]);
    console.log("done!");
});
