import  { useContext } from 'react'
import Layout from '../../Components/Layout/Layout';
import MyContext from '../../Context/Data/myContext';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Filter from '../../Components/Filter/Filter';
import ProductCard from '../../Components/ProductCard/product';
import Track from '../../Components/Track/Track';
import Testimonial from '../../Components/Testimonial/Testimonial';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, deleteFromCart } from '../../Redux/cartSlice';
 function Home() {
    const context=useContext(MyContext);
    // const dispatch=useDispatch()
    // const cardItem=useSelector((state)=> state.cart);
     console.log(context);
    // console.log(cardItem);
    // const addCart=()=>{
    //   dispatch(addToCart("T-Shirt"))
    // }
    // const deleteCart=()=>{
    //   dispatch(deleteFromCart("T-Shirt"));
    // }
   return (
        
     <Layout>
        {/* <div className="flex gap-5 justify-center"> */}
      {/* <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>Add</button>
      <button className=" bg-gray-300 p-5" onClick={()=> deleteCart()}>Delete</button>  </div>  */}
< HeroSection/>
<Filter/>
<ProductCard/>
<Track/>
<Testimonial/>
</Layout>

    
  )
}

export default Home;