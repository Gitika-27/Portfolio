import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface ProjectRibbonItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  accent: string;
  category: string;
  githubUrl: string;
}

const ribbonProjects: ProjectRibbonItem[] = [
  {
    id: 'catchphish',
    title: 'CatchPhish',
    subtitle: 'Explainable Phishing Intelligence',
    image: '/images/projects/catchphish.png',
    accent: '#FACC15',
    category: 'Applied ML & Cyber',
    githubUrl: 'https://github.com/Gitika-27',
  },
  {
    id: 'trafficsense',
    title: 'TrafficSense AI',
    subtitle: 'Predictive Smart City Intelligence',
    image: '/images/projects/trafficsense.png',
    accent: '#D66F43',
    category: 'Urban Analytics',
    githubUrl: 'https://github.com/Gitika-27',
  },
  {
    id: 'futureforge',
    title: 'FutureForge',
    subtitle: 'Patch Min-Cut Planner',
    image: '/images/projects/futureforge.png',
    accent: '#E68962',
    category: 'Lab & Ingestion (P1)',
    githubUrl: 'https://github.com/Gitika-27',
  },
  {
    id: 'wealthavatar',
    title: 'WealthAvatar',
    subtitle: 'Compound Growth & Milestone Planner',
    image: '/images/projects/wealthavatar.png',
    accent: '#10B981',
    category: 'Fintech Planning',
    githubUrl: 'https://github.com/Gitika-27',
  },
  {
    id: 'algorithm-lab',
    title: 'Algorithm Lab',
    subtitle: 'Interactive DAA Experiments',
    image: '/images/projects/algorithm-lab.png',
    accent: '#38BDF8',
    category: 'Algorithms & Visuals',
    githubUrl: 'https://github.com/Gitika-27',
  },
];

interface VanteRibbonProps {
  onSelectProject?: (id: string) => void;
  className?: string;
}

/** Responsive ribbon configuration based on viewport width */
function getRibbonConfig(viewportWidth: number) {
  if (viewportWidth >= 1920) {
    return {
      panelWidth: 4.8,
      panelHeight: 2.75,
      cameraZ: 12.5,
      fov: 44,
      curveScale: 1.2,
      curveYScale: 1.0,
    };
  } else if (viewportWidth >= 1440) {
    return {
      panelWidth: 4.4,
      panelHeight: 2.5,
      cameraZ: 12.0,
      fov: 43,
      curveScale: 1.1,
      curveYScale: 1.0,
    };
  } else if (viewportWidth >= 1366) {
    return {
      panelWidth: 4.2,
      panelHeight: 2.4,
      cameraZ: 11.8,
      fov: 42,
      curveScale: 1.05,
      curveYScale: 1.0,
    };
  } else if (viewportWidth >= 1024) {
    return {
      panelWidth: 4.0,
      panelHeight: 2.3,
      cameraZ: 11.5,
      fov: 42,
      curveScale: 1.0,
      curveYScale: 1.0,
    };
  } else if (viewportWidth >= 768) {
    return {
      panelWidth: 3.6,
      panelHeight: 2.05,
      cameraZ: 11.0,
      fov: 42,
      curveScale: 0.9,
      curveYScale: 0.95,
    };
  } else {
    // Mobile
    return {
      panelWidth: 3.2,
      panelHeight: 1.85,
      cameraZ: 12.5,
      fov: 44,
      curveScale: 0.78,
      curveYScale: 0.85,
    };
  }
}

export const VanteRibbon: React.FC<VanteRibbonProps> = ({ onSelectProject, className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    let config = getRibbonConfig(window.innerWidth);
    const camera = new THREE.PerspectiveCamera(config.fov, width / height, 0.1, 100);
    camera.position.set(0, 0, config.cameraZ);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffedd5, 2.0);
    dirLight.position.set(5, 8, 8);
    scene.add(dirLight);

    const accentLight = new THREE.PointLight(0xd66f43, 3.5, 20);
    accentLight.position.set(-4, -2, 4);
    scene.add(accentLight);

    // 3. Define 3D Serpentine Ribbon Path — responsive curve
    const baseCurvePoints = [
      [-6.0, -2.5, -4.0],
      [-3.6, -1.0, -1.8],
      [-0.8, 1.2, 0.5],
      [1.8, 1.6, 1.4],
      [4.0, 0.2, 0.0],
      [5.2, -1.8, -2.2],
      [2.8, -2.8, -4.0],
      [-1.5, -3.2, -5.0],
      [-6.0, -2.5, -4.0],
    ];

    function buildCurve(cfg: ReturnType<typeof getRibbonConfig>) {
      const pts = baseCurvePoints.map(
        ([x, y, z]) =>
          new THREE.Vector3(x * cfg.curveScale, y * cfg.curveYScale, z * 0.95)
      );
      return new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
    }

    let curve = buildCurve(config);

    // Continuous glowing spine tube along the ribbon path
    let spineGeo = new THREE.TubeGeometry(curve, 180, 0.045, 8, true);
    const spineMat = new THREE.MeshStandardMaterial({
      color: 0xd66f43,
      emissive: 0xa85b3d,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    let spineMesh = new THREE.Mesh(spineGeo, spineMat);
    scene.add(spineMesh);

    // Secondary guide ribbon rail
    function buildRailCurve(cfg: ReturnType<typeof getRibbonConfig>) {
      const pts = baseCurvePoints.map(
        ([x, y, z]) =>
          new THREE.Vector3(x * cfg.curveScale, y * cfg.curveYScale - 0.25, z * 0.95 - 0.15)
      );
      return new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
    }

    let railCurve = buildRailCurve(config);
    let railGeo = new THREE.TubeGeometry(railCurve, 180, 0.02, 6, true);
    const railMat = new THREE.MeshStandardMaterial({
      color: 0xf2eee8,
      emissive: 0xd66f43,
      emissiveIntensity: 0.3,
      roughness: 0.3,
      metalness: 0.5,
    });
    let railMesh = new THREE.Mesh(railGeo, railMat);
    scene.add(railMesh);

    // 4. Create Project Screenshot Panels along the Ribbon
    const textureLoader = new THREE.TextureLoader();
    const panelGroup = new THREE.Group();
    scene.add(panelGroup);

    interface PanelMeshItem {
      mesh: THREE.Group;
      progress: number;
      project: ProjectRibbonItem;
      index: number;
      frontMesh: THREE.Mesh;
      frameMesh: THREE.Mesh;
    }

    let panelMeshes: PanelMeshItem[] = [];

    function createPanels(cfg: ReturnType<typeof getRibbonConfig>) {
      // Clear existing panels
      panelMeshes.forEach((item) => {
        panelGroup.remove(item.mesh);
        item.mesh.traverse((child) => {
          if ((child as THREE.Mesh).geometry) (child as THREE.Mesh).geometry.dispose();
          if ((child as THREE.Mesh).material) {
            const mat = (child as THREE.Mesh).material;
            if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
            else (mat as THREE.Material).dispose();
          }
        });
      });
      panelMeshes = [];

      const pW = cfg.panelWidth;
      const pH = cfg.panelHeight;

      ribbonProjects.forEach((proj, idx) => {
        const panelWrapper = new THREE.Group();

        // Card surface geometry (subtly curved)
        const planeGeo = new THREE.PlaneGeometry(pW, pH, 16, 8);
        const pos = planeGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const x = pos.getX(i);
          const z = -Math.sin(((x / pW) * Math.PI) / 2) * 0.18;
          pos.setZ(i, z);
        }
        planeGeo.computeVertexNormals();

        // Texture
        const texture = textureLoader.load(proj.image);
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;

        // Front Screenshot Material
        const frontMat = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.25,
          metalness: 0.15,
          side: THREE.DoubleSide,
        });

        const frontMesh = new THREE.Mesh(planeGeo, frontMat);
        panelWrapper.add(frontMesh);

        // Glassy backplate & sleek dark border frame
        const frameGeo = new THREE.PlaneGeometry(pW + 0.14, pH + 0.14, 16, 8);
        const frameMat = new THREE.MeshStandardMaterial({
          color: 0x191817,
          roughness: 0.3,
          metalness: 0.7,
          side: THREE.DoubleSide,
        });
        const frameMesh = new THREE.Mesh(frameGeo, frameMat);
        frameMesh.position.z = -0.015;
        panelWrapper.add(frameMesh);

        // Glowing corner border edge
        const edgeGeo = new THREE.EdgesGeometry(frameGeo);
        const edgeMat = new THREE.LineBasicMaterial({
          color: new THREE.Color(proj.accent),
          linewidth: 2,
          transparent: true,
          opacity: 0.75,
        });
        const edgeLine = new THREE.LineSegments(edgeGeo, edgeMat);
        panelWrapper.add(edgeLine);

        panelGroup.add(panelWrapper);

        panelMeshes.push({
          mesh: panelWrapper,
          progress: idx / ribbonProjects.length,
          project: proj,
          index: idx,
          frontMesh: frontMesh,
          frameMesh: frameMesh,
        });
      });
    }

    createPanels(config);

    // 5. Mouse Pointer & Scroll Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollOffset = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / height) * 2 - 1);
      mouse.targetX = nx * 0.8;
      mouse.targetY = ny * 0.6;
    };

    const onWindowScroll = () => {
      scrollOffset = window.scrollY * 0.00035;
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('scroll', onWindowScroll);

    // 6. Animation Loop
    let animationFrameId: number;
    let baseProgress = 0;
    const speed = 0.0012;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Interpolate mouse smoothly
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Camera parallax tilt
      camera.position.x = mouse.x * 0.9;
      camera.position.y = mouse.y * 0.7;
      camera.lookAt(0.3, 0.1, 0);

      // Advance ribbon
      baseProgress += speed;

      let highestZ = -999;
      let frontIndex = 0;

      panelMeshes.forEach((item) => {
        // Compute u along the closed curve
        let u = (item.progress + baseProgress + scrollOffset) % 1;
        if (u < 0) u += 1;

        const pos = curve.getPointAt(u);
        const tangent = curve.getTangentAt(u).normalize();

        item.mesh.position.copy(pos);

        // Orient panel along the curve tangent with banking
        const up = new THREE.Vector3(0, 1, 0);
        const normal = new THREE.Vector3().crossVectors(tangent, up).normalize();
        const adjustedUp = new THREE.Vector3().crossVectors(normal, tangent).normalize();

        const m = new THREE.Matrix4();
        m.makeBasis(tangent, adjustedUp, normal);
        item.mesh.quaternion.setFromRotationMatrix(m);

        // Add subtle tilt facing the viewer
        item.mesh.rotateY(Math.PI / 2);
        item.mesh.rotateX(0.12);

        // Detect which panel is currently closest to the front
        if (pos.z > highestZ) {
          highestZ = pos.z;
          frontIndex = item.index;
        }

        // Depth scale and opacity
        const depthFactor = THREE.MathUtils.clamp((pos.z + 4) / 6, 0.45, 1.05);
        item.mesh.scale.set(depthFactor, depthFactor, depthFactor);
      });

      setActiveProjectIndex(frontIndex);

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize handler — full responsive rebuild
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 500;

      const newConfig = getRibbonConfig(window.innerWidth);
      config = newConfig;

      camera.aspect = width / height;
      camera.fov = newConfig.fov;
      camera.position.z = newConfig.cameraZ;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // Rebuild curve
      curve = buildCurve(newConfig);
      railCurve = buildRailCurve(newConfig);

      // Update spine mesh
      scene.remove(spineMesh);
      spineGeo.dispose();
      spineGeo = new THREE.TubeGeometry(curve, 180, 0.045, 8, true);
      spineMesh = new THREE.Mesh(spineGeo, spineMat);
      scene.add(spineMesh);

      // Update rail mesh
      scene.remove(railMesh);
      railGeo.dispose();
      railGeo = new THREE.TubeGeometry(railCurve, 180, 0.02, 6, true);
      railMesh = new THREE.Mesh(railGeo, railMat);
      scene.add(railMesh);

      // Rebuild panels at new size
      createPanels(newConfig);
    };
    window.addEventListener('resize', handleResize);

    // 8. Cleanup
    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      spineGeo.dispose();
      spineMat.dispose();
      railGeo.dispose();
      railMat.dispose();
    };
  }, []);

  const activeProject = ribbonProjects[activeProjectIndex] || ribbonProjects[0];

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ribbon-inner flex items-center justify-center select-none overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Active Project Indicator Card (Glassmorphic) */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-20 max-w-xs sm:max-w-sm w-full p-4 sm:p-5 rounded-2xl bg-[#191817]/90 border border-[#F2EEE8]/15 backdrop-blur-xl shadow-2xl shadow-black/60 transition-all duration-300">
        <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[10px] text-[#A9A29A]">
          <span className="uppercase tracking-wider flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: activeProject.accent }}
            ></span>
            {activeProject.category}
          </span>
          <span>0{activeProjectIndex + 1} / 0{ribbonProjects.length}</span>
        </div>

        <h4 className="font-display text-lg sm:text-xl font-bold text-[#F2EEE8] leading-tight mb-1">
          {activeProject.title}
        </h4>

        <p className="font-editorial italic text-xs sm:text-sm text-[#C8C2BA] mb-4 line-clamp-1">
          {activeProject.subtitle}
        </p>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#F2EEE8]/10 text-xs font-mono">
          <a
            href="#work"
            onClick={() => onSelectProject?.(activeProject.id)}
            className="flex items-center gap-1 text-[#F2EEE8] hover:text-[#D66F43] transition-colors"
          >
            <span>Inspect In Work</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={activeProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#A9A29A] hover:text-[#F2EEE8] transition-colors"
          >
            <span>Repo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Ribbon Control & Interactive Navigation Dots */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 pointer-events-auto">
        {ribbonProjects.map((p, idx) => (
          <a
            key={p.id}
            href="#work"
            onClick={() => onSelectProject?.(p.id)}
            className={`transition-all duration-300 rounded-full ${
              idx === activeProjectIndex
                ? 'w-7 h-2 bg-[#D66F43]'
                : 'w-2 h-2 bg-[#F2EEE8]/30 hover:bg-[#F2EEE8]/60'
            }`}
            title={p.title}
            aria-label={`Jump to ${p.title}`}
          />
        ))}
      </div>
    </div>
  );
};
