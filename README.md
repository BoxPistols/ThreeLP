# Three.jsの基本的な使い方とコード

Three.jsは、WebGLを利用した3Dグラフィックスを制作するためのJavaScriptライブラリです。3Dのシーンを作成し、カメラやライトを設定し、3Dモデルやテキストや画像を表示することができます。

基本的な使い方としては、以下のような流れになります。

1. Three.jsを読み込む
1. canvas要素を作成する
1. Three.jsのレンダラーを作成する
1. Three.jsのシーンを作成する
1. Three.jsのカメラを作成する
1. 3Dモデルやテキストや画像などを作成する
1. シーンに3Dモデルやテキストや画像などを追加する
1. シーンをレンダラーで描画する

以下は、簡単な例を示します。

```js
<!-- Three.jsを読み込む -->
<script src="https://threejs.org/build/three.min.js"></script>

<!-- canvas要素を作成する -->
<canvas id="myCanvas"></canvas>

<script>
  // Three.jsのレンダラーを作成する
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("myCanvas") });

  // Three.jsのシーンを作成する
  const scene = new THREE.Scene();

  // Three.jsのカメラを作成する
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 1, 500);
  camera.position.set(0, 0, 5);

  // 3Dモデルを作成する
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  // シーンに3Dモデルを追加する
  scene.add(cube);

  // シーンをレンダラーで描画する
  renderer.render(scene, camera);
</script>
```

by [chat.openai.com](https://shrtm.nu/hna3)
