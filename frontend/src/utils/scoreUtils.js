export const formatScore = (

    score
 
 ) => {
 
    return (
       score * 100
    ).toFixed(2);
 };
 
 export const sortByCompatibility =
 (
 
    hairstyles
 
 ) => {
 
    return hairstyles.sort(
 
       (a, b) =>
 
          b.compatibility_rank
 
          -
 
          a.compatibility_rank
    );
 };