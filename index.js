'use strict';
function processData(input) {
    var parse_fun = function (s) { return parseInt(s, 10); };

    var lines = input.split('\n');
    var params = lines.shift().split(' ').map(parse_fun);
    var N = params[0];
    var K = params[1];

    var data = lines.shift().split(' ').splice(0, N).map(parse_fun);
    data.sort(function (o1, o2) { return o1 - o2; });

    var res = 0;
    for (var i = 0; i < N; i++) {
        var di = data[i];
        for (var j = i + 1; j < N; j++) {
            var dj = data[j];
            var diff = dj - di;
            if (diff < K) {
                continue;
            } else {
                if (diff == K) { res++; }
                break;
            }
        }
    }

    console.log(res);
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
