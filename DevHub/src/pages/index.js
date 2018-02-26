import React from 'react'
import Link from 'gatsby-link'
import {Container, Row, Column} from '../utils/grid'
import {color, grayscale} from '../utils/colors'
import Card from '../components/card'

const IndexPage = () => (
	<Container style={{backgroundColor: grayscale('light')}}>
		<Row>
			<Column w="1"></Column>
			<Column w="10">
			</Column>
			<Column w="1"></Column>
		</Row>
		<Row>
			<Column w="1"></Column>
			<Column w="5">
				<Card color={color('orange')} title="API Documentation">
					Comprehensive documentation of our API endpoints &amp; parameters
				</Card>
			</Column>
			<Column w="5">
				<Card color={color('blue')} title="Support Articles">
					Articles to give you support where you need it
				</Card>
			</Column>
			<Column w="1"></Column>
		</Row>
		<Row>
			<Column w="1"></Column>
			<Column w="5">
				<Card color={color('green')} title="Libraries and Integrations">
					Comprehensive documentation of our API endpoints &amp; parameters
				</Card>
			</Column>
			<Column w="5">
				<Card color={color('mustard')} title="Community">
					Articles to give you support where you need it
				</Card>
			</Column>
			<Column w="1"></Column>
		</Row>
	</Container>
)

export default IndexPage
