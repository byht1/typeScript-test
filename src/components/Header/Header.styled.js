import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: relative;
  padding: 20px 15px;
  border-bottom: 1px solid var(--border-dark);
  background-color: var(--topic-dark);
  box-shadow: 0px 5px 12px -4px rgba(255, 255, 255, 0.92);
  -webkit-box-shadow: 0px 5px 12px -4px rgba(255, 255, 255, 0.92);
  -moz-box-shadow: 0px 5px 12px -4px rgba(255, 255, 255, 0.92);
`;

export const Logo = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 26px;
  text-align: center;
  color: var(--text-dark);
`;

export const BoxButton = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  position: relative;
  margin-left: auto;
  width: 50px;
  height: 25px;

  border: 2px solid var(--text-dark);
  border-radius: 15px;

  background-color: transparent;
`;

export const Colo = styled.div`
  position: absolute;
  top: 50%;
  left: 1px;
  width: 50%;
  height: 90%;

  transform: ${prop =>
    prop.cheked ? 'translate(90%, -50%)' : 'translate(0, -50%)'};
  border-radius: 50%;
  background-color: var(--text-dark);

  transition: transform 250ms linear;
`;
