import { useState, useRef, useCallback, useEffect } from "react";

function PreviewCard({
   generatedImage,
   hairstyle,
   originalImage
}) {

   const [sliderPos, setSliderPos] = useState(50);
   const containerRef = useRef(null);
   const dragging = useRef(false);
   const [containerWidth, setContainerWidth] = useState(0);

   const fallbackImage = `http://127.0.0.1:8000/images/${hairstyle.image}`;
   const afterImage = generatedImage || fallbackImage;
   const hasGenerated = !!generatedImage;

   // ── Track container width (for --preview-width CSS var) ──
   useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const ro = new ResizeObserver(([entry]) => {
         setContainerWidth(entry.contentRect.width);
      });
      ro.observe(el);
      setContainerWidth(el.getBoundingClientRect().width);

      return () => ro.disconnect();
   }, []);

   // ── Drag logic ────────────────────────────────────────────
   const updateSlider = useCallback((clientX) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
      setSliderPos(pct);
   }, []);

   const onMouseDown  = (e) => { dragging.current = true;  updateSlider(e.clientX); };
   const onMouseMove  = (e) => { if (!dragging.current) return; updateSlider(e.clientX); };
   const onMouseUp    = ()  => { dragging.current = false; };

   const onTouchStart = (e) => { dragging.current = true;  updateSlider(e.touches[0].clientX); };
   const onTouchMove  = (e) => { if (!dragging.current) return; updateSlider(e.touches[0].clientX); };
   const onTouchEnd   = ()  => { dragging.current = false; };

   return (
      <div className="comparison-card">

         <div className="comparison-label">AI Result</div>

         <div
            ref={containerRef}
            className="comparison-preview"
            /* Pass the real pixel width so before-img can use it */
            style={{ "--preview-width": `${containerWidth}px` }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
         >
            {/* AFTER — always full width, base layer */}
            <img
               src={afterImage}
               alt="After"
               className="comparison-after-img"
               draggable={false}
            />

            {/* BEFORE — wrapper clips; img stays at full container width
                so both images are pixel-aligned and slider is smooth */}
            {hasGenerated && (
               <div
                  className="comparison-before-wrapper"
                  style={{ width: `${sliderPos}%` }}
               >
                  <img
                     src={originalImage}
                     alt="Before"
                     className="comparison-before-img"
                     draggable={false}
                  />
               </div>
            )}

            {/* Divider + handle */}
            {hasGenerated && (
               <>
                  <div
                     className="comparison-divider"
                     style={{ left: `${sliderPos}%` }}
                  />
                  <div
                     className="comparison-handle"
                     style={{ left: `${sliderPos}%` }}
                  >
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5 4L1 8L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11 4L15 8L11 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>

                  <span className="comparison-before-label">Before</span>
                  <span className="comparison-after-label">After</span>
               </>
            )}

            {/* Placeholder */}
            {!generatedImage && (
               <div className="comparison-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <rect x="3" y="3" width="18" height="18" rx="3"/>
                     <path d="M3 9h18M9 21V9"/>
                  </svg>
                  <p>Click "Generate AI Try-On" to see your result</p>
               </div>
            )}

         </div>
      </div>
   );
}

export default PreviewCard;