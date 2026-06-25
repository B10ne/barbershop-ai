function UserPhotoCard({ image }) {

   return (
      <div className="tryon-card">
         <h3>Your Photo</h3>
         <p className="card-subtitle">Uploaded image</p>
         <img
            src={image}
            alt="User"
            className="tryon-image"
         />
      </div>
   );
}

export default UserPhotoCard;