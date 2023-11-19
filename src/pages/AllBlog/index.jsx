import React, { useState ,useEffect } from "react";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/myimage.png"
import backgroundImage1 from "../../assets/images/alex-suprun-tCvEbgjEoCA-unsplash.jpg"
import backgroundImage from "../../assets/images/background.jpg"
import { DataService } from "DataService/DataService";
import { Button, Img, Input, Line, List, Text } from "components";

const AllBlogPage = () => {
  let foundNews = {}; // Déclaration de la variable avec une valeur par défaut vide

  const [news , setNews] = useState([])
  useEffect(() => {
    const data = DataService.getProductsData();
    setNews(data);
  
    
  }, []);
  if (news && news.length > 0) {
    foundNews = news.filter(item => item && item.id && item.id < 7);
  }
  




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
              <Text style={{color:"#CF2020",cursor:"pointer"}}
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
                //onClick={() => navigate("/search")}
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
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start md:px-5 w-[45%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.50px] w-[76%] sm:w-full"
                size="txtInterSemiBold36Black900"
              >
                Read all the latest news on technology around in Africa
              </Text>
              <div className="bg-gray-50 flex md:flex-col flex-row gap-1.5 items-center justify-end pl-2.5 rounded-[15px] w-full">
                <Input
                  name="FrameTwentyThree"
                  placeholder="Search New here..."
                  className="leading-[normal] p-0 placeholder:text-black-900 text-left text-lg tracking-[-0.50px] w-full"
                  wrapClassName="md:flex-1 md:mt-0 my-[13px] w-[82%] md:w-full"
                  color="gray_50"
                  size="sm"
                ></Input>
                <Line className="bg-black-900_87 h-[38px] md:h-px md:mt-0 my-[21px] md:w-full w-px" />
                <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[15px] w-[18%] md:w-full">
                  <div
                    className="common-pointer flex flex-row gap-[11px] items-start justify-center my-[11px] w-[99%] md:w-full"
                    onClick={() => navigate("/allblogfilter")}
                  >
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px]"
                      size="txtInterSemiBold18Black900"
                    >
                      Filter
                    </Text>
                    <Img
                      className="h-6 mt-0.5 w-6"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1292px] mt-[100px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-[50px] items-center justify-start w-3/4 md:w-full">
                <div className="flex flex-col items-center justify-start pb-[23px] w-full">
                  <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              {news && news?.filter(item => item && item.id && item.id < 7).map((item) => (
  
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div
                      className="bg-cover bg-no-repeat flex flex-col h-[181px] items-center justify-start w-full"
                      style={{
                        backgroundImage: `url(${backgroundImage1})`,
                      }}
                    >
                          <div className="bg-gradient  flex flex-col md:gap-10 gap-[108px] justify-start p-[13px] w-full">
                            <Input
                              name="language"
                              placeholder="Entertaiment "
                              className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[10px] text-left tracking-[-0.50px] w-full"
                              wrapClassName="md:ml-[0] ml-[177px] mr-0.5 mt-0.5 w-[36%]"
                            ></Input>
                            <Text
                              className="mb-1 text-[10px] text-white-A700 tracking-[-0.50px]"
                              size="txtInterSemiBold10"
                            >
                            Tuesday, April 3rd 2022


                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <Text
                            className="text-black-900 text-sm tracking-[-0.50px] w-full"
                            size="txtInterSemiBold14"
                          >
                         {item?.name}
                          </Text>
                          <Text
                            className="leading-[25.00px] text-[10px] text-black-900_87 tracking-[-0.50px] w-full"
                            size="txtPoppinsRegular10Black90087"
                          >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                          </Text>
                        </div>
                        <Button
                          className="common-pointer cursor-pointer flex items-center justify-center min-w-[138px]"
                         // onClick={() => navigate("/sigleblog")}
                          rightIcon={
                            <Img
                              className="h-[15px] ml-[5px] mr-[30px] my-2.5"
                              src="images/img_upload.svg"
                              alt="upload"
                            />
                          }
                          shape="round"
                        >
                          <div className="leading-[normal] text-left text-xs tracking-[-0.50px]">
                            Read More
                          </div>
                        </Button>
                      </div>
                    </div>


                    ))}
                   
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-center pb-[3px] pr-[3px] w-1/4 md:w-full">
                  <Img
                    className="h-[15px] w-[15px]"
                    src={"images/img_arrowleft_black_900.svg"}
                    alt="arrowleft"
                  />
                  <Button
                    className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded-[5px] text-center text-sm tracking-[-0.50px] w-[35px]"
                    color="bluegray_900"
                    size="sm"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded-[5px] text-center text-sm tracking-[-0.50px] w-[35px]"
                    color="gray_100"
                    size="sm"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-[35px] leading-[normal] rounded-[5px] text-center text-sm tracking-[-0.50px] w-[35px]"
                    color="gray_100"
                    size="sm"
                  >
                    3
                  </Button>
                  <Button
                    className="flex h-[35px] items-center justify-center rounded-[5px] w-[35px]"
                    color="gray_100"
                    size="sm"
                  >
                    <Img className="h-5" src="images/img_user.svg" alt="user" />
                  </Button>
                  <Img
                    className="h-[15px] mr-4 w-[15px]"
                    src="images/img_arrowright_15X15.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-[24%] md:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-[82%] md:w-full">
                  <div className="flex flex-row gap-6 items-center justify-between w-full">
                    <Text
                      className="text-bluegray-900 text-sm tracking-[-0.50px]"
                      size="txtInterSemiBold14Bluegray900"
                    >
                      New Released
                    </Text>
                    <Text
                      className="text-black-900_90 text-sm tracking-[-0.50px]"
                      size="txtInterSemiBold14Black90090"
                    >
                      Hot Topic
                    </Text>
                    <Text
                      className="text-black-900_90 text-sm tracking-[-0.50px]"
                      size="txtInterSemiBold14Black90090"
                    >
                      Popular
                    </Text>
                  </div>
                  <Line className="bg-bluegray-900 h-px w-[38%]" />
                </div>
                <List
                  className="flex flex-col font-poppins gap-[21px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      src={backgroundImage}
                      alt="unsplashG0gbFourteen"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.50px] w-full"
                        size="txtPoppinsBold14"
                      >
                  
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="text-[10px] text-black-900 tracking-[-0.50px]"
                          size="txtInterSemiBold10Black900"
                        >
                        Paris, 24 april 2022
                        </Text>
                        <Text
                          className="ml-[5px] text-[10px] text-black-900_87 tracking-[-0.50px]"
                          size="txtInterRegular10"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      src={backgroundImage}
                      alt="unsplashoj0zeY"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.50px] w-full"
                        size="txtPoppinsBold14"
                      >
                          
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="text-[10px] text-black-900 tracking-[-0.50px]"
                          size="txtInterSemiBold10Black900"
                        >
                        Paris, 24 april 2022
                        </Text>
                        <Text
                          className="ml-[5px] text-[10px] text-black-900_87 tracking-[-0.50px]"
                          size="txtInterRegular10"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      src={backgroundImage}
                      alt="unsplashLNdpiEight"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.50px] w-full"
                        size="txtPoppinsBold14"
                      >
                         
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="text-[10px] text-black-900 tracking-[-0.50px]"
                          size="txtInterSemiBold10Black900"
                        >
                        Paris, 24 april 2022
                        </Text>
                        <Text
                          className="ml-[5px] text-[10px] text-black-900_87 tracking-[-0.50px]"
                          size="txtInterRegular10"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      src={backgroundImage}
                      alt="unsplashJsuBKj"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.50px] w-full"
                        size="txtPoppinsBold14"
                      >
                          
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="text-[10px] text-black-900 tracking-[-0.50px]"
                          size="txtInterSemiBold10Black900"
                        >
                        Paris, 24 april 2022
                        </Text>
                        <Text
                          className="ml-[5px] text-[10px] text-black-900_87 tracking-[-0.50px]"
                          size="txtInterRegular10"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      src={backgroundImage}
                      alt="unsplashTVllFy"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.50px] w-full"
                        size="txtPoppinsBold14"
                      >
                          
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="text-[10px] text-black-900 tracking-[-0.50px]"
                          size="txtInterSemiBold10Black900"
                        >
                        Paris, 24 april 2022
                        </Text>
                        <Text
                          className="ml-[5px] text-[10px] text-black-900_87 tracking-[-0.50px]"
                          size="txtInterRegular10"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-center justify-between w-full">
                    <Img
                      className="h-[65px] md:h-auto object-cover w-[65px]"
                      src={backgroundImage}
                      alt="unsplashy5PG8Z"
                    />
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="text-black-900 text-sm tracking-[-0.50px] w-full"
                        size="txtPoppinsBold14"
                      >
                          
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                      </Text>
                      <div className="flex flex-row font-inter items-center justify-start ml-0.5 md:ml-[0] w-[83%] md:w-full">
                        <Text
                          className="text-[10px] text-black-900 tracking-[-0.50px]"
                          size="txtInterSemiBold10Black900"
                        >
                        Paris, 24 april 2022
                        </Text>
                        <Text
                          className="ml-[5px] text-[10px] text-black-900_87 tracking-[-0.50px]"
                          size="txtInterRegular10"
                        >
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
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

export default AllBlogPage;
