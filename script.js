window.addEventListener('DOMContentLoaded', init);

function init() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setClearColor(new THREE.Color(0x222333))
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // シーンを作成
  const scene = new THREE.Scene();

  // axisHelper
  // const axesHelper = new THREE.AxesHelper(5);
  // scene.add(axesHelper);

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  // カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
  camera.position.set(0, 0, 1000);

  // Plane


  // 箱を作成
  const boxSize = 250
  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ccee });
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  // 平行光源
  const light = new THREE.DirectionalLight(0xFFFFFF);
  light.intensity = 2; // 光の強さを倍に
  light.position.set(1, 1, 1); // ライトの方向
  // シーンに追加
  scene.add(light);

  // レンダリング

  // 初回実行
  tick();
  function tick() {
    requestAnimationFrame(tick);
    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // レンダリング
  }

  renderer.render(scene, camera);
}
