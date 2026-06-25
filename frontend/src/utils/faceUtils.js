export const getDominantFaceShape =
(

   scores

) => {

   return Object.entries(
      scores
   )

   .sort(

      (a, b) =>

         b[1] - a[1]
   )[0][0];
};

export const normalizeFaceShape =
(

   faceShape

) => {

   return faceShape

   ?.toLowerCase();
};