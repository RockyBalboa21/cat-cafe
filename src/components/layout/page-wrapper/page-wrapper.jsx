import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { PageWrapperContainer, Main } from "./styles";
import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function PageWrapper() {
  return (
      <PageWrapperContainer>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </PageWrapperContainer>
  );
}

export default PageWrapper;
