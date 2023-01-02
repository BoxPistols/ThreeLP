import * as THREE from "./build/three.module.js";

let camera, scene, renderer;



init()

function init() {

  //カメラ
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    15000
  );
  camera.position.z = 250;


  // geometry
  const size = 250;

  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    specular: 0xffffff, //鏡面反射
    shininess: 50, //輝度
  });

  for (let i = 0; i < 2500; i++) {
    const mesh = new THREE.Mesh(geometry, material);

    //位置をランダムに決める
    mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
    mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
    mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);

    //回転度合をランダムに決める
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;
    mesh.rotation.z = Math.random() * Math.PI;

    mesh.matrixAutoUpdate = false; //自動で行列計算されるのを制御する
    mesh.updateMatrix(); //手動で行列更新する。

    scene.add(mesh);
  }

  //平行光線
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.03);
  dirLight.position.set(0, -1, 0).normalize(); //Y軸下方向から光源が出てる。
  dirLight.color.setHSL(0.1, 0.7, 0.5);
  scene.add(dirLight);

  // renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);
  //
}

