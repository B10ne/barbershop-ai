
import {

   useLocation,

   useNavigate,

   useParams

} from "react-router-dom";

import {

   useEffect,

   useState

} from "react";

import {

   getHairstyleDetail

} from "../services/hairstyleService";

export default function
useHairstyleDetail() {

   const location =
      useLocation();

      console.log(
         "DETAIL STATE:",
         location.state
      );

   const navigate =
      useNavigate();

   const { name } =
      useParams();

   const [

      hairstyle,

      setHairstyle

   ] = useState(

      location.state?.hairstyle
      || null
   );

   const capturedImage =
      location.state?.capturedImage;
      
   const preference =
      location.state?.preference;
   
   console.log("DETAIL PREFERENCE");
   console.log(preference);

   // =========================
   // FETCH DETAIL
   // =========================

   useEffect(() => {

      if (hairstyle) return;

      const fetchDetail =
      async () => {

         try {

            const data =
               await getHairstyleDetail(
                  name
               );

            setHairstyle(data);

         } catch (error) {

            console.log(error);
         }
      };

      fetchDetail();

   }, [name, hairstyle]);

   // =========================
   // NAVIGATION
   // =========================

   const handleBack =
   () => {

      navigate(-1);
   };

   const handleTryOn =
   () => {

      navigate(

         "/try-on",

         {

            state: {
               hairstyle,
               capturedImage,
               preference
            }
         }
      );
   };

   const handleConsultation =
   () => {

      navigate(

         "/consultation",

         {

            state: {

               hairstyle,
               capturedImage,
               preference
            }
         }
      );
   };

   return {

      hairstyle,

      capturedImage,

      handleBack,

      handleTryOn,

      handleConsultation
   };
}