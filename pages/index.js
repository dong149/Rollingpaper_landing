// 스플래쉬 뷰
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Layouts from "../components/Layouts";
import { makeStyles } from "@material-ui/core";
import ReactFullpage from "@fullpage/react-fullpage";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
const useStyles = makeStyles({
  main: {
    width: "100%",
    textAlign: "left",
    fontSize: "32px",
    fontWeight: "bold",
    lineHeight: "46px",
    marginTop: "30px",
  },
  sectionWrapper: {
    position: "relative",
    minHeight: "100vh",
    // backgroundImage: `url('/mockup.jpg')`,
    // backgroundSize: "cover",
  },
  sectionWrapperMobile: {
    // position: "relative",
    // minHeight: "100vh",
    // backgroundImage: `url('/mockup_mobile.png')`,
    // backgroundSize: "100%",
    // // height: "100%",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center center",
    // overflow: "hidden",
  },
  rolling: {
    width: "343px",
    // height: '379px',
    margin: "0 auto",
    marginTop: "30px",
    // marginBottom: '87px',
  },
  // 모바일

  mainMobile: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: "46px",
    marginTop: "30px",
  },
  mainLogoWrapMobile: {
    width: "100%",
    textAlign: "center",
  },
  mainLogoMobile: {
    marginTop: "30px",
    width: "200px",
  },
  mainImageWrapMobile: {
    width: "100%",
    textAlign: "center",
  },
  mainImageMobile: {
    marginTop: "50px",
    width: "80%",
  },
});
const Index = () => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>롤링 페이퍼 랜딩 페이지:: 특별한 온라인 선물</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 ,user-scalable=no, maximum-scale=1"
        />
        <meta name="description" content="롤링 페이퍼 쉽게 만들기" />
        <meta
          name="keywords"
          content="롤링페이퍼,선물,생일,여자친구,100일,친구"
        />
      </Head>
      {/* <BrowserView>
        <div className={`section  ${classes.sectionWrapper}`}>
          <Layouts>
            <div className={classes.main}>
              <span>롤링페이퍼로</span>
              <br />
              <span>마음을 선물하세요.</span>
            </div>
          </Layouts>
        </div>
      </BrowserView> */}
      <ReactFullpage
        // anchors={["main", "intro", "input1", "input2", "input3", "finish"]}
        // normalScrollElements="#input1 .layout"
        v2compatible={true}
        // interlockedSlides={["intro", "input1"]}
        // scrollBar={true}
        // navigation={true}
        render={({ state, fullpageApi }) => {
          console.log(fullpageApi);

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Layouts>
                  <div className={classes.mainMobile}>
                    <div className={classes.mainLogoWrapMobile}>
                      <img className={classes.mainLogoMobile} src="/logo.png" />
                    </div>

                    <div style={{ lineHeight: "40px", width: "100%" }}>
                      <span>특별한 온라인 선물</span>
                    </div>
                    <div style={{ lineHeight: "30px", width: "100%" }}>
                      <span>이제는 롤링페이퍼로</span>
                    </div>
                  </div>
                  <div className={classes.mainImageWrapMobile}>
                    <img
                      className={classes.mainImageMobile}
                      src="/mockup_mobile.png"
                    />
                  </div>
                </Layouts>
              </div>
              <div className="section">두번째</div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default Index;
