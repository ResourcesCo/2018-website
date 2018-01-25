import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

export default () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to resources.co!</h1>
      <p className="description">Coming soon</p>

      <div className="row">
        <Link href="https://github.com/resources/console">
          <a className="card">
            <h3>Console &rarr;</h3>
            <p>Quickly deploy a collaborative API console using only now, GitHub OAuth, and S3</p>
          </a>
        </Link>
        <Link href="https://github.com/resources/console/tree/master/components">
          <a className="card">
            <h3>Components &rarr;</h3>
            <p>
              Use react and styled-jsx components to build your own interfaces to APIs
            </p>
          </a>
        </Link>
        <Link href="https://github.com/resources/snippets">
          <a className="card">
            <h3>Playground &rarr;</h3>
            <p>Learn to build forms, dashboards, chatbots, and more with a library of interactive examples</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)
