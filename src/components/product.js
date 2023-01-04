function Product(props){
  const title=props.title;
  const price=props.price;
 return (<div class='card  rounded-0'>
 <div class='card-header pt-3 pb-2 text-bg-info'><h2 class=' font-monospace fst-normal '>{title}</h2></div>
 <div class='card_body pheight text-bg-info bg-opacity-50 d-flex justify-content-end align-items-center flex-column'>
 <p class=' mb-4 font-monospace fw-bolder fs-4   ' >nuo <span class='fw-bold display-5'>{price}</span> EUR/men.</p>
 <div><button type="button" class="btn btn-dark mb-2">Learn more</button></div>
   </div>
</div>);   
}
export default Product;