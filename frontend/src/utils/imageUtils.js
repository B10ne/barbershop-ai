// =========================
// DATA URL TO FILE
// =========================

export const dataURLtoFile = (

    dataurl,
 
    filename
 
 ) => {
 
    let arr =
       dataurl.split(",");
 
    let mime =
       arr[0]
       .match(/:(.*?);/)[1];
 
    let bstr =
       atob(arr[1]);
 
    let n =
       bstr.length;
 
    let u8arr =
       new Uint8Array(n);
 
    while (n--) {
 
       u8arr[n] =
          bstr.charCodeAt(n);
    }
 
    return new File(
 
       [u8arr],
 
       filename,
 
       {
          type: mime
       }
    );
 };
 
 // =========================
 // IMAGE PREVIEW
 // =========================
 
 export const createImagePreview = (
 
    file
 
 ) => {
 
    return URL.createObjectURL(
       file
    );
 };
 
 // =========================
 // BASE64 SIZE
 // =========================
 
 export const getBase64Size = (
 
    base64
 
 ) => {
 
    let stringLength =
       base64.length
 
       -
 
       "data:image/png;base64,"
       .length;
 
    let sizeInBytes =
       4 *
       Math.ceil(
          stringLength / 3
       ) *
       0.5624896334383812;
 
    return sizeInBytes;
 };
 
 // =========================
 // VALID IMAGE
 // =========================
 
 export const isValidImage = (
 
    file
 
 ) => {
 
    if (!file) {
 
       return false;
    }
 
    return (
       file.type.startsWith(
          "image/"
       )
    );
 };