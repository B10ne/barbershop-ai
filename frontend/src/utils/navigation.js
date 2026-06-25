export const navigateWithState = (

    navigate,
 
    path,
 
    state = {}
 
 ) => {
 
    navigate(
 
       path,
 
       {
          state
       }
    );
 };