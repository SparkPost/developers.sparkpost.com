import React from 'React'
import styled from 'styled-components'
import {Container, Row, Column} from '../components/Grid'
import Card from '../components/Card'
import {grayscale, color} from '../utils/colors'

const Title = styled.h1`
	text-align: center;
	color: ${color('gray')};
`;

const Subtitle = styled.p`
	text-align: center;
	margin-bottom: 64px;
	color: ${color('gray')};
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
`;

const Table = styled.table`
	width: 100%;
`;

const TitleCell = styled.td`
	font-weight: bold;
	padding: 8px 0;
`;

const DescriptionCell = styled.td`
	padding: 8px 0;
`;

const StarsCell = styled.td`
	text-align: right;
	padding: 8px 0;
`;

export default () => (
	<div>
		<Container background={grayscale('light')}>
			<Title>Open Source Software</Title>
			<Row>
				<Column md="8" mdOffset="2">
					<Subtitle>At SparkPost we rely on Open Source and Standards from hundreds of NPM modules to the SMTP spec. We believe that it is important to give back to the community where we can.</Subtitle>
				</Column>
			</Row>
			<Row>
				<Column md="4" mdOffset="2">
					<Card color="blue" title="&lt;heml /&gt;">
						Comprehensive documentation of our API endpoints &amp; parameters.
					</Card>
				</Column>
				<Column md="4">
					<Card color="mustard" title="passwordless.academy">
						Comprehensive documentation of our API endpoints &amp; parameters.
					</Card>
				</Column>
			</Row>
		</Container>
		<Container background={grayscale('white')}>
			<Row>
				<Column md="8" mdOffset="2">
					<h2>Our Projects</h2>
					<Table>
						<tbody>
							<tr>
								<TitleCell>Eriksen</TitleCell>
								<DescriptionCell>Lorem ipsem dolor sit amet, consectetur adipiscing elit.</DescriptionCell>
								<StarsCell>162 ★</StarsCell>
							</tr>
							<tr>
								<TitleCell>email templates</TitleCell>
								<DescriptionCell>Lorem ipsem dolor sit amet, consectetur adipiscing elit.</DescriptionCell>
								<StarsCell>162 ★</StarsCell>
							</tr>
							<tr>
								<TitleCell>postbin</TitleCell>
								<DescriptionCell>Lorem ipsem dolor sit amet, consectetur adipiscing elit.</DescriptionCell>
								<StarsCell>162 ★</StarsCell>
							</tr>
							<tr>
								<TitleCell>php-sparkpost</TitleCell>
								<DescriptionCell>Lorem ipsem dolor sit amet, consectetur adipiscing elit.</DescriptionCell>
								<StarsCell>162 ★</StarsCell>
							</tr>
							<tr>
								<TitleCell>node-sparkpost</TitleCell>
								<DescriptionCell>Lorem ipsem dolor sit amet, consectetur adipiscing elit.</DescriptionCell>
								<StarsCell>162 ★</StarsCell>
							</tr>
						</tbody>
					</Table>
				</Column>
			</Row>
		</Container>
	</div>
)