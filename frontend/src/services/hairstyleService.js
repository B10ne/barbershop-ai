export const getHairstyleDetail =
async (name) => {

   try {

      const response =
         await API.get(
            `/hairstyles/${encodeURIComponent(name)}`
         );

      return response.data;

   } catch (error) {

      console.log(error);

      throw error;
   }
};