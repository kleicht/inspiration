import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import QuoteItem from './quoteItem'
import { Flex } from 'rebass'
import { Link } from 'gatsby'

const QuoteList = ({ items }) => (
  <Flex flexDirection="column" alignItems="center">
    {items.map((item, index) => (
      <BlockquoteLink to={`/${item.node.id}`} key={index}>
        <QuoteItem title={item.node.title.title} author={item.node.author} />
      </BlockquoteLink>
    ))}
  </Flex>
)

QuoteList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const BlockquoteLink = styled(Link)`
  color: ${props => props.theme.colors.sectionText};
  text-decoration: none;
  margin-bottom: 256px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 1px hsla(255, 0%, 0%, 0.1);
  &:hover {
    box-shadow: 0 4px 6px hsla(255, 0%, 0%, 0.1);
  }
`

export default QuoteList
