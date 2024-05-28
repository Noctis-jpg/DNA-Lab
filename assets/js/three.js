        // Scene, camera and renderer setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(200, 200); // Canvas boyutunu div boyutuna uyacak şekilde ayarlayın
        document.getElementById('animation-container').appendChild(renderer.domElement);

        // Star geometry and material
        const geometry = new THREE.PlaneGeometry(0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
        const star = new THREE.Mesh(geometry, material);
        scene.add(star);

        // Set initial position
        star.position.set(0, 0, -5);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            star.rotation.x += 0.01;
            star.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        // Camera positioning
        camera.position.z = 5;

        // Start animation
        animate();