import { useState } from "react";

function PreferenceForm({

   onSubmit

}) {

   const [hairType, setHairType] =
      useState("");

   const [profession, setProfession] =
      useState("");

   const [personality, setPersonality] =
      useState("");

   const [maintenance, setMaintenance] =
      useState("");

   const [formality, setFormality] =
      useState("");

      const handleSubmit = () => {

         onSubmit({

            hairType: hairType,
         
            profession: profession,
         
            personality: personality,
         
            maintenance: maintenance,
         
            formality: formality
         
         });
      
      };

   return (

      <div className="preference-card">

         <h2>

            User Preferences

         </h2>

         <div>

            <label>

               Hair Type

            </label>

            <select
               value={hairType}
               onChange={(e) =>
                  setHairType(
                     e.target.value
                  )
               }
            >

               <option value="">
                  Select Hair Type
               </option>

               <option value="Straight">
                  Straight
               </option>

               <option value="Wavy">
                  Wavy
               </option>

               <option value="Curly">
                  Curly
               </option>

               <option value="Coily">
                  Coily
               </option>

            </select>

         </div>

         <div>

            <label>

               Profession

            </label>

            <select
               value={profession}
               onChange={(e) =>
                  setProfession(
                     e.target.value
                  )
               }
            >

               <option value="">
                  Select Profession
               </option>

               <option value="Student">
                  Student
               </option>

               <option value="Professional">
                  Professional
               </option>

               <option value="Entrepreneur">
                  Entrepreneur
               </option>

               <option value="Creative">
                  Creative
               </option>

            </select>

         </div>

         <div>

            <label>

               Personality

            </label>

            <select
               value={personality}
               onChange={(e) =>
                  setPersonality(
                     e.target.value
                  )
               }
            >

               <option value="">
                  Select Personality
               </option>

               <option value="Friendly">
                  Friendly
               </option>

               <option value="Modern">
                  Modern
               </option>

               <option value="Classic">
                  Classic
               </option>

               <option value="Confident">
                  Confident
               </option>

            </select>

         </div>

         <div>

            <label>

               Maintenance

            </label>

            <select
               value={maintenance}
               onChange={(e) =>
                  setMaintenance(
                     e.target.value
                  )
               }
            >

               <option value="">
                  Select Maintenance
               </option>

               <option value="Low">
                  Low
               </option>

               <option value="Medium">
                  Medium
               </option>

               <option value="High">
                  High
               </option>

            </select>

         </div>

         <div>

            <label>

               Formality

            </label>

            <select
               value={formality}
               onChange={(e) =>
                  setFormality(
                     e.target.value
                  )
               }
            >

               <option value="">
                  Select Formality
               </option>

               <option value="Casual">
                  Casual
               </option>

               <option value="Semi Formal">
                  Semi Formal
               </option>

               <option value="Formal">
                  Formal
               </option>

            </select>

         </div>

         <button
            className="analyze-btn"
            onClick={handleSubmit}
         >

            Analyze Hairstyle

         </button>

      </div>

   );

}

export default PreferenceForm;