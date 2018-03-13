import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {Container, Row, Column} from '../components/Grid'
import {color, grayscale} from '../utils/colors'
import Card from '../components/Card'
import ClientLibrary from '../components/ClientLibrary'
import Event from '../components/Event'
import BlogPost from '../components/BlogPost'

const Title = styled.h1`
	text-align: center;
`;

const Subtitle = styled.p`
	text-align: center;
	${props => props.dark && 'color: white;'}
	margin-bottom: 36px;
`;

const SectionTitle = styled.h2`
	text-align: center;
	${props => props.dark && 'color: white;'}
`;

const IndexPage = () => (
	<div>
		<Container background={grayscale('light')}>
			<Title>SparkPost Developers</Title>
			<Subtitle>Fast, flexible email integration for websites or applications big and small</Subtitle>
			<Row>
				<Column w="1"></Column>
				<Column w="10">
				</Column>
				<Column w="1"></Column>
			</Row>
			<Row>
				<Column w="1"></Column>
				<Column w="5">
					<Card color="orange" title="API Documentation">
						Comprehensive documentation of our API endpoints &amp; parameters
					</Card>
				</Column>
				<Column w="5">
					<Card color="blue" title="Support Articles">
						Articles to give you support where you need it
					</Card>
				</Column>
				<Column w="1"></Column>
			</Row>
			<Row>
				<Column w="1"></Column>
				<Column w="5">
					<Card color="green" title="Libraries and Integrations">
						Comprehensive documentation of our API endpoints &amp; parameters
					</Card>
				</Column>
				<Column w="5">
					<Card color="mustard" title="Community">
						Articles to give you support where you need it
					</Card>
				</Column>
				<Column w="1"></Column>
			</Row>
		</Container>
		<Container>
			<Row>
				<Column w="1"></Column>
				<Column w="10">
					<Row>
						<Column w="4">
							<ClientLibrary img="" title="Node.js" />
						</Column>
						<Column w="4">
							<ClientLibrary img="" title="PHP" />
						</Column>
						<Column w="4">
							<ClientLibrary img="" title="Python" />
						</Column>
					</Row>
					<Row>
						<Column w="4">
							<ClientLibrary img="" title="Java" />
						</Column>
						<Column w="4">
							<ClientLibrary img="" title="Elixir" />
						</Column>
						<Column w="4">
							<ClientLibrary img="" title="NodeMailer" />
						</Column>
					</Row>
					<Row>
						<Column w="4">
							<ClientLibrary img="" title="Go" />
						</Column>
					</Row>
				</Column>
				<Column w="1"></Column>
			</Row>
		</Container>
		<Container background={grayscale('dark')}>
			<SectionTitle dark>Dev Events</SectionTitle>
			<Subtitle dark>Whether you're using SparkPost or want to know more about us, we would love to meet you in person! Come say hi to the SparkPost team at one of these events.</Subtitle>
			<Row>
				<Column w="2"></Column>
				<Column w="2">
					<Event />
				</Column>
				<Column w="1"></Column>
				<Column w="2">
					<Event />
				</Column>
				<Column w="1"></Column>
				<Column w="2">
					<Event />
				</Column>
				<Column w="2"></Column>
			</Row>
		</Container>
		<Container background={grayscale('light')}>
			<SectionTitle>Engineering Blog</SectionTitle>
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

export default IndexPage
