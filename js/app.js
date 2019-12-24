
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const body = document.querySelector('body');
body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xcccccc, 2);
scene.add(ambientLight);

camera.position.z = 250;

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const materialLoader = new THREE.MTLLoader()
materialLoader.setPath('models/')
    .load('12150_Christmas_Tree_V2_L2.mtl', function(materials) {
        materials.preload();

        const objLoader = new THREE.OBJLoader();
        objLoader.setPath('models/')
                 .setMaterials(materials)
            .load('12150_Christmas_Tree_V2_L2.obj', function(object) {
                object.position.y = - 95;
                console.log(object)
                scene.add(object);
            })
    })

const animation = () => {
    requestAnimationFrame(animation);
    renderer.render(scene, camera);
}

animation();

