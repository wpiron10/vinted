// const Offers = ({ data, Link }) => {
//   return (
//     <div>
//       <div className="offer-content">
//         <div className="container">
//           <div className="offer-list">
//             {data.offers.map((offer, index) => {
//               return (
//                 <Link to={`/offer${offer._id}`} key={offer._id}>
//                   <div key={index}>
//                     {offer.product_pictures[0] && (
//                       <div className="offer">
//                         <div className="offer-owner">
//                           <p>{offer.owner.account.username}</p>
//                         </div>
//                         <div>
//                           {offer.product_pictures[0] ? (
//                             <img
//                               className="offer-img"
//                               src={offer.product_pictures[0].secure_url}
//                             />
//                           ) : null}
//                         </div>
//                         <div className="offer-desc">
//                           <div> {offer.product_price} €</div>

//                           {offer.product_details[1].TAILLE && (
//                             <div> {offer.product_details[1].TAILLE}</div>
//                           )}

//                           <div> {offer.product_details[0].MARQUE} </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Offers;
