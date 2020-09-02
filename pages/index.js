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
import { motion } from "framer-motion";
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
  mainTitle: {
    textAlign: "center",
    fontSize: "45px",
    fontWeight: "bold",
    width: "100%",
    color: "#EEC667",
  },
  mainText: {
    marginTop: "100px",
    // fontFamily: "garam",
    fontSize: "36px",
    fontWeight: "bold",
    fontStretch: "normal",
    color: "#FF7F4E",
    whiteSpace: "pre-wrap",
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
    // color: "white",
    letterSpacing: "-.72px",
    lineHeight: "42px",
    whiteSpace: "pre-wrap",
  },
  dataSubText: {
    fontWeight: "regular",
    marginBottom: "20px",
    fontSize: "24px",
    // color: "white",
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
        <meta name="description" content="온라인 롤링 페이퍼 서비스" />
        <meta
          name="keywords"
          content="온라인,롤링페이퍼,선물,생일,여자친구,100일,친구,서비스"
        />
      </Head>

      <div ref={layoutRef}>
        <Confetti
          width={bodyWidth}
          height={bodyHeight}
          numberOfPieces={50}
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
          opacity={0.2}
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
          <VisibilitySensor>
            {/* {({ isVisible }) => ( */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  // transform: "translateY(-50px)",
                  // scale: 0.8,
                  y: 50,
                  opacity: 0,
                },
                visible: {
                  // transform: "translateY(0)",
                  // scale: 1,
                  y: 0,
                  opacity: 1,
                  transition: {
                    // delay: 0,
                    ease: "easeIn",
                    duration: 1,
                  },
                },
              }}
            >
              <div className={classes.mainImageWrapMobile}>
                <img
                  className={classes.mainImageMobile}
                  src="/mockup_mobile.png"
                />
              </div>
            </motion.div>
            {/* )} */}
          </VisibilitySensor>
        </Layouts>
      </div>
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <Layouts min="50vh">
          <div className={classes.dataText}>
            <p>
              롤링페이퍼로
              <br />
              사랑하는 사람들과
              <br />
              소중한 마음을 공유하세요!
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
      <div ref={layout2Ref} style={{ marginBottom: "70px" }}>
        <Layouts min="80vh">
          <div className={classes.mainText}>
            <span>1.</span>
            <br />
            <span>롤링페이퍼를</span>
            <br />
            <span>생성해요!</span>
          </div>
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          >
            <VisibilitySensor>
              {({ isVisible }) => (
                <motion.div
                  initial="hidden"
                  animate={`${isVisible && "visible"}`}
                  variants={{
                    hidden: {
                      y: 50,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        ease: "easeIn",
                        duration: 1,
                      },
                    },
                  }}
                >
                  <img src="/create.png" style={{ width: "50%" }} />
                  <img src="/create-name.png" style={{ width: "50%" }} />
                </motion.div>
              )}
            </VisibilitySensor>
          </div>
          {/* <div className={classes.mainSubText}>
            <p>
              받으실 분의 이름과 암호를 입력해주세요.(암호는 조회시 사용되며,
              별다른 인증 없이 동명이인을 거르기 위함입니다.)
            </p>
          </div> */}
          <div className={classes.mainText}>
            <span>2.</span>
            <br />
            <span>함께 쓸 사람들과</span>
            <br />
            <span>공유해요!</span>
          </div>
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          >
            <VisibilitySensor>
              {({ isVisible }) => (
                <motion.div
                  initial="hidden"
                  animate={`${isVisible && "visible"}`}
                  variants={{
                    hidden: {
                      // y: 50,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        ease: "easeIn",
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <img src="/main-empty.png" style={{ width: "50%" }} />
                  <img src="/share.png" style={{ width: "50%" }} />
                  <img src="/kakao.png" style={{ width: "50%" }} />
                  <img src="/share-kakao-sender.png" style={{ width: "50%" }} />
                </motion.div>
              )}
            </VisibilitySensor>
          </div>
          {/* <div className={classes.mainSubText}>
            <p>
              공유하기 버튼을 눌러주시고, 함께 준비하는 사람들에게 공유버튼을
              눌러 함께 쓸 사람들과 공유하세요!
            </p>
          </div> */}
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          ></div>
          {/* <div className={classes.mainSubText}>
            <p>카카오톡과 연동되어, 쉽게 공유할 수 있습니다.</p>
          </div> */}
          <div className={classes.mainText}>
            <span>3.</span>
            <br />
            <span>여러 기능으로</span>
            <br />
            <span>예쁘게 작성해요!</span>
          </div>
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          >
            <VisibilitySensor>
              {({ isVisible }) => (
                <motion.div
                  initial="hidden"
                  animate={`${isVisible && "visible"}`}
                  variants={{
                    hidden: {
                      // y: 50,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        ease: "easeIn",
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <img src="/editor-color.png" style={{ width: "50%" }} />
                  <img src="/editor-font.png" style={{ width: "50%" }} />
                  <img src="/editor-photo.png" style={{ width: "50%" }} />
                  <img src="/editor-wrote.png" style={{ width: "50%" }} />
                </motion.div>
              )}
            </VisibilitySensor>
          </div>
          {/* <div className={classes.mainSubText}>
            <p>
              받으실 분의 이름과 암호를 입력해주세요.(암호는 조회시 사용되며,
              별다른 인증 없이 동명이인을 거르기 위함입니다.)
            </p>
          </div> */}
          <div className={classes.mainText}>
            <span>4.</span>
            <br />
            <span>주인공에게</span>
            <br />
            <span>보내주세요!</span>
          </div>
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
          >
            <VisibilitySensor>
              {({ isVisible }) => (
                <motion.div
                  initial="hidden"
                  animate={`${isVisible && "visible"}`}
                  variants={{
                    hidden: {
                      // y: 50,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        // ease: "easeIn",
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <img src="/share.png" style={{ width: "50%" }} />
                  <img
                    src="/share-kakao-receiver.png"
                    style={{ width: "50%" }}
                  />
                  <img src="/receiver.png" style={{ width: "50%" }} />
                  <img src="/detail.png" style={{ width: "50%" }} />
                </motion.div>
              )}
            </VisibilitySensor>
          </div>
          <BrowserView>
            <div
              style={{
                width: "100%",
                borderRadius: "6px",
                backgroundColor: "#FF7F4E",
                textAlign: "center",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                boxShadow: "0 4px 14px 0 rgba(255,127,78,0.8)",
                height: "58px",
                lineHeight: "58px",
                transition: ".35s",
                cursor: "pointer",
                textDecoration: "none",
                marginTop: "50px",
              }}
              onClick={() => {
                location.href = "https://rollingpaper.site";
              }}
            >
              롤링페이퍼 시작하기
            </div>
          </BrowserView>
        </Layouts>
      </div>

      <div style={{ backgroundColor: "#fafafa" }}>
        <Layouts>
          <div
            style={{
              // position: "absolute",
              // bottom: "50px",

              color: "",
              width: "100%",
              textAlign: "center",
              marginTop: "150px",
              marginBottom: "150px",
            }}
          >
            <VisibilitySensor>
              {({ isVisible }) => (
                <motion.div
                  initial="hidden"
                  animate={`${isVisible && "visible"}`}
                  variants={{
                    hidden: {
                      // y: 50,
                      opacity: 0,
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        // ease: "easeIn",
                        duration: 2,
                      },
                    },
                  }}
                >
                  <div>
                    <span
                      style={{ fontFamily: "black-han-sans", fontSize: "35px" }}
                    >
                      왼손잡이들
                    </span>
                    <br />
                    <span>사업자등록번호 : 156-28-00781</span>
                    <br />
                    <span>대표(CEO) : 류동훈 (Donghun Ryoo)</span>
                    <br />
                    <span>
                      서울특별시 강남구 논현로87길 41, 신일유토빌 321호
                    </span>
                    <br />
                    <span>Address : Nonhyun Ro 87 Gil, Seoul, Korea.</span>
                    <br />
                    <span>Email : leftecommerce@gmail.com</span>
                  </div>
                </motion.div>
              )}
            </VisibilitySensor>
          </div>
        </Layouts>
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
              boxShadow: "0 0 15px 0 rgba(255,127,78,0.8)",
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
