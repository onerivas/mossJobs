class App extends React.Component{
  state = {
    jobs: []
  }

componentDidMount = () => {
    axios.get('/jobs').then(
      (response)=>{
        this.setState({
          jobs:response.data
        })
      }
    )
  }
 render = () => {
   return <div>
    <h2> List of Jobs </h2>
    <ul>
    {
      this.state.jobs.map(
        (jobs)=>{
          return <li>
        {jobs.job_title}<br/>
        {jobs.company}<br/>
        {jobs.description}<br/>
        {jobs.location}<br/>
        {jobs.qualification}<br/>
        {jobs.salary}<br/>
        <a href={jobs.link}>Click</a><br/>
        </li>
        }

      )
    }
    </ul>
    </div>
  }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
);
