import React from "react";
import styled from "styled-components";
import HeaderLogined from "../designSystem/common/headerLogined";
import AllPostImg from "../../assets/Img/AllPostImg.png";
import { useNavigate } from "react-router-dom";

function AllPost() {
  const navigate = useNavigate();

  const toWrite = () => {
    navigate("/Writepost");
  };

  return (
    <>
      <header>
        <HeaderLogined />
      </header>
      <BannerContainer>
        <BannerItemWrapper>
          <Left>
            <BannerTitle>사업 아이템</BannerTitle>
            <BannerSubTitle>
              사업 아이템을 살펴보고, 마음에 드는 사업에 투자해보세요.
            </BannerSubTitle>
          </Left>
          <Right>
            <img src={AllPostImg} width={"80%"} />
          </Right>
        </BannerItemWrapper>
      </BannerContainer>
      <Container>
        <BarContainer>
          <BarLeft>
            <SumPost>총 120개의 사업 아이템</SumPost>
          </BarLeft>
          <BarRight>
            <Search placeholder="사업 아이템 검색" />
            <Button onClick={toWrite}>사업 아이템 작성하기</Button>
          </BarRight>
        </BarContainer>
        <PostContainer>
          <PostLeft>
            <PostName>파운더즈</PostName>
            <PostIntroduce>
              창업을 하고자 하는 청년들을 위해 여러 다양한 것을 지원해 주는
              서비스입니다.
            </PostIntroduce>
            <TagConatainer>
              <TagItem>
                <Tag>#창업</Tag>
              </TagItem>
              <TagItem>
                <Tag>#투자</Tag>
              </TagItem>
              <TagItem>
                <Tag>#청년</Tag>
              </TagItem>
            </TagConatainer>
          </PostLeft>
          <PostRight>
            <SumText>총 투자금</SumText>
            <SumMoney>550,000원</SumMoney>
          </PostRight>

          <Line />
        </PostContainer>
      </Container>
    </>
  );
}

export default AllPost;

const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #ebf0fa;
  overflow: hidden;
`;

const BannerItemWrapper = styled.div`
  width: 1200px;
  height: 200px;
  margin: 0 auto;
`;

const Left = styled.div`
  float: left;
  height: 100%;
  padding-top: 50px;
`;

const Right = styled.div`
  float: right;
`;

const BannerTitle = styled.p`
  font-size: 30px;
  color: black;
  margin: 20px;
`;

const BannerSubTitle = styled.p`
  font-size: 15px;
  color: #666666;
  margin: 20px;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const BarContainer = styled.div`
  width: 1200px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;
const BarLeft = styled.div`
  float: left;
`;
const BarRight = styled.div`
  float: right;
`;

const SumPost = styled.p`
  font-size: 20px;
  color: black;
`;

const Search = styled.input`
  width: 300px;
  height: 55px;
  background: #f6f6f6;
  border: 1px solid #eee;
  border-radius: 7px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  margin-right: 10px;

  &:hover {
    background: #ececec;
    transition: 200ms;
  }

  &:focus {
    background: white;
  }

  ::placeholder {
    color: #c0c0c0;
  }
`;

const Button = styled.button`
  background: #1860f0;
  width: 175px;
  height: 55px;
  border-radius: 15px;
  border: none;
  color: white;
  cursor: pointer;
`;

const PostContainer = styled.div`
  width: 1200px;
  height: 150px;
  margin: 0 auto;
`;

const PostLeft = styled.div`
  float: left;
`;

const PostName = styled.p`
  color: #1860f0;
  font-size: 18px;
  margin: 20px 0;
`;

const PostIntroduce = styled.p`
  color: black;
  font-size: 18px;
  margin: 10px 0;
`;

const TagConatainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 5px 10px;
  height: 25px;
  border-radius: 30px;
  border: 1px solid #eeeeee;
  background: #f6f6f6;
`;

const Tag = styled.p`
  color: #444444;
  font-size: 15px;
`;

const Line = styled.hr`
  width: 1200px;
`;

const PostRight = styled.div`
  padding-top: 50px;
  text-align: right;
  float: right;
`;

const SumText = styled.p`
  color: #666666;
  font-size: 15px;
`;

const SumMoney = styled.p`
  color: #1860f0;
  font-size: 24px;
  font-weight: bold;
`;
