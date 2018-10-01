import React, { Component, Fragment } from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import tableOfContents from "../../content/docs/table-of-contents.yml";
import Layout from "components/Layout";
import { Search, Sidebar, Content } from "components/docs";
import Button from "components/Button";
import { default as Base } from "components/Link";
import { color, grayscale, shadow } from "utils/colors";
import { uppercase, weight } from "utils/fonts";

const MaxWidth = styled.div`
  max-width: 45rem;
  padding: 0 2rem;
  margin: auto;
`;

const Cheveron = styled(({ isOpen, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
))`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) ${props => props.isOpen && `rotate(90deg)`};
  transition: transform 0.1s ease;
  right: 0;
  fill: ${grayscale(5)};
`;

// prettier-ignore
const link = css`
  display: block;
  margin: 0.35rem 0;
  font-size: 0.833333333rem;
  font-weight: ${weight("normal")};
  color: ${grayscale(3)};
  line-height: 1.65;
  ${props => props.isActive ? `
    color: ${color('orange')};
    font-weight: ${weight('medium')};
  ` : `
    &:hover {
      color: ${grayscale(1)};
    }
  `}
`

const PlainLink = styled(({ isActive, ...props }) => (
  <Base.Unstyled {...props} aria-current={isActive ? "page" : null} />
))`
  ${link};
`;

// prettier-ignore
const Link = styled(({ className, isActive, ...props }) => (
  <li className={className}><Base.Unstyled {...props} aria-current={isActive ? "page" : null} /></li>
))`
  ${link}

  a {
    display: block;
    font: inherit;
    color: inherit;
  }
`;

const topLevelLink = `
font-size: 0.888888889rem;
font-weight: ${weight("medium")};
margin: 0.35rem 0 0;
line-height: 1.65;
cursor: pointer;
color: inherit;
`;

const Topic = styled.li``;

// prettier-ignore
const TopicItems = styled(({ isOpen, ...props }) => <ul {...props} />)`
  list-style: none;
  margin: 0;
  padding: 0 0 0 0.5rem;

  transition: opacity 0.15s;
  ${props => props.isOpen === false && `
    position: absolute; 
    overflow: hidden; 
    clip: rect(0 0 0 0); 
    height: 1px; width: 1px; 
    margin: -1px; padding: 0; border: 0; 
    opacity: 0;
  `};
`;

const TopicTitle = styled(({ isOpen, ...props }) => (
  <button {...props} aria-haspopup="true" aria-expanded={isOpen === true} />
))`
  background: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  display: block;
  width: 100%;
  text-align: left;
  outline: 0;

  ${topLevelLink};
`;

const CategoryTitle = styled.span`
  display: block;
  ${uppercase} font-size: .72rem;
  margin: 0.75rem 0 0.666666667rem 0;
  color: ${grayscale(4)};
  font-weight: ${weight("medium")};
`;

const Category = styled.li`
  margin: 0.5rem 0;
  display: block;
`;

const CategoryItems = styled.ul`
  list-style: none;
  border-left: 1px solid ${grayscale(7)};
  margin: 0.35rem 0;
  padding: 0 0 0 0.666666667rem;
`;

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  hr {
    margin: 0.75rem 0;
    border-bottom: 1px solid ${grayscale(8)};
  }
`;

const Nav = styled(({ children, ...props }) => (
  <nav aria-label="Documentation Navigation" {...props}>
    <ul>{children}</ul>
  </nav>
))`
  > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  > ul > ${Link} {
    ${topLevelLink};
  }
`;

const renderItem = item => {
  const type = item.hasOwnProperty("link")
    ? item.hasOwnProperty("items")
      ? "link-category"
      : "link"
    : item === "divider"
      ? "divider"
      : "category";

  if (type === "link") {
    return <Link to={item.link}>{item.title}</Link>;
  } else if (type === "category") {
    return (
      <Category>
        <CategoryTitle>{item.title}</CategoryTitle>
        <CategoryItems>
          {item.items.map((item, i) => {
            return <Fragment key={i}>{renderItem(item)}</Fragment>;
          })}
        </CategoryItems>
      </Category>
    );
  } else if (type === "link-category") {
    return (
      <Category>
        <PlainLink to={item.link}>{item.title}</PlainLink>
        <CategoryItems>
          {item.items.map((item, i) => {
            return <Fragment key={i}>{renderItem(item)}</Fragment>;
          })}
        </CategoryItems>
      </Category>
    );
  } else {
    return <Divider />;
  }
};

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openIndex: null
    };
  }

  render() {
    const { openIndex } = this.state;

    return (
      <Nav>
        {tableOfContents.map((item, i) => {
          const type = item.hasOwnProperty("link")
            ? "link"
            : item === "divider"
              ? "divider"
              : "topic";

          if (type === "link") {
            return (
              <Link to={item.link} key={i}>
                {item.title}
              </Link>
            );
          } else if (type === "topic") {
            const isOpen = openIndex === i;

            return (
              <Topic key={i}>
                <TopicTitle
                  isOpen={isOpen}
                  onClick={() => {
                    this.setState(({ openIndex }) => ({
                      openIndex: openIndex !== i ? i : null
                    }));
                  }}
                >
                  {item.title}
                  <Cheveron isOpen={isOpen} />
                </TopicTitle>
                <TopicItems isOpen={isOpen}>
                  {item.items.map((item, i) => {
                    return <Fragment key={i}>{renderItem(item)}</Fragment>;
                  })}
                </TopicItems>
              </Topic>
            );
          } else if (type === "divider") {
            return <Divider key={i} />;
          }

          return null;
        })}
      </Nav>
    );
  }
}

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 2.5rem 0 1.5rem 0;
  margin: 0 0 1.5rem 0;
  border-bottom: 1px solid ${grayscale(8)};
`;

const Title = styled.h1`
  margin: 0;
`;

const RelatedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 2rem;
`;

const Related = styled(Base.Unstyled)`
  display: flex;
  align-items: center;
  background: ${grayscale("white")};
  height: 100%;
  box-shadow: ${shadow("base")};
  border: 1px solid ${grayscale(8)};
  border-radius: 2px;
  transition: 0.15s;
  width: 49%;
  padding: 0.888888889rem 0.333333333rem 0.888888889rem 0.888888889rem;

  div {
    flex-grow: 1;
  }

  &:hover {
    ${"" /* transform: translateY(-1px); */}
    box-shadow: ${shadow("shallow")};
    border-color: ${color("blue")};
    color: ${color("blue")};

    svg {
      fill: ${color("blue")};
    }
  }
`;

const RelatedDirection = styled.span`
  font-size: 0.777777778rem;
  color: ${grayscale(5)};
  font-weight: ${weight("medium")};
`;
const RelatedTitle = styled.h5`
  margin: 0.2rem 0 0 0;
  font-weight: ${weight("medium")};
  font-size: 0.944444444rem;
`;

const RelatedCheveron = styled(props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
))`
  fill: ${grayscale(5)};
`;

export default class extends Component {
  render() {
    const { props } = this;
    return (
      <div>
        <Layout {...props}>
          <Sidebar>
            <Search />
            <br />
            <Navigation />
          </Sidebar>
          <Content>
            <MaxWidth>
              <TitleWrapper>
                <Title>{props.data.mdx.frontmatter.title}</Title>
                <Button outline size="small">
                  <i className="fa fa-github" /> Edit on GitHub
                </Button>
              </TitleWrapper>
              <MDXRenderer>{props.data.mdx.code.body}</MDXRenderer>
              <RelatedContainer>
                <Related>
                  <div>
                    <RelatedDirection>Next</RelatedDirection>
                    <RelatedTitle>Create your Sending Domain</RelatedTitle>
                  </div>
                  <RelatedCheveron />
                </Related>
                <Related>
                  <div>
                    <RelatedDirection>Next</RelatedDirection>
                    <RelatedTitle>Create your Sending Domain</RelatedTitle>
                  </div>
                  <RelatedCheveron />
                </Related>
              </RelatedContainer>
              <h3 className="textCenter">Was this page helpful?</h3>
            </MaxWidth>
          </Content>
        </Layout>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
