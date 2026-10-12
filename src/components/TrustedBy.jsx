import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const PARTNERS = [
  {
    id: 'ssd',
    name: 'SSD Hospital',
    type: 'Sai Snehdeep Hospital',
    logo: '/assets/img/ssd.jpeg',
    accent: '#8b5cf6'
  },
  {
    id: 'gsmc',
    name: 'Government S.M.C. Hospital',
    type: 'Medical College & Hospital',
    logo: '/assets/img/Logo_gsmc_my_creation.png',
    accent: '#38bdf8'
  },
  {
    id: 'lifeline',
    name: 'Lifeline Hospital',
    type: 'Multi-Speciality Centre',
    logo: '/assets/img/lifeline.jpeg',
    accent: '#10b981'
  },
  {
    id: 'queens',
    name: 'Queens Hospital',
    type: 'Super Speciality Institute',
    logo: '/assets/img/Quuens%20logo.png',
    accent: '#a855f7'
  },
  {
    id: 'samarth-main',
    name: 'Shri Swami Samarth Hospital',
    type: 'NABH Accredited Hospital',
    logo: '/assets/img/logoMain.jpg',
    accent: '#f59e0b'
  },
  {
    id: 'samarth-heart',
    name: 'Shri Swami Samarth Heart Care',
    type: 'Cardiac Sciences Institute',
    logo: '/assets/img/WhatsApp%20Image%202022-12-28%20at%209.16.32%20PM.jpeg',
    accent: '#ef4444'
  },
  {
    id: 'samarth-care',
    name: 'Shri Swami Samarth Care',
    type: 'Critical & Emergency Care',
    logo: '/assets/img/Logo%20(1).png',
    accent: '#06b6d4'
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath Hospital',
    type: 'Advanced Trauma Care',
    logo: '/assets/img/kedarnathlogo.jpg',
    accent: '#3b82f6'
  },
  {
    id: 'sunrise',
    name: 'Sunrise Super Speciality Hospital',
    type: 'Tertiary Care Hospital',
    logo: '/assets/img/sunriseHospital.webp',
    accent: '#ec4899'
  },
  {
    id: 'apex-care',
    name: 'Apex Clinical Network',
    type: 'Regional Healthcare Chain',
    icon: 'hospital',
    accent: '#14b8a6'
  },
  {
    id: 'metro-clinical',
    name: 'Metro Health Institute',
    type: 'Research & Diagnostics',
    icon: 'pulse',
    accent: '#6366f1'
  },
  {
    id: 'global-care',
    name: 'Global Care Multispeciality',
    type: 'International Clinical Center',
    icon: 'shield',
    accent: '#22c55e'
  }
];

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y + radius, x + radius, y);
  ctx.closePath();
}

/**
 * Creates ultra-crisp high-resolution 2D CanvasTexture representing a translucent glass card
 * with genuine company logo, subtle specular sheen, delicate borders, and crisp typography.
 */
function createCardTexture(partner) {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 480;
  const ctx = canvas.getContext('2d');

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  let loadedImg = null;

  const renderCard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Soft Ambient Floating Shadow Under Glass Card (Realistic depth, subtle elevation)
    ctx.save();
    ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
    ctx.shadowBlur = 28;
    ctx.shadowOffsetY = 12;
    ctx.fillStyle = '#ffffff';
    drawRoundedRect(ctx, 16, 16, 768, 448, 28);
    ctx.fill();
    ctx.restore();

    // 2. Translucent Crystalline Liquid-Glass Card Fill (Crisp cool-white)
    const bgGrad = ctx.createLinearGradient(16, 16, 784, 464);
    bgGrad.addColorStop(0, 'rgba(255, 255, 255, 0.99)');
    bgGrad.addColorStop(0.45, 'rgba(252, 254, 255, 0.96)');
    bgGrad.addColorStop(1, 'rgba(246, 250, 255, 0.98)');
    ctx.fillStyle = bgGrad;
    drawRoundedRect(ctx, 16, 16, 768, 448, 28);
    ctx.fill();

    // 3. Subtle Specular Glass Sheen Reflection (Top highlight without excessive glow)
    ctx.save();
    const sheenGrad = ctx.createLinearGradient(16, 16, 16, 210);
    sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.70)');
    sheenGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.18)');
    sheenGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = sheenGrad;
    drawRoundedRect(ctx, 16, 16, 768, 190, 28);
    ctx.fill();
    ctx.restore();

    // 4. Delicate Crisp Glass Border (Refined edge highlights)
    const borderGrad = ctx.createLinearGradient(16, 16, 784, 464);
    borderGrad.addColorStop(0, 'rgba(226, 232, 240, 0.95)');
    borderGrad.addColorStop(0.5, 'rgba(241, 245, 249, 0.85)');
    borderGrad.addColorStop(1, 'rgba(203, 213, 225, 0.9)');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, 16, 16, 768, 448, 28);
    ctx.stroke();

    // 5. Logo Rendering Area (Centered, Sharp, True Vibrant Colors, Correctly Proportioned)
    const logoBoxX = 110;
    const logoBoxY = 46;
    const logoBoxW = 580;
    const logoBoxH = 220;

    if (loadedImg && loadedImg.complete && loadedImg.naturalWidth > 0) {
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      const imgW = loadedImg.naturalWidth;
      const imgH = loadedImg.naturalHeight;
      const scale = Math.min(logoBoxW / imgW, logoBoxH / imgH, 1.35);
      const drawW = imgW * scale;
      const drawH = imgH * scale;
      const drawX = logoBoxX + (logoBoxW - drawW) / 2;
      const drawY = logoBoxY + (logoBoxH - drawH) / 2;

      ctx.drawImage(loadedImg, drawX, drawY, drawW, drawH);
      ctx.restore();
    } else {
      // Elegant healthcare vector badge emblem (for partners without image file)
      ctx.save();
      const cx = 400;
      const cy = 152;

      // Outer glowing emblem ring
      ctx.strokeStyle = `${partner.accent}44`;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 54, 0, Math.PI * 2);
      ctx.stroke();

      // Inner soft emblem background
      ctx.fillStyle = `${partner.accent}14`;
      ctx.beginPath();
      ctx.arc(cx, cy, 53, 0, Math.PI * 2);
      ctx.fill();

      // Stylized Medical Cross
      ctx.fillStyle = partner.accent;
      ctx.shadowColor = `${partner.accent}40`;
      ctx.shadowBlur = 12;
      const barW = 16;
      const barH = 56;
      ctx.fillRect(cx - barW / 2, cy - barH / 2, barW, barH);
      ctx.fillRect(cx - barH / 2, cy - barH / 2, barH, barW);
      ctx.restore();
    }

    // 6. Typography: Hospital / Partner Name (Crisp Slate Charcoal)
    ctx.font = '700 32px "Google Sans", "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(partner.name, 400, 342);

    // 7. Typography: Subtitle / Hospital Classification
    ctx.font = '500 20px "Google Sans", "Plus Jakarta Sans", system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(partner.type, 400, 392);
  };

  renderCard();

  if (partner.logo) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = partner.logo;
    const onLoad = () => {
      loadedImg = img;
      renderCard();
      texture.needsUpdate = true;
    };
    img.onload = onLoad;
    img.onerror = () => {
      loadedImg = null;
      renderCard();
      texture.needsUpdate = true;
    };
    if (img.complete && img.naturalWidth > 0) {
      onLoad();
    }
  }

  return texture;
}

export default function TrustedBy() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [animationPhase, setAnimationPhase] = useState('idle'); // 'idle' | 'bouncing' | 'loaded'

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let autoRotate = !prefersReducedMotion;

    // Scene Setup: Transparent background blending seamlessly with page
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 440;

    // Camera with realistic depth perspective, centered on carousel
    const isMobile = width < 768;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, isMobile ? 8.6 : 7.6);
    camera.lookAt(0, 0, 0);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 3D Cylindrical Ring Setup - Centered symmetrically below top heading
    const ringGroup = new THREE.Group();
    ringGroup.position.set(0, 0, 0);
    scene.add(ringGroup);

    // Geometry & Radius tuned to guarantee ZERO overlap between adjacent cards
    // 12 cards, 30 deg apart. At radius 4.35, chord distance between centers is 2.25 units.
    // Card width is 1.62 units. Thus, gap between cards is 2.25 - 1.62 = 0.63 units (generous, crisp separation).
    const radius = 4.35;
    const count = PARTNERS.length;
    const cardGeometry = new THREE.PlaneGeometry(1.62, 0.98);
    const texturesToDispose = [];
    const materialsToDispose = [];
    const meshes = [];

    PARTNERS.forEach((partner, i) => {
      const angle = (i / count) * Math.PI * 2;
      const texture = createCardTexture(partner);
      texturesToDispose.push(texture);

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      materialsToDispose.push(material);

      const mesh = new THREE.Mesh(cardGeometry, material);
      mesh.position.x = radius * Math.sin(angle);
      mesh.position.z = radius * Math.cos(angle);
      mesh.position.y = 0;
      mesh.rotation.y = angle;

      ringGroup.add(mesh);
      meshes.push(mesh);
    });

    // Rotation & Drag Physics State
    let rotationY = 0;
    const baseSpeed = 0.0022;
    let dragVelocity = 0;
    let isDragging = false;
    let pointerStartX = 0;
    let previousPointerX = 0;
    let isHovered = false;

    // Pointer Event Listeners for Interactive Drag/Swipe
    const onPointerDown = (e) => {
      isDragging = true;
      pointerStartX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      previousPointerX = pointerStartX;
      dragVelocity = 0;
      canvas.style.cursor = 'grabbing';
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const deltaX = currentX - previousPointerX;
      previousPointerX = currentX;

      const sensitivity = isMobile ? 0.0055 : 0.004;
      rotationY += deltaX * sensitivity;
      dragVelocity = deltaX * sensitivity;
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    canvas.addEventListener('mouseenter', onMouseEnter);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // Animation Loop with Visibility & Intersection Observation
    let animId;
    let isVisibleOnScreen = true;
    let isBouncing = false;
    let bounceStartTime = 0;

    window.__triggerTrustedBounce = () => {
      isBouncing = true;
      bounceStartTime = performance.now();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleOnScreen = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const worldPos = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisibleOnScreen) return;

      // Handle spring bouncing entrance for round 3D cylindrical carousel
      if (!isBouncing) {
        ringGroup.scale.set(0.0001, 0.0001, 0.0001);
      } else {
        const elapsed = (performance.now() - bounceStartTime) / 1000;
        if (elapsed < 1.6) {
          // Damped harmonic spring: shoots to ~1.12, settles at 1.0
          const scaleVal = Math.max(0, 1 - Math.exp(-4.2 * elapsed) * Math.cos(9.6 * elapsed));
          ringGroup.scale.set(scaleVal, scaleVal, scaleVal);

          // Height spring bounce
          const yOffset = -Math.exp(-4.2 * elapsed) * Math.sin(8.0 * elapsed) * 0.3;
          ringGroup.position.y = yOffset;
          ringGroup.position.x = 0;

          // Initial rotational impulse on arrival
          const speedKick = Math.exp(-3.2 * elapsed) * 0.02;
          rotationY += speedKick;
        } else {
          ringGroup.scale.set(1, 1, 1);
          ringGroup.position.y = 0;
          ringGroup.position.x = 0;
        }
      }

      // Handle continuous rotation or drag momentum
      if (!isDragging) {
        if (Math.abs(dragVelocity) > 0.0001) {
          rotationY += dragVelocity;
          dragVelocity *= 0.94; // Smooth inertial decay
        } else if (autoRotate) {
          // Slow continuous rotation, decelerates smoothly on hover
          const currentSpeed = isHovered ? baseSpeed * 0.35 : baseSpeed;
          rotationY += currentSpeed;
        }
      }

      ringGroup.rotation.y = rotationY;

      const time = performance.now() * 0.001;
      meshes.forEach((mesh, idx) => {
        // Subtle weightless organic floating wave
        mesh.position.y = Math.sin(time * 1.4 + idx * 0.52) * 0.04;

        mesh.getWorldPosition(worldPos);
        // Normalized depth from camera (-radius to +radius)
        const depthFactor = (worldPos.z - (-radius)) / (2 * radius);
        
        // Center Card Prominence (gentle 1.10x scaling at front center)
        const frontness = Math.max(0, worldPos.z / radius);
        const centerProminence = Math.pow(frontness, 3.0);
        const cardScale = 1.0 + 0.10 * centerProminence;
        mesh.scale.set(cardScale, cardScale, 1);

        // Crisp, clearly visible cards: front and sides stay fully opaque (1.0).
        // Only cards cycling through the deep background fade out gently so they don't visually clash.
        let opacity = 1.0;
        if (depthFactor < 0.38) {
          opacity = Math.max(0, (depthFactor - 0.12) / 0.26);
        }
        mesh.material.opacity = opacity;

        // True vibrant original hospital colors (no tone dimming)
        mesh.material.color.setRGB(1, 1, 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 440;
      const newIsMobile = newWidth < 768;

      ringGroup.position.set(0, 0, 0);

      camera.aspect = newWidth / newHeight;
      camera.position.z = newIsMobile ? 8.6 : 7.6;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on Component Unmount
    return () => {
      delete window.__triggerTrustedBounce;
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);

      canvas.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);

      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      canvas.removeEventListener('mouseenter', onMouseEnter);
      canvas.removeEventListener('mouseleave', onMouseLeave);

      cardGeometry.dispose();
      texturesToDispose.forEach((t) => t.dispose());
      materialsToDispose.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  // Section Scroll-Trigger for Animated Entrance
  useEffect(() => {
    if (!sectionRef.current) return;

    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationPhase('bouncing');
          if (window.__triggerTrustedBounce) {
            window.__triggerTrustedBounce();
          }

          setTimeout(() => {
            setAnimationPhase('loaded');
          }, 1500);

          scrollObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    scrollObserver.observe(sectionRef.current);
    return () => scrollObserver.disconnect();
  }, []);

  return (
    <section 
      id="trusted-by" 
      ref={sectionRef}
      className={`trusted-by-cinematic-section ${animationPhase !== 'idle' ? 'section-active' : ''}`}
      aria-label="Trusted By Partner Hospitals"
    >
      <div className="trusted-container-miniscreen">

        {/* =========================================================
            CLEAN TOP HEADING: EXACT SAME SIZE AS HOSPITAL MODULES TEXT
            ========================================================= */}
        <div className="google-modules-header text-center">
          <h2 className="section-title-google">
            Trusted <span className="text-gradient-gemini">By</span>
          </h2>
        </div>

        {/* =========================================================
            3D ROUND ROTATING BOXES (CENTERED DIRECTLY BELOW TOP HEADING)
            ========================================================= */}
        <div className="trusted-carousel-stage-wrapper">
          <div 
            ref={containerRef} 
            className={`trusted-3d-stage ${animationPhase === 'bouncing' || animationPhase === 'loaded' ? 'boxes-bouncing' : ''}`}
          >
            <div className="trusted-stage-vignette left" aria-hidden="true"></div>
            <div className="trusted-stage-vignette right" aria-hidden="true"></div>
            <canvas 
              ref={canvasRef} 
              className="trusted-three-canvas" 
              aria-label="Interactive 3D cylindrical carousel of company logos"
            />
          </div>
        </div>

        <ul className="visually-hidden">
          {PARTNERS.map((partner) => (
            <li key={partner.id}>
              {partner.name} - {partner.type}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
