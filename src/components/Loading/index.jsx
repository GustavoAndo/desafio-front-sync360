import React from 'react';
import loadingGif from '../../assets/loading.gif'
import { ContainerSld, ImageSld } from './styles';

const Loading = () => {
    return (
        <ContainerSld>
            <ImageSld src={loadingGif} alt="Carregando..." />
        </ContainerSld>
    )
}

export default Loading;