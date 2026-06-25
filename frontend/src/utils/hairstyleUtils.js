export const getBestRecommendation =
(

   hairstyles = []

) => {

   return hairstyles[0];
};

export const filterByMaintenance =
(

   hairstyles,

   maintenance

) => {

   return hairstyles.filter(

      (style) =>

         style.maintenance

         ===

         maintenance
   );
};