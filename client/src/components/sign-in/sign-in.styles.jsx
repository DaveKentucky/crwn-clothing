import styled from 'styled-components';


export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

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
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width: 800px) {
        button {
            min-width: unset;
            width: 150px;
            max-width: 48%;
            padding: 0 5px;
        }
    }
`;