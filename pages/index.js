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
import CountUp from "react-countup";
import "../styles/styles.scss";
import Profile from "../components/Profile";
import rollingService from "../services/rollingService";
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
  mainText: {
    marginTop: "100px",
    fontSize: "36px",
    fontWeight: "bold",
    fontStretch: "normal",
    color: "#EEC667",
    whiteSpace: "pre-wrap",
    // textAlign: "center",
  },
  mainSubText: {
    fontSize: "18px",
    lineHeight: "32px",
    color: "#212529",
    marginTop: "20px",
    marginBottom: "60px",
  },
  dataText: {
    fontWeight: "bold",
    fontSize: "28px",
    color: "white",
    letterSpacing: "-.72px",
    lineHeight: "42px",
    whiteSpace: "pre-wrap",
  },
  dataSubText: {
    fontWeight: "regular",
    marginBottom: "20px",
    fontSize: "24px",
    color: "white",
    whiteSpace: "pre-wrap",
  },
  dataSubTextInfo: {
    fontSize: "14px",
    color: "#828c94",
    letterSpacing: "-.32px",
  },
});
const Index = (props) => {
  const { posts } = props;
  const classes = useStyles();
  const [buttonChange, setButtonChange] = useState(false);
  const prevScrollY = useRef(0);
  const layoutRef = useRef();
  const layout2Ref = useRef();
  const [goingUp, setGoingUp] = useState(false);
  const [bodyWidth, setBodyWidth] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
  const rollingPaperContent = posts.rollingPaperContent + 500;
  const rollingPaper = posts.rollingPaper + 50;
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
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  useEffect(() => {
    setBodyWidth(layoutRef.scrollWidth);
    setBodyHeight(
      layoutRef.current.scrollHeight + layout2Ref.current.scrollHeight
    );
  }, []);
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
      <div ref={layoutRef}>
        <Confetti
          width={bodyWidth}
          height={bodyHeight}
          numberOfPieces={100}
          colors={[
            "#f44336",
            "#e91e63",
            "#9c27b0",
            "#673ab7",
            "#3f51b5",
            "#2196f3",
            "#03a9f4",
            "#00bcd4",
            "#009688",
            "#4CAF50",
            "#8BC34A",
            "#CDDC39",
            "#FFEB3B",
            "#FFC107",
            "#FF9800",
            "#FF5722",
            "#795548",
          ]}
          opacity={0.4}
        />
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
      <div ref={layout2Ref}>
        <Layouts min="80vh">
          <div className={classes.mainText}>
            <span>누구나</span>
            <br />
            <span>축하할 수 있도록</span>
          </div>
          <div className={classes.mainSubText}>
            <p>
              롤링페이퍼는 기존에 존재하던 선물의 방식을 벗어나, 온라인을 활용한
              동적이고 예쁜 새로운 방식으로 선물하는 방법을 고민합니다. 이를
              통해 많은 사람들이 서로 축하를 주고받는 문화가 자리잡기를
              꿈꿉니다.
            </p>
          </div>
          <a
            style={{
              borderRadius: "6px",
              width: "300px",
              backgroundColor: "#EEC667",
              margin: "0 auto",
              textAlign: "center",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              boxShadow: "0 4px 14px 0 rgba(238,198,103,0.5)",
              height: "58px",
              lineHeight: "58px",
              transition: ".35s",
              zIndex: "10",
              cursor: "pointer",
            }}
          >
            자세히 보기
          </a>
        </Layouts>
      </div>
      <div style={{ backgroundColor: "#2f3438" }}>
        <Layouts min="50vh">
          <div className={classes.dataText}>
            <p>
              롤링페이퍼는
              <br />
              많은 사람들에게 행복을
              <br />
              전달해나가고 싶습니다.
            </p>
          </div>
          <div className={classes.dataSubText}>
            <span className={classes.dataSubTextInfo}>
              현재까지 누적 사용자수
            </span>
            <br />
            <span>
              사용자 수{" "}
              <span style={{ color: "#FF7F4E", fontWeight: "bold" }}>
                <CountUp end={rollingPaperContent} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </span>
            </span>
          </div>
          <div className={classes.dataSubText} style={{ marginBottom: "0" }}>
            <span className={classes.dataSubTextInfo}>
              롤링페이퍼를 받은 사람 수
            </span>
            <br />
            <span>
              축하받은 수{" "}
              <span style={{ color: "#FF7F4E", fontWeight: "bold" }}>
                <CountUp end={rollingPaper} redraw={true}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </span>
            </span>
          </div>
          <div
            style={{
              position: "relative",
              marginBottom: "40px",
              bottom: "0",
              right: "0",
              fontSize: "14px",
              textAlign: "right",
              color: "#656e75",
            }}
          >
            *{year}년 {month + 1}월 {date}일기준
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
      <MobileView>
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
              boxShadow: "0 4px 14px 0 rgba(255,127,78,0.8)",
              height: "58px",
              lineHeight: "58px",
              transition: ".35s",
              zIndex: "10",
              cursor: "pointer",
              textDecoration: "none",
            }}
            href="https://rollingpaper.site"
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
              cursor: "pointer",
              textDecoration: "none",
            }}
            href="https://rollingpaper.site"
          >
            롤링페이퍼 시작하기
          </a>
        )}
      </MobileView>
    </div>
  );
};

export default Index;

Index.getInitialProps = async () => {
  const res = await rollingService.getRolling();

  return {
    posts: res.data,
  };
};
