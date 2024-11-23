import styled from "styled-components";

export const PageWrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;
