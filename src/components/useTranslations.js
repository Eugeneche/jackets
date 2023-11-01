import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "./layout"

const useTranslations = () => {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext)

  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData?.nodes?.map(item => {
    return {
      name: item?.name,
      translations: item?.childTranslationsJson,
    }
  })

  // Only return translations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0]
  //console.log(translations)
  return translations
}

export default useTranslations

const query = graphql`
query useTranslations {
  rawData: allFile(filter: {sourceInstanceName: {eq: "translations"}}) {
    nodes {
      childTranslationsJson {
        about_product
        contacts
        email
        four_o_four_text
        four_o_four_title
        headerHero
        home
        id
        message
        name
        phone
        prod_description
        send
        seo_description
        seo_title
        write_to_email
        your_email
        your_message
        your_name
        your_phone
      }
      name
    }
  }
}
`
