import styled from 'styled-components';

export const InputSld = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 10px 20px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 15px;

    &:hover {
        background-color: #ddd;
    }
    &:focus {
        border: 2px solid #000;
        background-color: #ddd;
    } 
`

export const LabelSld = styled.label`
    margin: 10px;
`