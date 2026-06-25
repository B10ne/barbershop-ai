function TryOnLayout({ children }) {

   return (
      <div className="tryon-page">
         <div className="tryon-container">
            <div className="tryon-wrapper">
               {children}
            </div>
         </div>
      </div>
   );
}

export default TryOnLayout;