import styled from 'styled-components';
import { ReactComponent as IconMonoBanc } from '../../../icon/icon-mono.svg';

export const IconMono = styled(IconMonoBanc)`
  color: #fff;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border: 1px solid var(--text-dark);
  border-collapse: collapse;
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid var(--text-dark);
`;

export const Td = styled.td`
  padding: 20px;
  font-size: 18px;
  text-align: center;
  color: var(--text-dark);
  border: 1px solid var(--text-dark);
  padding: 5px;
`;
