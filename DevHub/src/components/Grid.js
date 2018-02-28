import styled from 'styled-components'

const Container = styled.div`
	margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

const Row = styled.div`
    font-size: 14px;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
`;

const Column = styled.div`
	width: ${props => (props.w / 12 * 100)}%;
    padding: 0 15px;
`;

export {Container, Row, Column}