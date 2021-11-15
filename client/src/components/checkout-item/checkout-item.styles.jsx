import styled from 'styled-components';


export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
        justify-content: space-between;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const TextContainer = styled.span`
    width: 23%;
    font-size: 24px;

    @media screen and (max-width: 800px) {
        width: auto;
    }
`;

export const NameContainer = styled(TextContainer)`
    @media screen and (max-width: 800px) {
        width: 23%;
        font-size: 18px;
    }
`

export const QuantityContainer = styled(TextContainer)`
    display: flex;
    flex-direction: row;

    .arrow {
        cursor: pointer;
    }

    .value {
        margin: 0 10px;
    }

    @media screen and (max-width: 800px) {
        .value {
            margin: 0 5px;
        }
    }
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
    
    @media screen and (max-width: 800px) {
        padding-left: 20px;
    }
`;