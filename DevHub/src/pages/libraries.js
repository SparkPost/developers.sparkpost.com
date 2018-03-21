import React from 'React'
import {Container, Row, Column} from '../components/Grid'
import {grayscale, color} from '../utils/colors'
import styled from 'styled-components'
import BlogPost from '../components/BlogPost'

const Title = styled.h2`
	text-align: center;
`;

const CodeBlock = styled.code`
	border-top: 4px solid ${color('orange')};
	display: block;
	background-color: white;
	padding: 8px;
	font-family: 'Monaco';
`;

const SectionTitle = styled.h3`
	text-align: center;
	${props => props.dark && 'color: white;'}
`;

export default () => (
	<div>
		<Container background={grayscale('light')}>
			<Title>SparkPost and Node.js</Title>
			<Row>
				<Column w="2"></Column>
				<Column w="8">
					<CodeBlock>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CodeBlock>
				</Column>
				<Column w="2"></Column>
			</Row>
		</Container>
		<Container background={grayscale('white')}>
		</Container>
		<Container background={grayscale('light')}>
			<SectionTitle>Post About Node</SectionTitle>
			<Row>
				<Column w="1"></Column>
				<Column w="10">
					<Row>
						<Column w="4">
							<BlogPost />
						</Column>
						<Column w="4">
							<BlogPost />
						</Column>
						<Column w="4">
							<BlogPost />
						</Column>
					</Row>
				</Column>
				<Column w="1"></Column>
			</Row>
		</Container>
	</div>
)