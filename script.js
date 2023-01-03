import * as THREE from "./build/three.module.js"

window.addEventListener("DOMContentLoaded", init)

function init() {
  const width = window.innerWidth
  const height = window.innerHeight

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
  // カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
  // camera.position.set(0, 0, 100)
  camera.position.z = 200
  // シーンを作成
  const scene = new THREE.Scene()

  // FIXME: axisHelper
  // const axesHelper = new THREE.AxesHelper(5)
  // scene.add(axesHelper)

  // 箱を作成
  const boxSize = 250
  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize)
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ccee,
    specular: 0xffffff,
    shininess: 50,
  })

  for (let i = 0; i < 200; i++) {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = 8000 * (2.0 * Math.random() - 1.0)
    mesh.position.y = 8000 * (2.0 * Math.random() - 1.0)
    mesh.position.z = 8000 * (2.0 * Math.random() - 1.0)

    mesh.rotation.x = Math.random() * Math.PI
    mesh.rotation.y = Math.random() * Math.PI
    mesh.rotation.z = Math.random() * Math.PI

    console.log(mesh)
    scene.add(mesh)
  }

  // 平行光源
  const light = new THREE.DirectionalLight(0xffffff, 0.3)
  light.intensity = 2 // 光の強さを倍に
  light.position.set(1, 1, 1) // ライトの方向
  scene.add(light)

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
  })
  renderer.setClearColor(new THREE.Color(0x222222))
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)

  // 初回実行
  // 箱を回転させる
  // tick();
  // function tick() {
  //   requestAnimationFrame(tick);
  //   box.rotation.x += 0.01;
  //   box.rotation.y += 0.01;
  // }
  renderer.render(scene, camera)
}
