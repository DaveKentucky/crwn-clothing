import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
   
    @media screen and (max-width: 800px) {
        width: 100%;
        text-align: center;

        &:first-child {
            margin-bottom: 80px;
        }

        &>h2 {
            font-size: 30px;
        }

        &>span {
            font-size: 18px;
        }

        button {
            margin: auto;
        }
    }
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;