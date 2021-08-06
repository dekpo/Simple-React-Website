import logo from '../../logo.svg'

const Home = () => (
    <section>
        <div className="container-fluid">
          <div className="row">
            <h3>Home</h3>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <a href="https://fr.reactjs.org/" rel="noreferrer" target="_blank"><img src={logo} className="img-fluid" alt="Montagne" /></a>
            </div>
            <div className="col">
              <h4>Welcome to my React App</h4>
              <p><a href="https://fr.reactjs.org/" rel="noreferrer" target="_blank">React.js</a> or ReactJS or simply React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
            </div>
          </div>
        </div>
      </section>
)
export default Home