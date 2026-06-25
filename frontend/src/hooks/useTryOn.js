import { useState } from "react";

import useCache from "./useCache";

export default function useTryOn() {

   const {

      getTryOnCache,

      saveTryOnCache

   } = useCache();

   const [

      generating,

      setGenerating

   ] = useState(false);

   const [

      generatedImage,

      setGeneratedImage

   ] = useState(null);

   const [

      error,

      setError

   ] = useState("");

   const generateTryOn = async (

      capturedImage,

      hairstyle

   ) => {

      try {

         setGenerating(true);

         setError("");

         if (

            !capturedImage ||

            !hairstyle

         ) {

            setError(

               "Missing hairstyle or image."

            );

            return;

         }

         const cachedImage =

            getTryOnCache(

               capturedImage,

               hairstyle

            );

         if (cachedImage) {

            setGeneratedImage(

               cachedImage

            );

            return;

         }

         const payload = {

            image:

               capturedImage,

            hairstyle:

               hairstyle.name

         };

         const response =

            await fetch(

               "http://127.0.0.1:8000/generate-tryon",

               {

                  method:"POST",

                  headers:{

                     "Content-Type":

                        "application/json"

                  },

                  body:

                     JSON.stringify(

                        payload

                     )

               }

            );

         if (!response.ok) {

            const errorData =

               await response.json();

            console.log(

               errorData

            );

            setError(

               "Try On Failed"

            );

            return;

         }

         const data =

            await response.json();

         saveTryOnCache(

            capturedImage,

            hairstyle,

            data.generated_image

         );

         setGeneratedImage(

            data.generated_image

         );

      }

      catch (err) {

         console.log(err);

         setError(

            "Server Error"

         );

      }

      finally {

         setGenerating(false);

      }

   };

   return {

      generating,

      generatedImage,

      error,

      generateTryOn

   };

}