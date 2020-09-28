import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { device } from '../../styles/BreakPoint';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 50px 0;
  height: 100vh;
  overflow-y: auto;

  &::before,
  &::after {
    position: relative;
  }
  &::before {
    content: '<html>';
    top: 30px;
  }
  &::after {
    content: '</html>';
  }

  .particle_bg {
    position: absolute;
    width: 100%;
    height: 100%;

    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0.1;
    #tsparticles {
      height: 100%;
    }
  }

  @media ${device.laptop} {
    height: 90vh;
    padding: 0 0 0 10%;
    &.tag::before,
    &.tag::after {
      font-size: 16px;
    }
  }
`;

const Main: React.FC = ({ children }) => {
  return (
    <MainContainer className="tag">
      <>
        {children}
        <div className="particle_bg">
          <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 1000,
                  },
                },
              },
            }}
          />
        </div>
      </>
    </MainContainer>
  );
};

export default Main;
