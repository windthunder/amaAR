function positionAnimate(target) {
    // 隨機一個角度 0~360
    let angle = Math.random() * 360;
    // 轉換成弧度
    angle = angle * Math.PI / 180;
    // 計算 x, y
    let x = Math.cos(angle) * 0.05;
    let y = Math.sin(angle) * 0.05;

    AFRAME.ANIME.timeline({
      duration: 100,
      easing: 'linear',
    })
    .add({
      targets: target,
      x: x,
      y: y,
    })
    .add({
      targets: target,
      x: 0,
      y: 0,
    })
    .add({
      targets: target,
      x: -x,
      y: -y
    })
    .add({
      targets: target,
      x: 0,
      y: 0
    });
}

// dom ready
document.addEventListener("DOMContentLoaded", function(event) {
  const bottomPlane = document.querySelector('#bottom-plane');
  const topPlane = document.querySelector('#top-plane');

  bottomPlane.addEventListener("click", event => {
    positionAnimate(event.target.object3D.position);
  });

  topPlane.addEventListener("click", event => {
    positionAnimate(event.target.object3D.position);
  });
});