import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterTag>
      <FullW>
        <NavLinks>
          <MShow to="/test">이용약관</MShow>
          <span>|</span>
          <MShow to="/test">개인정보처리방침</MShow>
          <span>|</span>
          <MShow to="/test">공지사항</MShow>
          <span>|</span>
          <MShow to="/test">자주 묻는 질문</MShow>
          <span>|</span>
          <MShow to="/test">이벤트</MShow>
          <span>|</span>
          <MShow to="/test">About A-Nice24</MShow>
        </NavLinks>
      </FullW>
      <InnerWClf>
        <Fl>
          <FooterStrong>(주)나이스24시편의점</FooterStrong>
          <FooterUl>
            <FooterLi>대표이사 : 정준호</FooterLi>
            <FooterLi>전라남도 나주시 중야1길 37</FooterLi>
            <FooterLi>사업자 등록번호 : 000-00-00000</FooterLi>
            <FooterLi>통신판매업신고 : 2025-전남나주-0001</FooterLi>
          </FooterUl>
          <NtFix1>

            <Copyright>Copyright © 2025 Nice24 All right reserved.</Copyright>
          </NtFix1>
        </Fl>
        <Fl>
          <FooterStrong>고객센터</FooterStrong>
          <FooterUl>
            <FooterLi>카카오톡</FooterLi>
            <FooterLi>대표번호</FooterLi>
            <FooterLi>메일</FooterLi>
            <FooterLi>제휴문의</FooterLi>
          </FooterUl>
          <NtFix1>
            이용 중 궁금하신 점이 있으신가요?
            <br />
            메일 또는 플러스친구 `나이스24시편의점`으로 연락해주세요.
            <br />
            최선을 다해 도와드리겠습니다.
          </NtFix1>
        </Fl>
      </InnerWClf>
    </FooterTag>
  );
}

const FooterTag = styled.footer`
  color: #666;
  position: relative;
  background: #fff;
  z-index: 99;
`;

const FullW = styled.div`
  width: 100%;
  border-bottom: 1px solid #acacac;
  border-top: 3px solid #0067a3;
`;

const NavLinks = styled.nav`
  text-align: center;
`;

const MShow = styled.a`
  display: inline-block;
  padding: 10px 14px 11px;
  font-size: 12px;
  color: #666;
  letter-spacing: -0.5px;
  @media (max-width: 719px) {
    padding-left: 0;
}
  @media (max-width: 719px) {
  {
    display: inline-block !important;
  }
  @media (max-width: 719px) {
    padding-top: 16px;
    padding-bottom: 16px px;
  }
  @media (max-width: 719px) {
    display: none;
  }
`;

const InnerWClf = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
  padding: 32px 0;
`;
const LogoFooter = styled.div`
  isplay: block;
  float: left;
  margin-right: 52px;
`;
const LogoGray = styled.i`
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  background-position: -393px -397px;
  width: 100px;
  padding-top: 40px;
`;
const Fl = styled.div`
  display: block;
  float: left;
  margin-right: 32px;
  position: relative;
`;

const FooterStrong = styled.strong`
  font-size: 12px;
  font-weight: bold;
`;
const FooterUl = styled.ul`
  margin-top: 8px;
`;

const FooterLi = styled.li`
  font-size: 12px;
  height: 18px;
`;

const NtFix1 = styled.span`
  font-size: 10px;
  vertical-align: middle;
  display: inline-block;
  margin-top: 16px;
`;

const Copyright = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 10px;
  vertical-align: middle;
`;

const Fr = styled.div`
  display: block;
  float: right;
  margin-right: 0px px;
  position: relative;
`;

const NavList = styled.nav`
  margin-top: 8px;
`;

const LinkFacebook = styled.a`
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  background-position: -461px -488px;
  width: 36px;
  padding-top: 36px;
  font-size: 10px;
  vertical-align: middle;
  margin-left: 0;
`;
const LinkInstagram = styled.a`
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  height: 0;
  overflow: hidden;
  display: inline-block;
  line-height: 0;
  letter-spacing: 0;
  background-position: -512px -488px;
  width: 36px px;
  padding-top: 36px;
  font-size: 10px;
  vertical-align: middle;
  margin-left: 8px;
`;

const LinkNaverBlog = styled.a`
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  background-position: -405px -262px;
  width: 36px;
  padding-top: 36px;
  font-size: 10px;
  vertical-align: middle;
  margin-left: 8px;
`;
const LinkNaverPost = styled.a`
  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070.png);
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
`;

export default Footer;