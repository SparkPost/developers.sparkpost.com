import React from 'React'
import styled from 'styled-components'
import {Container, Row, Column} from '../components/Grid'
import Card from '../components/Card'
import {grayscale, color} from '../utils/colors'

const Title = styled.h2`
	text-align: center;
`;

const Subtitle = styled.p`
	text-align: center;
`;

export default () => (
	<div>
		<Container background={grayscale('light')}>
			<Title>Open Source Software</Title>
			<Subtitle>At SparkPost we rely on Open Source and Standards from hundreds of NPM modules to the SMTP spec. We believe that it is important to give back to the community where we can.</Subtitle>
			<Row>
				<Column w="1"></Column>
				<Column w="5">
					<Card color="blue" title="&lt;heml /&gt;">
						Comprehensive documentation of our API endpoints &amp; parameters.
					</Card>
				</Column>
				<Column w="5">
					<Card color="mustard" title="passwordless.academy">
						Comprehensive documentation of our API endpoints &amp; parameters.
					</Card>
				</Column>
				<Column w="1"></Column>
			</Row>
		</Container>
	</div>
)