/*jslint browser: true */
/*global onDomReady, microAjax */

(function () {

    'use strict';

    var data = {},
        pick,
        chance,
        project,
        display,
        buttontext;

    chance = function (chance) {
        return (Math.random() * 100) < chance;
    };

    pick = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    project = function () {
        var p = pick(data.projects),
            l = pick(data.languages),
            m = chance(30) ? pick(data.modifiers) : "";

        return p + " in " + l + " " + m;
    };

    buttontext = function () {
        return pick(data.buttontexts);
    };

    display = function () {
        document.getElementById("project").innerHTML = project();
        document.getElementById("button").innerHTML = buttontext();
    };


    onDomReady(function () {

        microAjax("js/data.json", function (json) {
            data = eval('(' + json + ')');
            display();
        });

        document.getElementById("button").onclick = display;
    });

}());
