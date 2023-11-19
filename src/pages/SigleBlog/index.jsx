import React from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/myimage.png"
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Img, Input, Line, List, Text } from "components";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchSVG } from "assets/images";
import { DataService } from "DataService/DataService";


const SigleBlogPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [news, setNews] = useState([]);
  let foundNews = {}; // Déclaration de la variable avec une valeur par défaut vide

  
  useEffect(() => {
    const data = DataService.getProductsData();
    setNews(data);
  
    
  }, []);
  if (news && news.length > 0) {
    foundNews = news.find(item => item?.id === parseInt( id));
  }

  
  const imgSrc = foundNews?.image ? require(`../../assets/images/${foundNews?.image}`) : null;

  return (
    <>
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
            <Text style={{color:"#CF2020"}}
            className="text-lg text-white-A700 tracking-[-0.50px]"
            size="txtInterSemiBold18"
           
          >
            Post Details
          </Text>
            
           
           
            
          </div>
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full">
          <Img
          className="common-pointer h-6 w-6"
          src="/images/img_search.svg"
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
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start md:px-5 w-[45%] md:w-full">
          
            <Text
              className="mt-[23px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.50px] w-full"
              size="txtInterBold36"
            >
            {foundNews?.name}
              
            </Text>
            <div className="flex flex-row items-center justify-center mt-[38px] w-[56%] md:w-full">
              <Text
                className="text-black-900 text-lg tracking-[-0.50px]"
                size="txtInterSemiBold18Black900"
              >

              Tuesday, April 3rd 2022




              </Text>
              <Text
                className="ml-1 text-black-900_87 text-lg tracking-[-0.50px]"
                size="txtInterSemiBold18Black90087"
              >
                <span className="text-black-900 font-inter text-left font-semibold">
                  -{" "}
                </span>
              
              </Text>
            </div>
          </div>
          {imgSrc && (
            <Img
              className="h-[497px] sm:h-auto mt-[50px] object-cover w-full"
              src={imgSrc}
              alt="RectangleFive"
            />
          )}
          <div className="flex flex-col gap-[50px] items-center justify-start mt-[60px] md:px-5 w-3/5 md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
              
                <Text
                  className="leading-[35.00px] mt-[30px] text-base text-black-900 tracking-[-0.50px] w-full"
                  size="txtInterRegular16Black900"
                >
                 {foundNews?.description}
                </Text>
              
              </div>
              
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                size="txtInterSemiBold36Black900"
              >
              Details
              </Text>
              <Text
                className="leading-[35.00px] mt-[30px] text-base text-black-900 tracking-[-0.50px] w-full"
                size="txtInterRegular16Black900"
              >
                <>
                Sed ut perspiciatis unde omnis iste natus er
              ror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qu
              ae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicab
              o. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed q
              uia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
              non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui 
              in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur?
                </>
              </Text>
              <Text
                className="leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full"
                size="txtInterRegular16Black900"
              >
              Sed ut perspiciatis unde omnis iste natus er
              ror sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa qu
              ae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicab
              o. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed q
              uia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
              quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
              non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui 
              in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
              quo voluptas nulla pariatur?
              </Text>
             
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px] w-full"
                  size="txtInterSemiBold36Black900"
                >
                Sed ut perspiciatis unde omnis iste natus
                </Text>
               
                <Text
                  className="leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full"
                  size="txtInterRegular16Black900"
                >
                  <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                  </>
                </Text>
              </div>
              
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              
           
            </div>
            <Line className="bg-black-900_4c h-px w-full" />
          </div>
          <div className="flex flex-col gap-[50px] items-center justify-start mt-[49px] md:px-5 w-[28%] md:w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex flex-row gap-2.5 items-start justify-center w-1/2 md:w-full">
               
                <div className="flex flex-col gap-[7px] items-center justify-left mt-[3px]">
                  <Text
                    className="text-2xl md:text-[12px] text-black-900 sm:text-xl tracking-[-0.50px]"
                    size="txtInterSemiBold24"
                  >
              Jonh Doe
                  </Text>
                  <Text 
                    className="text-black-900_7f text-xs tracking-[-0.50px]"
                    size="txtInterRegular12Black9007f"
                  >
                    Auteur
                  </Text>
                </div>
              </div>
            
            </div>
            <div className="flex flex-col gap-[25px] items-center justify-start w-[45%] md:w-full">
            
            </div>
          </div>
       {/*   <div className="flex flex-col items-center justify-start max-w-[1294px] mt-[120px] mx-auto pb-[34px] md:px-5 w-full">
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start rounded-lg w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between rounded-lg w-full">
                  <Text
                    className="mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]"
                    size="txtInterSemiBold36Black900"
                  >
                    Related News
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
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_13.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Input
                          name="language One"
                          placeholder="Entertaiment "
                          className="font-bold leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-xs tracking-[0.12px] w-full"
                          wrapClassName="md:ml-[0] ml-[267px] mr-1.5 mt-1.5 w-[29%]"
                        ></Input>
                        <Text
                          className="mr-[267px] text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-full"
                        size="txtInterSemiBold18Black900"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                        size="txtPoppinsRegular12"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-[5px] mr-[30px] my-2.5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      }
                      shape="round"
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_15.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[282px] mr-[21px] mt-1.5 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="red_900"
                          size="xs"
                        >
                          Political
                        </Button>
                        <Text
                          className="mr-[267px] text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-full"
                        size="txtInterSemiBold18Black900"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                        size="txtPoppinsRegular12"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-[5px] mr-[30px] my-2.5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      }
                      shape="round"
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[247px] items-center justify-start w-full"
                      style={{
                        backgroundImage: "url('images/img_group38_14.png')",
                      }}
                    >
                      <div className="bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 text-center text-xs tracking-[0.12px]"
                          shape="square"
                          color="orange_A700"
                          size="xs"
                        >
                          Finance
                        </Button>
                        <Text
                          className="mr-[269px] text-white-A700 text-xs tracking-[-0.50px]"
                          size="txtInterRegular12WhiteA700"
                        >
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-full"
                        size="txtInterSemiBold18Black900"
                      >
                        Zelensky accuses Russia of worst crimes since WW2{" "}
                      </Text>
                      <Text
                        className="leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full"
                        size="txtPoppinsRegular12"
                      >
                        The Ukrainian leader says Russia must face an
                        international trial as he calls for the country to be
                        thrown off the UN Security Council.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[151px]"
                      rightIcon={
                        <Img
                          className="h-[18px] ml-[5px] mr-[30px] my-2.5"
                          src="images/img_upload.svg"
                          alt="upload"
                        />
                      }
                      shape="round"
                    >
                      <div className="leading-[normal] text-left text-sm tracking-[-0.50px]">
                        Read More
                      </div>
                    </Button>
                  </div>
                </div>
              </List>
            </div>
                    </div> */}
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
    </>
  );
};

export default SigleBlogPage;
