//暂停和播放功能
var player = {
    stopPlayer: function () {
        $("#jquery_jplayer").jPlayer("stop");
    },
    startPlayer: function () {
        $("#jquery_jplayer").jPlayer("play");
    }
};

$(document).ready(function () {
    $("#jquery_jplayer").jPlayer({
        ready: function () {
            //初始化歌词信息(传入歌词文件文本)
            $.lrc.init($('.lrc_content').val());
            $(this).jPlayer("setMedia", {
                title: "Bubble",
                mp3: "music/cao.mp3"
            }).jPlayer("play");
        },
        timeupdate: function (event) {
            if (event.jPlayer.status.currentTime == 0) {
                time = "";
            } else {
                time = event.jPlayer.status.currentTime;
            }
        },
        play: function (event) {
            //点击开始方法调用lrc.start歌词方法 返回时间time
            if ($('.lrc_content').val() !== "") {
                $.lrc.start(function () {
                    return time;
                });
            } else {
                $("#player-right").html("没有字幕");
            }
        },
        swfPath: "js",
        supplied: "mp3",
        wmode: "window",
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });

});

$("#qie").click(function () {
    $(document).ready(function () {
        $("#jquery_jplayer1").jPlayer({
            ready: function () {
                //初始化歌词信息(传入歌词文件文本)
                $.lrc.init($('.lrc_content1').val());
                $(this).jPlayer("setMedia", {
                    title: "Bubble",
                    mp3: "music/you.mp3"
                }).jPlayer("play");
            },
            timeupdate: function (event) {
                if (event.jPlayer.status.currentTime == 0) {
                    time = "";
                } else {
                    time = event.jPlayer.status.currentTime;
                }
            },
            play: function (event) {
                //点击开始方法调用lrc.start歌词方法 返回时间time
                if ($('.lrc_content1').val() !== "") {
                    $.lrc.start(function () {
                        return time;
                    });
                } else {
                    $("#player-right").html("没有字幕");
                }
            },
            swfPath: "js",
            supplied: "mp3",
            wmode: "window",
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
        });
    })
})


//换台。点击效果
$(function () {
    $(function () {
//        $(".change").click(function () {
//            $("#tit").hide();
//            $(".change").hide();
//            $("#share-more").hide();
//            $("#choose").show();
//            $(".change1").show();
//
//        });
//        $(".change1").click(function () {
//            $("#choose").hide();
//            $(".change1").hide();
//            $("#tit").show();
//            $(".change").show();
//            $("#share-more").show();
//        });
        $("#start").click(function () {
            $("#start").hide();
            $("#start1").show();
        });
        $("#start1").click(function () {
            $("#start1").hide();
            $("#start").show();
        });
        $("#no-voice").click(function () {
            $("#no-voice").hide();
            $("#no-voice1").show();
        });
        $("#no-voice1").click(function () {
            $("#no-voice1").hide();
            $("#no-voice").show();
        });
    });
});

