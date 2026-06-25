import API from "./api";

export const generateTryOn =
async (

   payload

) => {

   try {

      const response =
         await API.post(

            "/generate-tryon",

            payload
         );

      return response.data;

   } catch (error) {

      console.log(error);

      throw error;
   }
};