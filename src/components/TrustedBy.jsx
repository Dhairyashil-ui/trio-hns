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
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Creates high-resolution 2D CanvasTexture representing a translucent glass card
 * with genuine company logo, subtle borders, specular sheen, and typography.
 */
function createCardTexture(partner) {
  const canvas = document.createElement('canvas');
  canvas.width = 560;
  canvas.height = 330;
  const ctx = canvas.getContext('2d');

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  let loadedImg = null;

  const renderCard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Soft Ambient Floating Shadow Under Glass Card
    ctx.save();
    ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 10;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    drawRoundedRect(ctx, 10, 10, 540, 310, 26);
    ctx.fill();
    ctx.restore();

    // 2. Translucent Crystalline Liquid-Glass Fill
    const bgGrad = ctx.createLinearGradient(0, 0, 560, 330);
    bgGrad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
    bgGrad.addColorStop(0.4, 'rgba(248, 250, 255, 0.92)');
    bgGrad.addColorStop(1, 'rgba(240, 246, 255, 0.95)');
    ctx.fillStyle = bgGrad;
    drawRoundedRect(ctx, 10, 10, 540, 310, 26);
    ctx.fill();

    // 3. Clean Subtle Crystalline Border (Uniform & Seamless)
    const borderGrad = ctx.createLinearGradient(0, 10, 560, 320);
    borderGrad.addColorStop(0, 'rgba(226, 232, 240, 0.85)');
    borderGrad.addColorStop(1, 'rgba(203, 213, 225, 0.75)');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 1.2;
    drawRoundedRect(ctx, 10, 10, 540, 310, 26);
    ctx.stroke();

    // 6. Logo Rendering Area (Preserving Proportions & High Contrast)
    const logoBoxX = 70;
    const logoBoxY = 32;
    const logoBoxW = 420;
    const logoBoxH = 150;

    if (loadedImg && loadedImg.complete && loadedImg.naturalWidth > 0) {
      const imgW = loadedImg.naturalWidth;
      const imgH = loadedImg.naturalHeight;
      const scale = Math.min(logoBoxW / imgW, logoBoxH / imgH, 1.35);
      const drawW = imgW * scale;
      const drawH = imgH * scale;
      const drawX = logoBoxX + (logoBoxW - drawW) / 2;
      const drawY = logoBoxY + (logoBoxH - drawH) / 2;

      ctx.save();
      ctx.drawImage(loadedImg, drawX, drawY, drawW, drawH);
      ctx.restore();
    } else {
      // Elegant healthcare vector badge emblem
      ctx.save();
      const cx = 280;
      const cy = 105;

      // Outer glowing emblem ring
      ctx.strokeStyle = `${partner.accent}44`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 38, 0, Math.PI * 2);
      ctx.stroke();

      // Inner soft emblem background
      ctx.fillStyle = `${partner.accent}12`;
      ctx.beginPath();
      ctx.arc(cx, cy, 37, 0, Math.PI * 2);
      ctx.fill();

      // Stylized Medical Cross
      ctx.fillStyle = partner.accent;
      ctx.shadowColor = partner.accent;
      ctx.shadowBlur = 10;
      const barW = 12;
      const barH = 40;
      ctx.fillRect(cx - barW / 2, cy - barH / 2, barW, barH);
      ctx.fillRect(cx - barH / 2, cy - barW / 2, barH, barW);
      ctx.restore();
    }

    // 7. Typography: Hospital / Partner Name (Crisp Slate Charcoal)
    ctx.font = '700 23.5px "Google Sans", "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(partner.name, 280, 236);

    // 8. Typography: Subtitle / Hospital Classification
    ctx.font = '500 15px "Google Sans", "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(partner.type, 280, 270);
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

    // Camera with realistic depth perspective (compact, slightly smaller scale)
    const isMobile = width < 768;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, isMobile ? 7.6 : 6.6);
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

    // 3D Cylindrical Ring Setup (positioned slightly right on desktop to avoid overlap with TRUSTED BY)
    let targetXOffset = isMobile ? 0 : 1.15;
    const ringGroup = new THREE.Group();
    ringGroup.position.set(targetXOffset, 0.22, 0);
    scene.add(ringGroup);

    const radius = 3.65;
    const count = PARTNERS.length;
    const cardGeometry = new THREE.PlaneGeometry(1.95, 1.18);
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
    const baseSpeed = 0.0032;
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

      const sensitivity = isMobile ? 0.006 : 0.0045;
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

      // Handle spring bouncing entrance for round 3D cylindrical boxes
      if (!isBouncing) {
        ringGroup.scale.set(0.0001, 0.0001, 0.0001);
      } else {
        const elapsed = (performance.now() - bounceStartTime) / 1000;
        if (elapsed < 1.6) {
          // Damped harmonic spring: shoots to ~1.16, springs back to ~0.95, settles at 1.0
          const scaleVal = Math.max(0, 1 - Math.exp(-4.2 * elapsed) * Math.cos(9.6 * elapsed));
          ringGroup.scale.set(scaleVal, scaleVal, scaleVal);

          // Height spring bounce
          const yOffset = 0.22 - Math.exp(-4.2 * elapsed) * Math.sin(8.0 * elapsed) * 0.35;
          ringGroup.position.y = yOffset;
          ringGroup.position.x = targetXOffset;

          // Initial rotational impulse on arrival
          const speedKick = Math.exp(-3.2 * elapsed) * 0.024;
          rotationY += speedKick;
        } else {
          ringGroup.scale.set(1, 1, 1);
          ringGroup.position.y = 0.22;
          ringGroup.position.x = targetXOffset;
        }
      }

      // Handle continuous rotation or drag momentum
      if (!isDragging) {
        if (Math.abs(dragVelocity) > 0.0001) {
          rotationY += dragVelocity;
          dragVelocity *= 0.94; // Smooth inertial decay
        } else if (autoRotate) {
          // Slow continuous rotation, smoothly decelerates on hover
          const currentSpeed = isHovered ? baseSpeed * 0.35 : baseSpeed;
          rotationY += currentSpeed;
        }
      }

      ringGroup.rotation.y = rotationY;

      const time = performance.now() * 0.001;
      meshes.forEach((mesh, idx) => {
        // Subtle weightless organic floating wave
        mesh.position.y = Math.sin(time * 1.5 + idx * 0.52) * 0.07;

        mesh.getWorldPosition(worldPos);
        // Normalized depth from camera (-radius to +radius)
        const depthFactor = (worldPos.z - (-radius)) / (2 * radius);
        
        // Opacity curve: 1.0 at front, smoothly fades out towards back
        const opacity = Math.min(1, Math.max(0, (depthFactor - 0.1) / 0.82));
        mesh.material.opacity = opacity;

        // Front cards crisp, rear cards softly blend with depth
        const tone = 0.9 + 0.1 * depthFactor;
        mesh.material.color.setRGB(tone, tone, tone);
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

      targetXOffset = newIsMobile ? 0 : 1.15;
      ringGroup.position.x = targetXOffset;

      camera.aspect = newWidth / newHeight;
      camera.position.z = newIsMobile ? 7.6 : 6.6;
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

  // Section Scroll-Trigger & Choreographed Sequence
  const sectionRef = useRef(null);
  const [animationPhase, setAnimationPhase] = useState('idle'); // 'idle' | 'text-in' | 'boxes-bouncing' | 'all-loaded'
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const scrollObserver = new IntersectionObserver(
      ([entry]) => {
        // Trigger sequence only when user scrolls down till Trusted By
        if (entry.isIntersecting) {
          // Phase 1: Text slides in from left in slow motion
          setAnimationPhase('text-in');

          // Phase 2: Right after in slow motion, round animation boxes bounce in!
          setTimeout(() => {
            setAnimationPhase('boxes-bouncing');
            if (window.__triggerTrustedBounce) {
              window.__triggerTrustedBounce();
            }
          }, 620);

          // Phase 3: Right after, load below all
          setTimeout(() => {
            setAnimationPhase('all-loaded');
          }, 1750);

          scrollObserver.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    scrollObserver.observe(sectionRef.current);
    return () => scrollObserver.disconnect();
  }, []);

  const handleHeaderMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseTilt({ x, y });
  };

  const handleHeaderMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="trusted-by" 
      ref={sectionRef}
      className={`trusted-by-cinematic-section ${animationPhase !== 'idle' ? 'section-active' : ''}`}
      aria-label="Trusted By Partner Hospitals"
    >
      <div className="trusted-container-miniscreen">

        {/* =========================================================
            PARALLEL STAGE: "TRUSTED BY" AT LEFT CORNER PARALLEL TO TOP OF ROTATING WHEEL
            ========================================================= */}
        <div className="trusted-wheel-stage-wrapper">

          {/* Left Corner: "TRUSTED BY" (Single line, parallel to top of rotating wheel) */}
          <div 
            className={`trusted-corner-heading ${animationPhase !== 'idle' ? 'text-in' : ''}`}
            onMouseMove={handleHeaderMouseMove}
            onMouseLeave={handleHeaderMouseLeave}
            style={animationPhase !== 'idle' ? {
              transform: `perspective(900px) rotateY(${mouseTilt.x * 6}deg) rotateX(${-mouseTilt.y * 4}deg)`
            } : undefined}
          >
            <h2 className="section-title-google trusted-corner-title">
              <span className="kinetic-word">TRUSTED</span>{' '}
              <span className="text-gradient-gemini kinetic-word">BY</span>
            </h2>
          </div>

          {/* 3D Round Rotating Boxes (Bouncing style) */}
          <div 
            ref={containerRef} 
            className={`trusted-3d-stage trusted-stage-parallel ${animationPhase === 'boxes-bouncing' || animationPhase === 'all-loaded' ? 'boxes-bouncing' : ''}`}
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
