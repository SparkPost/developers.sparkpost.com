import React from 'react'
import styled from 'styled-components'
import {color, grayscale} from '../utils/colors'
import {Container, Row, Column} from '../utils/grid'

const ColumnHeader = styled.p`
  font-weight: 600;
  margin-top: 24px;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'initial'};
`;

const ColumnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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
  <footer style={{backgroundColor: grayscale('dark')}}>
    <Container>
      <Row>
        <Column w="2">
          <ColumnHeader uppercase>About</ColumnHeader>
          <ColumnList>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Blog</li>
            <li>Policies</li>
            <li>Press</li>
          </ColumnList>
        </Column>
        <Column w="2">
          <ColumnHeader uppercase>Support</ColumnHeader>
          <ColumnList>
            <li>Help &amp; Docs</li>
            <li>Report Abuse</li>
          </ColumnList>
        </Column>
        <Column w="2">
          <ColumnHeader uppercase>Solutions</ColumnHeader>
          <ColumnList>
            <li>Enterprise</li>
            <li>E-Commerce</li>
            <li>Service Providers</li>
            <li>Digital Publishing</li>
          </ColumnList>
        </Column>
        <Column w="1"></Column>
        <Column w="5">
          <ColumnHeader>Subscribe to our newsletter:</ColumnHeader>
          <div>
            <SubscribeForm>
              <EmailInput type="text" placeholder="Enter your email address" />
              <SubmitButton>Submit</SubmitButton>
            </SubscribeForm>
          </div>
        </Column>
      </Row>
    </Container>
  </footer>
)