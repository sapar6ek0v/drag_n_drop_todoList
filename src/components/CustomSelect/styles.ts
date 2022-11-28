import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 0 2px rgb(204, 204, 204);
  border: 1px solid #474747;
  border-radius: 2px;
  color: rgb(0, 0, 0);
  transition: all 0.5s ease;
  position: relative;
  font-size: 14px;
  text-align: left;

  &:hover {
    box-shadow: 0 0 4px rgb(204, 204, 204);
    border-color: rgba(249, 131, 255, 1);
  }

  &:active {
    background-color: rgb(245 82 254);
  }

  &:focus {
    border-color: rgba(249, 131, 255, 1);
  }
`;

export const Select = styled.div`
  cursor: pointer;
  display: block;
  padding: 8px 10px;
`;

type MenuProps = {
  visibility: string;
};

export const Menu = styled.ul`
  position: absolute;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  margin-top: 1px;
  box-shadow: 0 1px 2px rgb(204, 204, 204);
  border-radius: 0 1px 2px 2px;
  overflow: hidden;
  display: ${(props: MenuProps) => props.visibility};
  max-height: 144px;
  overflow-y: auto;
  z-index: 10;

  li {
    padding: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: rgba(249, 131, 255, 1);
      color: #fff;
    }

    &:active {
      background-color: rgb(245 82 254);
      color: #fff;
    }
  }
`;
