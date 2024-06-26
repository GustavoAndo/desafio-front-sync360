import styled from "styled-components";

export const FormSld = styled.form`
    border: 1px solid #ccc;
    margin: 30px 0px;
    padding: 20px;
    border-radius: 5px;
`

export const TitleSld = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin: 10px 10px 30px 10px;
`

export const CenterSld = styled.div`
    display: flex;
    justify-content: center;
`

export const HalfInputSld = styled.div`
    display: inline-block;
    width: 48.5%;
    margin-right: 10px;

    @media (max-width: 765px) {
        display: block;
        width: 98%;
        margin-right: 0px;
    }
`

export const FullInputSld = styled.div`
    width: 98%;
`

export const SuccessMessageSld = styled.p`
    margin: 10px;
    margin-bottom: 30px;
    color: #0a5c0a;
    text-align: center
`

export const ValidateMessageSld = styled.p`
    margin: 10px;
    margin-bottom: 30px;
    color: #b81414;
    text-align: center;
`