// 스플래쉬 뷰
import React, { useState, useEffect, useRef } from "react";
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
import Buttons from "../components/Buttons";
import StickyFooter from "../components/StickyFooter";
import VisibilitySensor from "react-visibility-sensor";
import Confetti from "react-confetti";
import "../styles/styles.scss";
import Profile from "../components/Profile";
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
    marginTop: "80px",
    width: "100%",
    textAlign: "center",
  },
  mainImageMobile: {
    width: "80%",
    filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.8))",
  },
});
const Index = () => {
  const classes = useStyles();
  const [buttonChange, setButtonChange] = useState(false);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
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
      <div>
        <Layouts min="100vh">
          <div className={classes.mainMobile}>
            <div className={classes.mainLogoWrapMobile}>
              <img className={classes.mainLogoMobile} src="/logo_color.png" />
            </div>

            <div style={{ lineHeight: "40px", width: "100%" }}>
              <span>특별한 온라인 선물</span>
            </div>
            <div style={{ lineHeight: "30px", width: "100%" }}>
              <span>이제는 롤링페이퍼로</span>
            </div>
          </div>
          <div className={classes.mainImageWrapMobile}>
            <img className={classes.mainImageMobile} src="/mockup_mobile.png" />
          </div>
        </Layouts>
      </div>
      <div style={{ backgroundColor: "#F6C453" }}>
        <Layouts min="50vh">
          <div className={classes.mainMobile}>
            <span
              style={{
                fontSize: "50px",
                color: "white",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              5423명
            </span>
            <span style={{ fontSize: "20px", color: "black" }}>
              누적 사용자 수
            </span>
            <span
              style={{
                fontSize: "50px",
                color: "white",
                fontWeight: "bold",
                marginTop: "70px",
                marginBottom: "10px",
              }}
            >
              898명
            </span>
            <span style={{ fontSize: "20px", color: "black" }}>
              지금까지 축하받은 사람
            </span>
          </div>
        </Layouts>
      </div>
      <div
        style={{
          backgroundColor: "#222222",
          color: "white",
          width: "100%",
          paddingTop: "50px",
          paddingBottom: "100px",
          // minHeight: "50vh",
          textAlign: "center",
        }}
      >
        {/* <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              // flexDirection: "row",
              width: "100%",
              textAlign: "center",

              alignItems: "center",
            }}
          >
            <Profile imageSrc="" name="류동훈" />
            <Profile imageSrc="" name="차서현" />
            <Profile imageSrc="" name="이지현" />
            <Profile imageSrc="" name="임지영" />
            <Profile imageSrc="" name="박재성" />
            <Profile imageSrc="" name="이인애" />
            <Profile imageSrc="" name="한만종" />
          </div> */}
        <div
          style={{
            // position: "absolute",
            // bottom: "50px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: "black-han-sans", fontSize: "25px" }}>
            왼손잡이들
          </span>
          <br />
          <span>사업자등록번호 : 156-28-00781</span>
          <br />
          <span>대표(CEO) : 류동훈 (Donghun Ryoo)</span>
          <br />
          <span>서울특별시 강남구 논현로87길 41, 신일유토빌 321호</span>
          <br />
          <span>Address : Nonhyun Ro 87 Gil, Seoul, Korea.</span>
          <br />
          <span>Email : leftecommerce@gmail.com</span>
        </div>
      </div>
      {goingUp ? (
        <a
          style={{
            position: "fixed",
            borderRadius: "6px",
            left: "40px",
            right: "40px",
            bottom: "50px",

            backgroundColor: "#FF7F4E",
            textAlign: "center",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "0 0 15px 0 rgba(0,0,0,.2)",
            height: "58px",
            lineHeight: "58px",
            transition: ".35s",
            zIndex: "10",
          }}
        >
          롤링페이퍼 시작하기
        </a>
      ) : (
        <a
          style={{
            position: "fixed",
            borderRadius: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#FF7F4E",
            textAlign: "center",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "0 0 15px 0 rgba(0,0,0,.2)",
            height: "58px",
            lineHeight: "58px",
            transition: ".35s",
            zIndex: "10",
          }}
        >
          롤링페이퍼 시작하기
        </a>
      )}
    </div>
  );
};

export default Index;
