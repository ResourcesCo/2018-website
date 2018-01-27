import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <script>{`
      !function(){var e=window._ramen=window._ramen||[];if(!e.initialize){if(e.invoked)return void(window.console&&console.error&&console.error("Ramen snippet included twice."));e.invoked=!0,e.methods=["boot","ready","identify","group","track","page","reset","ask"],e.factory=function(r){return function(){var t=Array.prototype.slice.call(arguments);return t.unshift(r),e.push(t),e}};for(var r=0;r<e.methods.length;r++){var t=e.methods[r];e[t]=e.factory(t)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://cdn.ramen.is/assets/ramen.js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}();

      _ramen.boot('5a6c198364623704d1f4a60b');
      _ramen.identify();

      // 😻 If you want to identify logged in users, you'll need to have a
      // developer take a look at everything below this line
      //
      // _ramen.identify({
      //   id: "12345-replace", // Replace with a unique user ID. Could be their email
      //   email: "customer@example.com", // Replace with their email address
      //   name: "Bugs Bunny" // Replace with their name
      // });

      // Check out our options at http://docs.ramen.is/

    `}</script>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
