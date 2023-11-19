import React from "react";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/myimage.png"
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AboutUs = () => {
  const navigate = useNavigate();
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start w-full">
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
            <Text style={{ cursor:"pointer"}}
            className="text-lg text-white-A700 tracking-[-0.50px]"
            size="txtInterSemiBold18"
            onClick={()=>navigate("/")}
          >
            Home
          </Text>
          <Text style={{color:"#CF2020" , cursor:"pointer"}}
                className="text-lg text-white-A700 tracking-[-0.50px]"
                size="txtInterSemiBold18"
                onClick={()=>navigate("aboutUs")}
              >
                About us 
              </Text>
              <Text
                className="text-lg text-white-A700 tracking-[-0.50px]"
                size="txtInterSemiBold18"
              >
                Privacy Africa
              </Text>
              <Text  style={{ cursor:"pointer"}}
              onClick={()=>navigate("../allBlog")}
                className="text-lg text-white-A700 tracking-[-0.50px]"
                size="txtInterSemiBold18"
              >
                Publications
              </Text>
              
             
             
              
            </div>
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
              <Img
                className="common-pointer h-6 w-6"
                src="images/img_search.svg"
                alt="search"
             //   onClick={() => navigate("/search")}
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
          <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-24 items-center justify-start md:px-5 w-[95%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[78px] justify-start w-[55%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[75px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.50px] w-[86%] sm:w-full"
                  size="txtInterSemiBold48Black900"
                >
                About us
                </Text>
               <Img src={logo}/>
              </div>
              <div className="bg-white-A700 border border-bluegray-900 border-solid flex flex-col items-center justify-start md:mt-0 my-1 p-[45px] md:px-10 sm:px-5 w-[39%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-1 w-[92%] md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id urna ac quam lacinia consectetur. Sed sollicitudin, massa ut pharetra tincidunt, lectus sapien fringilla mauris, non consequat ipsum lacus eu lectus. Suspendisse potenti. Mauris vehicula nibh sed odio placerat, id ornare tellus feugiat. Integer sit amet rutrum purus. Nulla facilisi. Nullam condimentum libero a turpis pulvinar, id posuere erat ullamcorper. Vivamus semper est id risus commodo, sed tempus enim viverra. Etiam in venenatis metus. Nunc eget enim sed sapien molestie bibendum. Donec ac ultrices nisl. Sed venenatis felis eget es
                t euismod sollicitudin. Aliquam erat volutpat. Proin sed ullamcorper velit.
            
                 
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-center w-full">
            <Text
            className="md:ml-[0] ml-[75px] text-5xl sm:text-[38px] md:text-[44px] items-center text-black-900 tracking-[-0.50px] w-[86%] sm:w-full"
            size="txtInterSemiBold48Black900"
          >
        Adresse <LocationOnIcon style={{fontSize:"50px"}}/>
          </Text>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96777882836!2d2.264634746829189!3d48.85882549224989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sma!4v1700256300851!5m2!1sfr!2sma" 
            style={{ height: "500px", width: '80%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
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
    </>
  );
};

export default AboutUs;
