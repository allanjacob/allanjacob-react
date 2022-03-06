import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-decoration: underline blue;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 1vw;
  font-size: calc(3px + 1vw);
  font-weight: bold;
  color: grey;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 10px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>allanjacob</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Work Experience</MenuItem>
            <MenuItem>About Me</MenuItem>
            <MenuItem>Contact Me</MenuItem>
          </Menu>
        </Left>
        <Button>Resume</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
