export const validateImage = (

    image
 
 ) => {
 
    return !!image;
 };
 
 export const validateHairstyle = (
 
    hairstyle
 
 ) => {
 
    return !!hairstyle;
 };
 
 export const validatePreferences = (
 
    preferences
 
 ) => {
 
    return (
       Array.isArray(
          preferences
       )
    );
 };
 
 export const validateFaceShape = (
 
    faceShape
 
 ) => {
 
    return !!faceShape;
 };