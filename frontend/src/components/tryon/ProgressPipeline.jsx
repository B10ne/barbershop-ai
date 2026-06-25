function ProgressPipeline({ generatedImage }) {

   const steps = [
      { label: "Analyzing Face",    done: true           },
      { label: "Generating Style",  done: true           },
      { label: "Applying Hair",     done: !!generatedImage },
      { label: "Finalizing",        done: !!generatedImage },
   ];

   return (
      <div className="progress-pipeline">
         {steps.map((step, i) => (
            <div
               key={i}
               className={`progress-step${step.done ? " active" : ""}`}
            >
               <div className="progress-step-icon">
                  {step.done ? "✓" : i + 1}
               </div>
               <span className="progress-step-label">
                  {step.label}
               </span>
            </div>
         ))}
      </div>
   );
}

export default ProgressPipeline;