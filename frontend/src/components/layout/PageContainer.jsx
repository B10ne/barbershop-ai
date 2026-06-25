function PageContainer({

   children,
   maxWidth = "1440px"

}) {

   return (

      <div
         className="page-container"
         style={{

            maxWidth,

            margin: "0 auto",

            width: "100%"
         }}
      >

         {children}

      </div>
   );
}

export default PageContainer;