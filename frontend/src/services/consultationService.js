import API from "./api";

export const generateConsultation =
async (

   payload

) => {

   try {

      const response =
         await API.post(

            "/consultation",

            payload
         );

      return response.data;

   } catch (error) {

      console.log(error);

      throw error;
   }
};