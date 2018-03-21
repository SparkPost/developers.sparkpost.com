import React from 'react'
import styled from 'styled-components'
import {color, grayscale} from '../utils/colors'
import {Container, Row, Column} from '../components/Grid'

const Footer = styled.footer`
  background-color: ${grayscale('dark')};
  color: ${grayscale('white')};
  padding: 38px 0 62px;
`;

const ColumnHeader = styled.p`
  font-weight: 600;
  margin-top: 24px;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'initial'};
  font-family: 'Gotham SSm A', 'Gotham SSm B', 'Helvetica', sans-serif;
  font-size: 14px;
`;

const ColumnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  line-height: 1.5;
  font-size: 14px;
`;

const SubscribeForm = styled.form`
  display: table;
  width: 100%;
`;

const EmailInput = styled.input`
  display: table-cell;
  width: 100%;
  padding: 6px;
`;

const SubmitButton = styled.div`
  display: table-cell;
  background-color: ${color('orange')};
  vertical-align: middle;
  text-transform: uppercase;
  text-align: center;
`;

export default () => (
  <Footer>
    <Container>
      <Row>
        <Column w="2">
          <ColumnHeader uppercase>About</ColumnHeader>
          <ColumnList>
            <MenuItem>About Us</MenuItem>
            <MenuItem>Careers</MenuItem>
            <MenuItem>Partners</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Policies</MenuItem>
            <MenuItem>Press</MenuItem>
          </ColumnList>
        </Column>
        <Column w="2">
          <ColumnHeader uppercase>Support</ColumnHeader>
          <ColumnList>
            <MenuItem>Help &amp; Docs</MenuItem>
            <MenuItem>Report Abuse</MenuItem>
          </ColumnList>
        </Column>
        <Column w="2">
          <ColumnHeader uppercase>Solutions</ColumnHeader>
          <ColumnList>
            <MenuItem>Enterprise</MenuItem>
            <MenuItem>E-Commerce</MenuItem>
            <MenuItem>Service Providers</MenuItem>
            <MenuItem>Digital Publishing</MenuItem>
          </ColumnList>
        </Column>
        <Column w="1"></Column>
        <Column w="5">
          <ColumnHeader>Subscribe to our newsletter</ColumnHeader>
          <div>
            <SubscribeForm>
              <EmailInput type="text" placeholder="Enter your email address" />
              <SubmitButton>Submit</SubmitButton>
            </SubscribeForm>
          </div>
        </Column>
      </Row>
    </Container>
  </Footer>
)