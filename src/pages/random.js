import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Flex } from 'rebass'
import Layout from 'components/layout'
import Share from '../components/share'
import QuoteItem from 'components/quote/quoteItem'

export const query = graphql`
  query randomQuery {
    allContentfulQuote {
      totalCount
      edges {
        node {
          id
          author
          twitter_name
          title {
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const getRandomNumber = data => {
  const totalQuotes = data.allContentfulQuote.totalCount
  return 1 + Math.floor(Math.random() * totalQuotes)
}

const RandomPage = ({ data }) => {
  const randomItem = getRandomNumber(data)
  const title = data.allContentfulQuote.edges[randomItem].node.title.title
  const author = data.allContentfulQuote.edges[randomItem].node.author
  const twitterName =
    data.allContentfulQuote.edges[randomItem].node.twitter_name
  const pageUrl = `${data.site.siteMetadata.siteUrl}/${
    data.allContentfulQuote.edges[randomItem].node.id
  }`

  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center">
        <QuoteItem title={title} author={author} />
      </Flex>
      <Flex justifyContent="center">
        <Share title={title} twitterName={twitterName} pageUrl={pageUrl} />
      </Flex>
    </Layout>
  )
}

RandomPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RandomPage
