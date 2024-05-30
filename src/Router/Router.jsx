  import React from 'react'
import {Routes,Route} from "react-router-dom";
import { HashRouter as BrowserRouter} from "react-router-dom"

//pages
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";
import Cart from '../Pages/Cart';


//Admin-auth
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import CreateProduct from '../Pages/Admin/CreateProduct';
import Products from "../Pages/Admin/AdminProducts";
import Users from '../Pages/Admin/Users';



//auth
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import Dashboard from '../Dashboard/UserDashboard';



//component
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import BottomMenu from '../Layout/BottomMenu';
import MobileMune from "../Layout/MobileMenu";
import { categories } from '../Component/Categories';



//Router
import PrivateUserRouter from './PrivateUserRouter';
import PrivateAdminRouter from './PrivateAdminRouter';
import UpdateProduct from '../Pages/Admin/UpdateProduct';
import TopHeader from '../Layout/TopHeader';
import ConfirmOrderPage from '../Layout/ConfirmOrderPage';
import CC from '../CC';



// Import your components dynamically
const dynamicComponents = {
  
  //menu pages
  computer_items : React.lazy(()=>import('../Pages/MenuPages/Computer_Items')),
  mobile_accessories : React.lazy(()=>import('../Pages/MenuPages/Mobile_Items')),
  headphone_items : React.lazy(()=>import('../Pages/MenuPages/Headphone_Items')),
  light_lamp : React.lazy(()=>import('../Pages/MenuPages/Light_Lamp')),
  router_collection : React.lazy(()=>import('../Pages/MenuPages/Routers_Collection')),
  other_items : React.lazy(()=>import('../Pages/MenuPages/Other_Items')),
  home_appliances : React.lazy(()=>import('../Pages/MenuPages/Home_Appliances')),
  voucher : React.lazy(()=>import('../Pages/MenuPages/Voucher')),
  speakers : React.lazy(()=>import('../Pages/MenuPages/Speaker_Microphone')),
  trimmer_shaver : React.lazy(()=>import('../Pages/MenuPages/Trimmer_Shaver')),
  smart_watches :  React.lazy(()=>import('../Pages/MenuPages/Smart_Watches')),
  books : React.lazy(()=>import('../Pages/MenuPages/Books')),

  //compute_items subpages  
  mouse: React.lazy(() => import('../Pages/SubMenuPages/Computer_Items/Mouse')),
  keyboard : React.lazy(()=> import('../Pages/SubMenuPages/Computer_Items/Keyboard')),

  //mobile accessories subpages
  charger : React.lazy(()=>import('../Pages/SubMenuPages/Mobile_Accessories/Charger')), 
  selfie_stick : React.lazy(()=>import('../Pages/SubMenuPages/Mobile_Accessories/Selfie_Stick')),
  battery : React.lazy(()=> import("../Pages/SubMenuPages/Mobile_Accessories/Battery")),
  power_bank : React.lazy(()=> import("../Pages/SubMenuPages/Mobile_Accessories/Power_Bank")),

 //Trimmer & Shaver subpages
 electric_trimmer : React.lazy(()=> import("../Pages/SubMenuPages/Trimmer_Shaver/Electric_Trimmer")),
 electric_shaver : React.lazy(()=> import("../Pages/SubMenuPages/Trimmer_Shaver/Electric_Shaver")),
 
 //speaker & microphone subpages
 bluetooth_speaker : React.lazy(()=>import('../Pages/SubMenuPages/Speaker_Microphone/Bluethooth_Speaker')),
 microphone : React.lazy(()=>import('../Pages/SubMenuPages/Speaker_Microphone/Microphone')),
   
 //light & lamp subpages
 led_light : React.lazy(()=>import("../Pages/SubMenuPages/Light_Lamps/LED_Light")),
 
 //other items subpages
 calculator : React.lazy(()=>import('../Pages/SubMenuPages/Other_Item/Calculator')),
 toothbrush : React.lazy(()=>import('../Pages/SubMenuPages/Other_Item/ToothBrush')),
 bag_luggage : React.lazy(()=>import('../Pages/SubMenuPages/Other_Item/Bag_Luggage')),
 smart_tv_box : React.lazy(()=>import('../Pages/SubMenuPages/Other_Item/Smart_TV_Box')),

 //home appliances subpages
 electric_kettle : React.lazy(()=>import("../Pages/SubMenuPages/Home_Appliances/Electric_Kettle")),

 //smart watche subpages
 smart_watch : React.lazy(()=>import("../Pages/SubMenuPages/Smart_Watches/Smart_Watch")),
 watch_strap : React.lazy(()=>import("../Pages/SubMenuPages/Smart_Watches/Watch_Strap")),

 //headphone subpages
 gaming_headphone : React.lazy(()=>import('../Pages/SubMenuPages/Headphone_Items/Gaming_Headphone')),
 in_ear_headphone : React.lazy(()=>import('../Pages/SubMenuPages/Headphone_Items/In_Ear_Headphone')),
 earbuds : React.lazy(()=>import('../Pages/SubMenuPages/Headphone_Items/Earbuds')),

 //routers collection subpages
 wifi_router: React.lazy(()=>import('../Pages/SubMenuPages/Routers_Collection/Wifi_Router')),
 router_stand: React.lazy(()=>import('../Pages/SubMenuPages/Routers_Collection/Router_Stand')),
 pocket_router: React.lazy(()=>import('../Pages/SubMenuPages/Routers_Collection/Pocket_Router')),

 //books subpages
 self_motivation : React.lazy(()=>import('../Pages/SubMenuPages/Books/Self_Motivation')),
 islamic_book : React.lazy(()=>import('../Pages/SubMenuPages/Books/Islamic_Book')),

 //voucher subpages
 gift_voucher : React.lazy(()=>import('../Pages/SubMenuPages/Voucher/Gift_Voucher')),
 wedding_voucher : React.lazy(()=>import('../Pages/SubMenuPages/Voucher/Weeding_Voucher')),

};

const LazyComponent = ({ componentName }) => {
  const Component = dynamicComponents[componentName];

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {Component ? <Component /> : null}
    </React.Suspense>
  );
};


const Router = () => {

  return (
    <BrowserRouter>
    <TopHeader />
     <Header />
     <Routes>
    

     
     <Route path='/dashboard' element={<PrivateUserRouter /> } >
     <Route path='/dashboard' element={<Dashboard />} />
      </Route>
  
      <Route path='/admin/dashboard' element={<PrivateAdminRouter /> } >
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/dashboard' element={<CreateProduct />} />
        <Route path='/admin/dashboard' element={<Products />} />
        <Route path='/admin/dashboard' element={<Users />} />
      </Route>
      
      <Route path='/admin/dashboard/editproduct' element={< UpdateProduct/>} />

        <Route path='/' element={<Home />} />

        {Object.keys(categories).map((Item,i)=>{
          return <Route key={i} path={`/${Item}`} element={<LazyComponent componentName={Item} />} />
         })}

        {categories.computer_items.map((Item,i)=>{
        return <Route key={i} path={`/computer_items/${Item}`}  element={<LazyComponent componentName={Item} />}/>
        })}

        {categories.mobile_accessories.map((Item,i)=>{
          return <Route key={i} path={`/mobile_accessories/${Item}`} element={<LazyComponent componentName={Item}/>} />
        })}

        {categories.headphone_items.map((Item,i)=>{
          return <Route key={i} path={`/headphone_items/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}


       {categories.smart_watches.map((Item,i)=>{
          return <Route key={i} path={`/smart_watches/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

       {categories.router_collection.map((Item,i)=>{
          return <Route key={i} path={`/router_collection/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}
        
       {categories.light_lamp.map((Item,i)=>{
          return <Route key={i} path={`/light_lamp/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

       {categories.home_appliances.map((Item,i)=>{
          return <Route key={i} path={`/home_appliances/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

       {categories.trimmer_shaver.map((Item,i)=>{
          return <Route key={i} path={`/trimmer_shaver/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

      {categories.speakers.map((Item,i)=>{
          return <Route key={i} path={`/speakers/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}

      {categories.books.map((Item,i)=>{
          return <Route key={i} path={`/books/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}  

      {categories.other_items.map((Item,i)=>{
          return <Route key={i} path={`/other_items/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}  

      
      {categories.voucher.map((Item,i)=>{
          return <Route key={i} path={`/voucher/${Item}`} element={<LazyComponent componentName={Item}/> } />
        })}    


        <Route path='/SingleProduct/:slug' element={<SingleProduct />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/confirm-order' element={<ConfirmOrderPage />} />
        <Route path='/mobile-menu' element={<MobileMune />} />
        <Route path='/admin/cc' element={<CC />} />


   
   
     </Routes>
   <BottomMenu />
   <Footer />
    </BrowserRouter>
  )
}

export default Router;



