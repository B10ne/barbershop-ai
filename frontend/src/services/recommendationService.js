import API from "./api";

export const getRecommendation =
async (

   payload

) => {

   try {

      const response =
         await API.post(

            "/recommendation",

            payload
         );

      return response.data;

   } catch (error) {

      console.log(error);

      throw error;
   }
};