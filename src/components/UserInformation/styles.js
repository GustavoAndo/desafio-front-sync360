import styled from 'styled-components'

export const SectionSld = styled.section`
    text-align: center;
`

export const TitleSld = styled.h2`
    font-size: 25px;
    padding: 10px;
    font-weight: bold;
    margin-top: 12px;
    word-break: break-word;
`

export const TextSld = styled.p`
    padding: 7px;
    line-height: 25px;
    word-break: break-word;
`

export const ImgSld = styled.img`
    width: 150px;
    object-fit: cover;
    margin-bottom: 10px;
`

export const RightSideSld = styled.div`
    max-width: 500px;
    display: inline-block;
    @media (min-width: 425px) {
        margin-left: 10px;
    }
`

export const LeftSideSld = styled.div`
    display: inline-block;
    @media (min-width: 425px) {
        margin-right: 10px;
    }
`