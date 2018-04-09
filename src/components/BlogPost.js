import React from 'React'
import styled from 'styled-components'

const Wrapper = styled.div`
	background-color: white;
	text-align: center;
	height: 100%;
`;

const Image = styled.div`
	height: 0;
	padding-bottom: 76.1111111%;
	background-color: red;
`;

const Text = styled.div`
	padding: 0 24px;
`;

const ByLine = styled.p`
	text-transform: uppercase;
	margin-bottom: 24px;
`;

const Author = styled.span`
	font-weight: 800;
`;

export default () => (
	<Wrapper>
		<Image />
		<Text>
			<ByLine>Nov. 13, 2017 by <Author>E. Hamburger</Author></ByLine>
			<h3>Title of a Blog Post</h3>
			<p>Preview of a blog post goes here</p>
		</Text>
	</Wrapper>
)