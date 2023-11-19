import React from "react";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/myimage.png"

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

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
            <Text style={{  cursor:"pointer"}}
            className="text-lg text-white-A700 tracking-[-0.50px]"
            size="txtInterSemiBold18"
            onClick={()=>navigate("/")}
          >
            Home
          </Text>
          <Text style={{ cursor:"pointer"}}
                className="text-lg text-white-A700 tracking-[-0.50px]"
                size="txtInterSemiBold18"
                onClick={()=>navigate("../aboutUs")}
              >
                About us 
              </Text>
              <Text
                className="text-lg text-white-A700 tracking-[-0.50px]"
                size="txtInterSemiBold18"
              >
                Privacy Africa
              </Text>
              <Text style={{cursor:"pointer"}}
                className="text-lg text-white-A700 tracking-[-0.50px]"
                size="txtInterSemiBold18"
                onClick={()=>navigate("../allblog")}
              >
                Publications
              </Text>
              
             
             
              
            </div>
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
              <Img
                className="common-pointer h-6 w-6"
                src="images/img_search.svg"
                alt="search"
               
              />
              <Line className="bg-white-A700 h-[26px] w-px" />
              <div className="flex flex-row gap-5 items-center justify-between w-[56%]">
              <Text style={{color:"#CF2020"}}
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
                  Welcome back, there is the latest news today !!
                </Text>
               <Img src={logo}/>
              </div>
              <div className="bg-white-A700 border border-bluegray-900 border-solid flex flex-col items-center justify-start md:mt-0 my-1 p-[45px] md:px-10 sm:px-5 w-[39%] md:w-full">
                <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-1 w-[92%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Connexion
                  </Text>
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="flex flex-col font-poppins items-center justify-start pt-[3px] w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full">
                        <Text
                          className="text-black-900 text-sm tracking-[0.07px]"
                          size="txtPoppinsRegular14"
                        >
                          Email
                        </Text>
                        <Input
                          name="Input"
                          placeholder="Entrez votre email"
                          className="p-0 placeholder:text-bluegray-400 text-base text-left tracking-[0.08px] w-full"
                          wrapClassName="w-full"
                          type="email"
                          shape="round"
                          color="black_900"
                          size="md"
                          variant="outline"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3.5 items-start justify-start mt-[23px] rounded-[10px] w-full">
                        <Text
                          className="text-black-900 text-sm tracking-[0.07px]"
                          size="txtPoppinsRegular14"
                        >
                          Mot de passe
                        </Text>
                        <Input
                          name="Input One"
                          placeholder="Entrez votre mot de passe"
                          className="p-0 placeholder:text-bluegray-400 text-base text-left tracking-[0.08px] w-full"
                          wrapClassName="w-full"
                          type="password"
                          shape="round"
                          color="black_900"
                          size="md"
                          variant="outline"
                        ></Input>
                      </div>
                      <div className="flex flex-row items-end justify-between mt-5 w-full">
                        <CheckBox
                          className="font-medium text-base text-left tracking-[0.08px]"
                          inputClassName="h-6 mr-[5px] w-6"
                          name="H4"
                          id="H4"
                          label="Remember me?"
                        ></CheckBox>
                        <Text
                          className="common-pointer mt-1.5 text-base text-black-900 tracking-[0.08px]"
                          size="txtPoppinsMedium16"
                          onClick={() => navigate("/forgotpassword")}
                        >
                          Mot de passe oublié?
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-medium font-poppins min-w-[400px] sm:min-w-full rounded-[10px] text-base text-center tracking-[0.08px]"
                      onClick={() => navigate("/")}
                      shape="round"
                      color="bluegray_900"
                      size="2xl"
                    >
                      Connexion
                    </Button>
                    <Text
                      className="common-pointer text-black-900 text-sm tracking-[-0.50px]"
                      size="txtInterRegular14Black900"
                      onClick={() => navigate("/register")}
                    >
                      <span className="text-black-900 font-inter text-left font-normal">
                        <>Don&#39;t have an account? </>
                      </span>
                      <span className="text-bluegray-900 font-inter text-left font-normal">
                        Register here
                      </span>
                    </Text>
                  </div>
                </div>
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
    </>
  );
};

export default LoginPage;
