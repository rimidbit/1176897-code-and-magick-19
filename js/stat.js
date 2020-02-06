var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_BAR = 30;
var CLOUD_BAR_Y = 140;
var WIDTH_BAR = 60;
var TEXT_HEIGHT = 20;
var barHeight = CLOUD_HEIGHT - GAP_BAR - TEXT_HEIGHT - GAP_BAR * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px, PT Mono';
  ctx.fillText('Ура вы победили!', 250, 40);
  ctx.fillText('Список результатов:', 235, 60);

  ctx.fillText('Вы', 150, 260);

  ctx.fillText('Ира', 245, 260);

  ctx.fillText('Глеб', 340, 260);

  ctx.fillText('Дима', 440, 260);

  ctx.fillStyle = 'rgba(255, 0, 0, 1';
  ctx.fillRect(CLOUD_X + GAP_BAR, CLOUD_BAR_Y, WIDTH_BAR, barHeight);

  ctx.fillStyle = 'hsl(240, 100%, 50%)';
  ctx.fillRect(230, CLOUD_BAR_Y, WIDTH_BAR, barHeight);

  ctx.fillStyle = 'hsl(240, 10%, 50%)';
  ctx.fillRect(330, CLOUD_BAR_Y, WIDTH_BAR, barHeight);

  ctx.fillStyle = 'hsl(240, 40%, 50%)';
  ctx.fillRect(430, CLOUD_BAR_Y, WIDTH_BAR, barHeight);
};
