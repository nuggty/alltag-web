import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import ImageProfile from './ImageProfile';

const Nick = styled.div`
    align-items: center;
  .nickname {
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;

      &:hover {
          text-decoration: underline;
      }
  }
  .username {
      font-size: 15px;
      color: #99a0a6;
  }

`;

const Row = styled.div.attrs((props) => ({
    margin: props.margin || "5px",
}))`
  display: flex;
  flex-wrap: wrap;
  margin: ${(props) => props.margin}

`;

const Column = styled.div`
  flex: 0 0 ${props => props.flex};
  max-width: ${props => props.maxWidth};

  .nick {
    align-items: center;
    display: flex;
}
`;

const ColumnNick = styled(Column)`
    align-items: center;
    display: flex;
    margin-top: -10px;
`;

const ColumnFeeling = styled(Column)`
    align-items: center;
    display: flex;
    margin-top: -25px;

    .feeling {
        font-size: 20px;
        font-weight: 700;
        color: #ffffff;
    }
`;

const Card = styled.div`
  width: 580px;
  background-color: #1D1D1D;
  border-radius: 16px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  @media(max-width: 900px) {
  max-width:100%;
  }
`;

const CardHead = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.bg};
  border-radius: 16px;
`;

const CardBody = styled.div`
  width: 100%;
  border: 1px solid ${props => props.bg};
  border-radius: 16px;
  height: 100%;
  padding-right: 15px;
  padding-left: 15px;
  font-size: 18px;
  background-color: #1D1D1D;
`;

const StyledDots = styled.div`
    margin-top: 10px;
    display: block;
    position: absolute;
    right: 5px;

    a {
        padding: 10px;
    }

`;

const CardUser = styled.div`
  padding: 5px 15px 0 15px;
  position: relative;
`;

const CardPost = (props) => {
    return (
        <Card>
            <CardHead bg={props.bg}>
                <CardUser>
                    <StyledDots>
                        <Link href="#"><a><i class="far fa-ellipsis-v"></i></a></Link>
                    </StyledDots>
                    <Row margin="0">
                        <Column maxWidth="70px" flex="15%">
                            <ImageProfile width="67px" height="67px" />
                        </Column>
                        <ColumnNick maxWidth="30%" flex="30%">
                            <Nick>
                                <a href="#" className="nickname">nuggty</a>
                                <br />
                                <span className="username">@nuggty • 1h</span>
                            </Nick>
                        </ColumnNick>
                        <ColumnFeeling maxWidth="30%" flex="30%">
                            <span className="feeling">🤔 Thinking</span>
                        </ColumnFeeling>

                    </Row>
                </CardUser>
                <CardBody bg={props.bg}>
                    <p>Mollit qui irure cupidatat eu sit id amet id do consequat dolor. Dolor aliqua deserunt Lorem reprehenderit aliqua cillum Lorem aliqua. Ipsum ea excepteur laboris pariatur ipsum reprehenderit exercitation est officia. Consequat aliqua exercitation aliquip amet fugiat ea dolor proident occaecat ea et ullamco.

Ad elit deserunt culpa sint veniam cupidatat aute. Non nisi enim ad ut. Aliqua amet excepteur sint ea duis in magna et et duis aute aliquip aliquip irure.</p>
                </CardBody>
            </CardHead>
        </Card>
    )
}

export default CardPost
