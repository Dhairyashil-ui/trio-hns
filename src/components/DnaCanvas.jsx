import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DnaCanvas({ scrolled }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera & WebGL Renderer ---
    const scene = new THREE.Scene();

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.set(0, 0, 105);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'auto';
    container.appendChild(renderer.domElement);

    // --- High-Density Particle Setup (Google Gemini Scale: 32,000 Particles) ---
    const STRAND_PARTICLES = 11000;    // Dense particles per strand (22,000 total for 2 backbones)
    const NUM_RUNGS = 64;              // Base pair ladder rungs
    const PARTICLES_PER_RUNG = 100;    // Densely populated base pairs (~6,400 particles)
    const AMBIENT_PARTICLES = 3600;    // Floating cosmic bio-dust aura

    const totalParticles = (STRAND_PARTICLES * 2) + (NUM_RUNGS * PARTICLES_PER_RUNG) + AMBIENT_PARTICLES;

    const positions = new Float32Array(totalParticles * 3);
    const basePositions = new Float32Array(totalParticles * 3);
    const rainbowColors = new Float32Array(totalParticles * 3); // For the special rainbow mode
    const customSizes = new Float32Array(totalParticles);
    const phases = new Float32Array(totalParticles);

    // UNIFORM PALETTES: Every mode has ONE uniform color for ALL particles at once!
    const PALETTES = [
      new THREE.Color('#38bdf8'), // 0: INITIAL: PURE SKY BLUE (All particles at once)
      new THREE.Color('#a855f7'), // 1: Pure Electric Violet / Neon Purple
      new THREE.Color('#10b981'), // 2: Pure Bio-Emerald Mint
      new THREE.Color('#fbbf24'), // 3: Pure Radiant Sun Gold
      new THREE.Color('#f43f5e'), // 4: Pure Neon Crimson Rose
      new THREE.Color('#00f0ff'), // 5: Multi-Color Rainbow Hologram Mode
    ];

    const HELIX_HEIGHT = 140;       // Vertical span
    const HELIX_RADIUS = 20.0;      // Outer radius
    const TURNS = 4.2;             // 4.2 full helical turns
    const TOTAL_ANGLE = TURNS * Math.PI * 2;
    const MINOR_GROOVE_OFFSET = 2.45; // Natural B-DNA major/minor groove angular offset (~140 deg)

    let pIdx = 0;

    // Helper: Gaussian distributed random number for thick organic ribbon look
    const randomGaussian = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    // 1. Build Helical Strands (Dual Antiparallel Sugar-Phosphate Ribbons)
    for (let s = 0; s < 2; s++) {
      const isStrand2 = s === 1;
      const angleOffset = isStrand2 ? MINOR_GROOVE_OFFSET : 0;

      for (let i = 0; i < STRAND_PARTICLES; i++) {
        const t = i / STRAND_PARTICLES; // 0 to 1 along height
        const nominalAngle = (t - 0.5) * TOTAL_ANGLE + angleOffset;
        const nominalY = (t - 0.5) * HELIX_HEIGHT;

        const spreadR = randomGaussian() * 1.35;
        const spreadY = randomGaussian() * 0.9;
        const spreadAngle = (randomGaussian() * 0.045);

        const r = HELIX_RADIUS + spreadR;
        const a = nominalAngle + spreadAngle;
        const y = nominalY + spreadY;

        const x = r * Math.cos(a);
        const z = r * Math.sin(a);

        const i3 = pIdx * 3;
        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        basePositions[i3] = x;
        basePositions[i3 + 1] = y;
        basePositions[i3 + 2] = z;

        // Rainbow mode auxiliary color
        const cRainbow = new THREE.Color();
        const strandHue = isStrand2 ? ((t * 3.8 + 0.5) % 1.0) : ((t * 3.8) % 1.0);
        cRainbow.setHSL(strandHue, 0.96, 0.58);
        rainbowColors[i3] = cRainbow.r;
        rainbowColors[i3 + 1] = cRainbow.g;
        rainbowColors[i3 + 2] = cRainbow.b;

        const size = (Math.abs(spreadR) < 0.5 ? 2.4 : 1.3) + Math.random() * 1.5;
        customSizes[pIdx] = size;
        phases[pIdx] = Math.random() * Math.PI * 2;

        pIdx++;
      }
    }

    // 2. Build Base-Pair Rungs (Dense Nucleotide Ladder Crossbars)
    for (let r = 0; r < NUM_RUNGS; r++) {
      const t = (r + 0.5) / NUM_RUNGS;
      const nominalY = (t - 0.5) * HELIX_HEIGHT;

      const a1 = (t - 0.5) * TOTAL_ANGLE;
      const a2 = a1 + MINOR_GROOVE_OFFSET;

      const p1x = HELIX_RADIUS * Math.cos(a1);
      const p1z = HELIX_RADIUS * Math.sin(a1);

      const p2x = HELIX_RADIUS * Math.cos(a2);
      const p2z = HELIX_RADIUS * Math.sin(a2);

      const rungHueA = (r * 0.16) % 1.0;
      const rungHueB = (r * 0.16 + 0.5) % 1.0;

      for (let j = 0; j < PARTICLES_PER_RUNG; j++) {
        const u = j / (PARTICLES_PER_RUNG - 1);
        
        const jx = THREE.MathUtils.lerp(p1x, p2x, u) + randomGaussian() * 0.45;
        const jy = nominalY + randomGaussian() * 0.45;
        const jz = THREE.MathUtils.lerp(p1z, p2z, u) + randomGaussian() * 0.45;

        const i3 = pIdx * 3;
        positions[i3] = jx;
        positions[i3 + 1] = jy;
        positions[i3 + 2] = jz;

        basePositions[i3] = jx;
        basePositions[i3 + 1] = jy;
        basePositions[i3 + 2] = jz;

        const centerDist = Math.abs(u - 0.5) * 2;

        // Rainbow mode auxiliary color
        const cRainbow = new THREE.Color();
        if (centerDist < 0.22) {
          cRainbow.setHSL(0.12, 1.0, 0.65);
          cRainbow.lerp(new THREE.Color('#ffffff'), 0.5);
        } else if (u < 0.5) {
          cRainbow.setHSL(rungHueA, 1.0, 0.6);
        } else {
          cRainbow.setHSL(rungHueB, 1.0, 0.6);
        }

        rainbowColors[i3] = cRainbow.r;
        rainbowColors[i3 + 1] = cRainbow.g;
        rainbowColors[i3 + 2] = cRainbow.b;

        const size = centerDist < 0.2 ? 3.0 : 1.4 + Math.random() * 1.3;
        customSizes[pIdx] = size;
        phases[pIdx] = Math.random() * Math.PI * 2;

        pIdx++;
      }
    }

    // 3. Build Floating Cosmic Bio-Dust Aura
    for (let a = 0; a < AMBIENT_PARTICLES; a++) {
      const radius = 5 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * (HELIX_HEIGHT + 45);
      const x = radius * Math.cos(theta);
      const z = radius * Math.sin(theta);

      const i3 = pIdx * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;

      // Rainbow mode auxiliary color
      const cRainbow = new THREE.Color();
      cRainbow.setHSL(Math.random(), 0.95, 0.62);
      rainbowColors[i3] = cRainbow.r * 0.85;
      rainbowColors[i3 + 1] = cRainbow.g * 0.85;
      rainbowColors[i3 + 2] = cRainbow.b * 0.85;

      const size = 0.9 + Math.random() * 2.2;
      customSizes[pIdx] = size;
      phases[pIdx] = Math.random() * Math.PI * 2;

      pIdx++;
    }

    // --- Create Buffer Geometry ---
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('rainbowColor', new THREE.BufferAttribute(rainbowColors, 3));
    geometry.setAttribute('customSize', new THREE.BufferAttribute(customSizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

    // --- GPU WebGL Shaders: Uniform Color for Whole DNA + Smooth Click Transition ---
    const initialColor = PALETTES[0].clone(); // 100% PURE SKY BLUE AT START

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uColorA: { value: initialColor.clone() }, // Previous uniform color
        uColorB: { value: initialColor.clone() }, // Target uniform color
        uTransition: { value: 0.0 },              // 0.0 to 1.0 lerp factor
        uUseRainbow: { value: 0.0 },              // 0.0 = 100% Uniform One Color, 1.0 = Rainbow
        uWaveRadius: { value: -100.0 },
        uWaveWidth: { value: 45.0 },
        uWaveCenter: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexColors: false,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending, // Maximum bio-luminescence & bloom against pure black
      vertexShader: `
        attribute vec3 rainbowColor;
        attribute float customSize;
        attribute float aPhase;
        
        varying vec3 vColor;
        varying float vAlpha;
        
        uniform float uTime;
        uniform float uPixelRatio;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform float uTransition;
        uniform float uUseRainbow;
        uniform float uWaveRadius;
        uniform float uWaveWidth;
        uniform vec3 uWaveCenter;

        void main() {
          // Distance from 3D shockwave click ripple center
          float distToWave = length(position - uWaveCenter);

          // Wavefront crest highlight
          float waveRing = 0.0;
          if (uWaveRadius >= 0.0) {
            float diff = abs(distToWave - uWaveRadius);
            if (diff < uWaveWidth) {
              waveRing = 1.0 - (diff / uWaveWidth);
            }
          }

          // Smooth interpolation between previous uniform color and target uniform color
          vec3 uniformCurrent = mix(uColorA, uColorB, uTransition);

          // If in rainbow mode, blend towards rainbow; otherwise 100% ONE UNIFORM COLOR for all particles
          vec3 finalColor = mix(uniformCurrent, rainbowColor, uUseRainbow * uTransition);

          // Add extra intense luminous energy along the expanding wave crest
          finalColor += vec3(waveRing * 0.65);

          vColor = finalColor;

          // Organic breathing & twinkle wave
          float pulse = 0.82 + 0.18 * sin(uTime * 2.5 + aPhase * 6.28318);
          vAlpha = pulse;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

          // Point size boost during shockwave ripple
          float sizeBoost = 1.0 + waveRing * 1.6;
          gl_PointSize = (customSize * pulse * sizeBoost) * uPixelRatio * (280.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          // Circular Gaussian-like smooth soft particle sprite
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          // Multi-layer anti-aliased luminous falloff
          float core = 1.0 - smoothstep(0.0, 0.20, dist);
          float aura = 1.0 - smoothstep(0.15, 0.50, dist);
          float alpha = (core * 0.52 + aura * 0.48) * vAlpha;

          // Diamond sparkle center
          vec3 finalColor = mix(vColor, vec3(1.0, 1.0, 1.0), core * 0.42);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
    });

    const dnaPoints = new THREE.Points(geometry, material);

    // Group wrapper for dynamic 3D orientation & parallax tilt
    const dnaGroup = new THREE.Group();
    dnaGroup.add(dnaPoints);

    // Cinematic angle across the hero stage
    dnaGroup.rotation.z = -0.32;
    dnaGroup.rotation.x = 0.22;
    dnaGroup.position.set(0, 0, 0);

    scene.add(dnaGroup);

    // --- Interactive Mechanics: Click Color Transformation & Shockwave ---
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-9999, -9999);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const planeIntersect = new THREE.Vector3();
    const localHit = new THREE.Vector3(0, 0, 0);
    let isPointerOver = false;

    // Palette State:
    // Starts at 0 (100% PURE SKY BLUE for ALL particles at once)
    let currentPaletteIdx = 0;
    let targetPaletteIdx = 0;
    let transitionProgress = 1.0; // 1.0 means steady state at current color

    // Shockwave State
    let waveRadius = -100.0;
    let waveActive = false;
    const WAVE_SPEED = 240.0; // Units per second
    const WAVE_MAX_RADIUS = 260.0;

    // Pointer move listener
    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      pointer.x = x;
      pointer.y = y;
      isPointerOver = true;
    };

    const onPointerLeave = () => {
      isPointerOver = false;
      pointer.set(-9999, -9999);
    };

    // CLICK / TAP HANDLER:
    // Cycles ONE UNIFORM COLOR for the entire animation with an expanding shockwave!
    const onPointerDown = (e) => {
      // Find 3D click position
      raycaster.setFromCamera(pointer, camera);
      if (raycaster.ray.intersectPlane(plane, planeIntersect)) {
        localHit.copy(planeIntersect);
        dnaGroup.worldToLocal(localHit);
      } else {
        localHit.set(0, 0, 0);
      }

      // Trigger expanding shockwave ripple from click location
      material.uniforms.uWaveCenter.value.copy(localHit);
      waveRadius = 0.0;
      waveActive = true;

      // Lock current color as ColorA
      if (transitionProgress < 1.0) {
        // If mid-transition, evaluate current color
        const midColor = new THREE.Color().lerpColors(
          PALETTES[currentPaletteIdx],
          PALETTES[targetPaletteIdx],
          transitionProgress
        );
        material.uniforms.uColorA.value.copy(midColor);
      } else {
        material.uniforms.uColorA.value.copy(PALETTES[targetPaletteIdx]);
      }

      // Advance to next palette index
      currentPaletteIdx = targetPaletteIdx;
      targetPaletteIdx = (targetPaletteIdx + 1) % PALETTES.length;

      // Set target color
      material.uniforms.uColorB.value.copy(PALETTES[targetPaletteIdx]);

      // Check if target is rainbow mode (index 5)
      material.uniforms.uUseRainbow.value = (targetPaletteIdx === 5) ? 1.0 : 0.0;

      // Reset transition progress to 0.0 to animate towards 1.0
      transitionProgress = 0.0;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('pointerdown', onPointerDown);

    // --- Window Resize Listener ---
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };

    window.addEventListener('resize', onResize);

    // --- High-Performance Animation Loop ---
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Update shader time uniform
      material.uniforms.uTime.value = elapsedTime;

      // Axial rotation of the DNA Double Helix
      dnaPoints.rotation.y += delta * 0.40;

      // Smooth Animated Transition: Lerp transitionProgress from 0.0 to 1.0
      if (transitionProgress < 1.0) {
        transitionProgress = Math.min(1.0, transitionProgress + delta * 2.2);
        material.uniforms.uTransition.value = transitionProgress;
      }

      // Expand active shockwave wave
      if (waveActive) {
        waveRadius += delta * WAVE_SPEED;
        material.uniforms.uWaveRadius.value = waveRadius;
        if (waveRadius > WAVE_MAX_RADIUS) {
          waveActive = false;
          material.uniforms.uWaveRadius.value = -100.0;
        }
      }

      // Parallax mouse tilt
      if (isPointerOver) {
        const targetRotY = pointer.x * 0.40;
        const targetRotX = 0.22 - pointer.y * 0.25;
        dnaGroup.rotation.y += (targetRotY - dnaGroup.rotation.y) * 0.05;
        dnaGroup.rotation.x += (targetRotX - dnaGroup.rotation.x) * 0.05;
      } else {
        dnaGroup.rotation.y += (0 - dnaGroup.rotation.y) * 0.03;
        dnaGroup.rotation.x += (0.22 - dnaGroup.rotation.x) * 0.03;
      }

      // Floating bio-wave oscillation
      dnaGroup.position.y = Math.sin(elapsedTime * 0.9) * 2.2;

      // Real-time biological harmonic undulation along the DNA
      const posArr = geometry.attributes.position.array;
      const waveFreq = 0.06;
      const waveSpeed = 2.2;
      const dynamicCount = STRAND_PARTICLES * 2 + NUM_RUNGS * PARTICLES_PER_RUNG;

      for (let i = 0; i < dynamicCount; i += 2) {
        const i3 = i * 3;
        const by = basePositions[i3 + 1];
        const wave = Math.sin(by * waveFreq + elapsedTime * waveSpeed) * 0.8;
        posArr[i3] = basePositions[i3 + 1] ? (basePositions[i3] + wave * 0.35) : basePositions[i3];
        posArr[i3 + 2] = basePositions[i3 + 2] + wave * 0.35;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup on Unmount ---
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="dna-canvas-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
        zIndex: 1,
        opacity: scrolled ? 0 : 1,
        visibility: scrolled ? 'hidden' : 'visible',
        transition: 'opacity 3.0s cubic-bezier(0.16, 1, 0.3, 1), visibility 3.0s ease',
        pointerEvents: scrolled ? 'none' : 'auto',
      }}
    />
  );
}
