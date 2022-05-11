import styled from "styled-components/native";


export const ProductContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export const PrimaryButton = styled.Text`
  padding: 5px;
  width: 80%;
  text-align: center;
  font-size: 14px;
  background-color: green;
  border-radius: 5;
  color: white;
  margin: 5px;
`;

export const SecondaryButton = styled.Text`
  padding: 5px;
  width: 80%;
  text-align: center;
  font-size: 14px;
  background-color: red;
  border-radius: 5;
  color: white;
  margin: 5px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  height: 40px;
  background-color: white;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

export const HeaderCart = styled.View`
  position: relative;
`;

export const CartNotification = styled.Text`
  position: absolute;
  color: white;
  height: 15px;
  width: 15px;
  z-index: 2;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 100;
  top: -5;
  right: -5;
  background-color: red;
  font-weight: bold;
`;
