var c = document.getElementById( "skill" );
var ctx = c.getContext("2d");
// Triangle
ctx.beginPath();
ctx.moveTo(400,50);
ctx.lineTo(600,400);
ctx.lineTo(200,400);
ctx.fillStyle = "#7ba360";
ctx.fill();
// Texte
ctx.beginPath();
ctx.fillStyle = "#888";
ctx.font = "16pt Bree Serif";
ctx.fillText('HTML',370,25);
ctx.fillText('CSS',625,395);
ctx.fillText('JS',125,395);
ctx.fill();

$(document).ready(function() {
   $("#example").vegas({
       slides: [
           { src: "img/1.jpg" },
           { src: "img/2.png" },
           { src: "img/3.jpg" },
           { src: "img/4.jpg" },
           { src: "img/5.jpg" }
       ],
       delay: 3000,
       transition: 'zoomIn',
       overlay: "Vegas/overlays/01.png"
   });
});
// <iframe src="https://player.twitch.tv/?channel=twitch" frameborder="0" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/twitch?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px;text-decoration:underline;">Watch live video from Twitch on www.twitch.tv</a>
