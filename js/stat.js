var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_WIDTH = 100;
var GAP_BAR = 30;
var CLOUD_BAR_Y = 140;
var WIDTH_BAR = 60;
var TEXT_HEIGHT = 20;
var barHeight = CLOUD_HEIGHT - GAP_BAR - TEXT_HEIGHT - GAP_BAR * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxResult = function (arr) {
  var maxResult = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxResult) {
      maxResult = arr[i];
    }
  }

  return maxResult;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px, PT Mono';
  ctx.fillText('Ура вы победили!', 250, 40);
  ctx.fillText('Список результатов:', 235, 60);

  var maxTime = getMaxResult(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP_BAR + GAP_WIDTH * i, 260);
    ctx.fillRect(CLOUD_X + GAP_BAR + GAP_WIDTH * i, CLOUD_BAR_Y - GAP - GAP_BAR - TEXT_HEIGHT + (240 - times[i]), WIDTH_BAR, barHeight * times[i] / maxTime);
  }
};
// maxTime - barHeight * times[i] / maxTime
