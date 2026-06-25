import API from "./api";

export const predictFace =
async (

   formData

) => {

   try {

      const response =
         await API.post(

            "/predict-face",

            formData,

            {

               headers: {

                  "Content-Type":
                     "multipart/form-data"
               }
            }
         );

      return response.data;

   } catch (error) {

      console.log(error);

      throw error;
   }
};