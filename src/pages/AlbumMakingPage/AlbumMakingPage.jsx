import React from 'react';
import Header from '../../components/AlbumMaking/MakingHeader';
import Side from '../../components/AlbumMaking/Side'; 
import MainArea from '../../components/AlbumMaking/MainArea'; 
import { PageContainer, Content } from './AlbumMakingPage.style';



export default function AlbumMakingPage() {
  return (
    <PageContainer>
      <Header />
      <Content>
        <Side />
        <MainArea />
      </Content>
    </PageContainer>
  );
}
