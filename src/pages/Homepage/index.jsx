import React, {useState, useEffect, useLayoutEffect} from "react";
import { default as ModalProvider } from "react-modal";
import logo from "../../assets/images/myimage.png"
import logo1 from "../../assets/images/background.jpg"
import imag2 from "../../assets/images/image2.jpg"
import imag3 from "../../assets/images/image3.jpg"
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';

//import { Button } from 'primereact/button';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from "react-router-dom";
import { useMountEffect } from 'primereact/hooks';

import {
 Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import { DataService } from "DataService/DataService";


 
const HomepagePage = () => {

  const navigate = useNavigate();



const handleNavigate = (id1) => {
 //  const myid = products?.id1;
   navigate(`sigleblog/${id1}` );
 };
 

  const responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];


  useEffect(()=>{
    DataService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    DataService.getProductsSmall().then((data) => setActu(data.slice(0, 9)));
  
  
  },[])

  const [actu, setActu] = useState([]);

 
  const [products, setProducts] = useState([]);
 

  
  





  



   const productTemplate = (product) => {


    return (
        <div key={product.id}  style={{width:"100%", padding:"20px"}} className="border-1 surface-border border-round m-2 text-center py-5 px-3">



        
        <div style={{width:"100%"}}>
          <img src={require(`../../assets/images/${product?.image}`)} style={{width:"100%",height:"230px"}}
          />
          <div className="items-center justify-start ">
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] "
              size="txtInterSemiBold18Black900"
            >
            {product?.name} 
            </Text>
            <Text
              className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] "
              size="txtPoppinsRegular12"
            >
            {product?.description} 
       
            </Text>
          </div>
          <Text>
          Tuesday, April 3rd 2022.</Text>
          <div style={{textAlign:"left",marginTop:"12px"}} >
          <Button onClick={()=>handleNavigate(product.id)} label="Info" severity="info" >Read More</Button>
          </div>
          </div>
 
        </div>
    );
};


  return (
    <div className="bg-white-A700 flex flex-col font-inter gap-[50px] items-center justify-center mx-auto w-96%">
     
      <div className="bg-white-A700 flex flex-col font-inter gap-[50px] items-center justify-start mx-auto w-full">
      <header className="flex items-center justify-center md:px-5 w-full">
      <div className="bg-bluegray-900 flex flex-row items-center justify-center p-[26px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-left w-[94%]">
        <Img src={logo} style={{width:"80px",height:"80px"}}/> <Text
            className="text-2xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px]"
            size="txtInterSemiBold36"
          >
         &nbsp; E-connect Africa
          </Text>

          <div className="flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[173px] w-[47%] md:w-full">
          <Text style={{color:"#CF2020" , cursor:"pointer"}}
          className="text-lg text-white-A700 tracking-[-0.50px]"
          size="txtInterSemiBold18"
          onClick={()=>navigate("/")}
        >
          Home
        </Text>
        <Text style={{ cursor:"pointer"}}
              className="text-lg text-white-A700 tracking-[-0.50px]"
              size="txtInterSemiBold18"
              onClick={()=>navigate("aboutUs")}allblog
            >
              About us 
            </Text>
            <Text
              className="text-lg text-white-A700 tracking-[-0.50px]"
              size="txtInterSemiBold18"
            >
              Privacy Africa
            </Text>
            <Text style={{ cursor:"pointer"}}
              className="text-lg text-white-A700 tracking-[-0.50px]"
              size="txtInterSemiBold18"
              onClick={()=>navigate("allblog")}
            >
              Publications
            </Text>
            
           
           
            
          </div>
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
            <Img
              className="common-pointer h-6 w-6"
              src="images/img_search.svg"
              alt="search"
             // onClick={() => navigate("/search")}
            />
            <Line className="bg-white-A700 h-[26px] w-px" />
            <div className="flex flex-row gap-5 items-center justify-between w-[56%]">
              <Text
                className="common-pointer text-sm text-white-A700 tracking-[-0.50px]"
                size="txtInterRegular14"
                onClick={() => navigate("/login")}
              >
                Login
              </Text>
              <Text
                className="common-pointer text-sm text-white-A700 tracking-[-0.50px]"
                size="txtInterRegular14"
                onClick={() => navigate("/register")}
              >
                Register
              </Text>
            </div>
          </div>
        </div>
      </div>
    </header>





    
        <div className="flex flex-col md:gap-5 gap-[120px] items-center justify-center w-full">
          
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1292px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between rounded-lg w-full">
             
           {/*  <Button
                className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] sm:mt-0 mt-[5px] text-center text-sm tracking-[-0.50px]"
                onClick={() => navigate("/allblog")}
                shape="round"
                color="bluegray_900"
                size="lg"
              >
                View All
  </Button>*/}
            </div>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
              <div style={{width:"100%"}} className="card">
              <Carousel
              value={actu}
              numVisible={1}
              numScroll={1}
              responsiveOptions={responsiveOptions}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={productTemplate}
            />
            </div>
       
              </div>
              <div
                className="flex flex-col gap-[50px] w-[54%]"
                orientation="vertical"
              >
              <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <Img
                    className="h-[229px] md:h-auto object-cover"
                    src={imag2}
                    alt="unsplashj5kEQOne"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start rounded-lg">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text>
                    Tuesday, April 3rd 2022.</Text>
                      <div className="flex flex-col font-poppins gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-full"
                          size="txtPoppinsSemiBold20"
                        >
                      Japan is the most advanced country in tech
                        </Text>
                        <Text
                          className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                          size="txtPoppinsRegular12"
                        >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti. Mauris vehicula nibh sed odio placerat, id ornare tellus feugiat. Integer sit amet rutrum purus. Nulla facilisi. Nullam condimentum libero a turpis pulvinar, id posuere erat ullamcorper. Vivamus semper est id risus commodo, sed tempus enim viverra.
                        </Text>
                      </div>
                    </div>
                  
                  </div>
                    </div>   
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between my-0 w-full">
                  <Img
                    className="h-[229px] md:h-auto object-auto"
                    src=    {imag3}
                    
                    alt="unsplashL2p8f"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start rounded-lg">
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                    <Text>
                    Tuesday, April 3rd 2022.</Text>
                      
                      <div className="flex flex-col font-poppins gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-black-900 text-xl tracking-[-0.50px] w-full"
                          size="txtPoppinsSemiBold20"
                        >
                       How to prevent dirt in at home ?
                        </Text>
                        <Text
                          className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                          size="txtPoppinsRegular12"
                        >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt,lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti. Mauris vehicula nibh sed odio placerat, id ornare tellus feugiat. Integer sit amet rutrum purus. Nulla facilisi. Nullam condimentum libero a turpis pulvinar, id posuere erat ullamcorper. Vivamus semper est id risus commodo, sed tempus enim viverra.

                        </Text>
                      </div>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        





          <List
          className="flex flex-col gap-[120px] items-center max-w-[1294px] mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col gap-[49px] items-center justify-start w-full">
            <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                <Text
                  className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                  size="txtInterSemiBold36Black900"
                >
                  Dernières actualités{" "}
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[122px] mt-[5px] text-center text-sm tracking-[-0.50px]"
                  onClick={() => navigate("/allblog")}
                  shape="round"
                  color="bluegray_900"
                  size="lg"
                >
                  View All
                </Button>
              </div>
              <Line className="bg-black-900_7f h-px w-full" />
            </div>
  <div style={{width:"100%"}} className="card">
  <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
  autoplayInterval={3000} itemTemplate={productTemplate} />
</div>
</div>
</List>






          <div className="bg-gray-900 flex flex-col items-center justify-start max-w-[1290px] mx-auto p-[37px] md:px-5 rounded-[20px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start mb-[5px] rounded-[50px] w-[54%] md:w-full">
              <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.50px] w-full"
                  size="txtInterSemiBold48"
                >
                 Subscribe to the newsletter 
                </Text>
                <Text
                  className="leading-[35.00px] text-base text-center text-white-A700_b2 tracking-[-0.50px] w-full"
                  size="txtInterRegular16"
                >
                  <>
                   
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full">
              <Text style={{color:"white"}}
                className="text-white-900 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Enter your email here : 
              </Text>
              <Input
                name="Input One"
                placeholder="username@gmail.com" style={{color:"white"}}
                className="p-0 placeholder:text-white-400 text-base text-left tracking-[0.08px] w-full"
                wrapClassName="w-full"
                type="email"
                shape="round"
                color="black_900"
                size="md"
                variant="outline"
              ></Input>
            </div>
              <Button
                className="!text-bluegray-900 border border-bluegray-900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[196px] rounded-[26px] text-center text-lg tracking-[-0.50px]"
                color="white_A700"
                size="xl"
              >
                Subscribe Now !!
              </Button>
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-black-900 flex flex-col items-center justify-center p-[60px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col gap-[22px] items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.50px]"
                    size="txtInterSemiBold24WhiteA700"
                  >
                <Img src={logo} style={{width:"150px", height:"150px"}}  />
                  </Text>
                  <Text
                    className="leading-[35.00px] text-sm text-white-A700 tracking-[-0.50px] w-full"
                    size="txtInterRegular14"
                  >
                  
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-row items-start justify-between pt-2.5 w-[57%] md:w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-[10%]">
                    <Text
                      className="text-sm text-white-A700 tracking-[-0.50px]"
                      size="txtInterBold14"
                    >
                      World
                    </Text>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Politics
                      </Text>
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Health
                      </Text>
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Business
                      </Text>
                   
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Entertaiment
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[25px] items-start justify-start w-[8%]">
                    <Text
                      className="text-sm text-white-A700 tracking-[-0.50px]"
                      size="txtInterBold14"
                    >
                      Technology
                    </Text>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Science
                      </Text>
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Magazine
                      </Text>
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Start up
                      </Text>
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Crypto
                      </Text>
                    </div>
                  </div>
                 
                  <div className="flex flex-col gap-[25px] items-start justify-start w-[14%]">
                    <Text
                      className="text-sm text-white-A700 tracking-[-0.50px]"
                      size="txtInterBold14"
                    >
                      Other
                    </Text>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                      About
                      </Text>
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Contact us
                      </Text>
                      <Text
                        className="text-white-A700 text-xs tracking-[-0.50px]"
                        size="txtInterRegular12WhiteA700"
                      >
                        Terms & Conditions
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                <Line className="bg-white-A700 h-px w-full" />
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="mt-1 text-sm text-white-A700 tracking-[-0.50px]"
                    size="txtInterRegular14"
                  >
                    Copyright © E-connect Africa | All rights reserved
                  </Text>
                  <Img
                    className="h-6"
                    src="images/img_group20875.svg"
                    alt="Group20875"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
        </div>



      </div>
    </div>
  );
};

export default HomepagePage;
