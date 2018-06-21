import React, { Fragment } from 'react'
import styled from 'styled-components'
import { color, grayscale } from 'utils/colors'
import { uppercase, weight } from 'utils/fonts'
import Link from 'components/Link'

const Category = styled.div`
  margin: 1.5rem 0.5rem;

  &:not(:last-child) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${grayscale(8)};
  }

  li {
    list-style: none;
  }
`

const CategoryTitle = styled.div`
  ${uppercase} font-size: .75rem;
  margin: 0.888888889rem 0;
  color: ${grayscale(4)};
  font-weight: ${weight('medium')};
`

const List = styled.ul`
  padding: 0;
`

const Children = styled.ul`
  border-left: 2px solid ${grayscale(8)};
  margin-left: 0.1rem;
  padding-left: 0.75rem;

  a {
    font-size: 0.833333333rem;
    color: ${grayscale(4)};
  }
`

const ApiLink = styled(Link.Unstyled)`
  display: inline-block;
  font-size: 0.888888889rem;
  font-weight: ${weight('medium')};
  margin: 0.35rem 0;
  line-height: 1.65;

  ${props =>
    props.active &&
    `
    color: ${color('orange')};
  `} &:last-child {
    margin-bottom: 0;
  }
`

const Labs = styled(props => <span {...props}>Labs</span>)`
  border: 1px solid;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 0.666666667rem;
  line-height: 1rem;
  vertical-align: text-top;
  padding: 0rem 0.25rem;
  color: ${color('blue')};
  margin-left: 0.25rem;
  display: inline-block;
`

const Navigation = ({ navigation, location = { pathname: null } }) => {
  const currentPath = location.pathname.replace(/\/$/, '')

  return (
    <Fragment>
      {navigation.map(({ category, pages }) => (
        <Category key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <List>
            {pages.map(({ title, path, labs, children }) => (
              <li key={title}>
                <ApiLink
                  to={path}
                  active={path.replace(/\/$/, '') === currentPath}
                >
                  {title} {labs && <Labs />}
                </ApiLink>
                {renderChildren(children)}
              </li>
            ))}
          </List>
        </Category>
      ))}
    </Fragment>
  )
}

function renderChildren(children) {
  if (!children) return null

  return (
    <Children>
      {children.map(({ title, anchor, children }) => {
        // just render the child link if there is only one
        if (children && children.length === 1) {
          return (
            <li key={children[0].title}>
              <ApiLink to={children[0].anchor}>{children[0].title}</ApiLink>
            </li>
          )
        } else {
          return (
            <li key={title}>
              <ApiLink to={anchor}>{title}</ApiLink>
              {renderChildren(children)}
            </li>
          )
        }
      })}
    </Children>
  )
}

export default Navigation
