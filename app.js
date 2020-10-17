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

  changeEditJobTitle = (event) => {
    this.setState({
      editJobTitle:event.target.value
    })
  }
  changeEditJobCompany = (event) => {
    this.setState({
      editJobCompany:event.target.value
    })
  }
  changeEditJobDescription = (event) => {
    this.setState({
      editJobDescription:event.target.value
    })
  }
  changeEditJobLocation = (event) => {
    this.setState({
      editJobLocation:event.target.value
    })
  }
  changeEditJobQualification = (event) => {
    this.setState({
      editJobQualification:event.target.value
    })
  }
  changeEditJobSalary = (event) => {
    this.setState({
      editJobSalary:event.target.value
    })
  }
  changeEditJobLink = (event) => {
    this.setState({
      editJobLink:event.target.value
    })
  }

  deleteJob = (event) => {
      axios.delete('/jobs/' + event.target.value).then(
          (response) => {
              this.setState(
                    {
                        jobs: response.data
                    }
                )
            }
        )
    }

  editJobs = (event) => {
      event.preventDefault();
      const id = event.target.getAttribute('id');
      axios.put(
        '/jobs/' + id,
        {
          job_title:this.state.editJobTitle,
          company:this.state.editJobCompany,
          description:this.state.editJobDescription,
          location:this.state.editJobLocation,
          qualification:this.state.editJobQualification,
          salary:this.state.editJobSalary,
          link:this.state.editJobLink
        }
      ).then((response)=>{
        this.setState({
          jobs: response.data
        })
      })
  }


  updateJob = () => {
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
   <Create createCallback={this.updateJob}></Create>

  <span className="search-jobs"><h2> Job Listings.</h2></span>
  <h2>Listings</h2>
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

        {/* DELETE */}

        <button value={jobs.id} onClick={this.deleteJob}>
          DELETE
        </button>

        {/* UPDATE */}

        <details>
        <summary>Edit</summary>
        <form id={jobs.id} onSubmit={this.editJobs}>
          <input onKeyUp={this.changeEditJobTitle} type="text" placeholder="Job Title"/><br/>
          <input onKeyUp={this.changeEditJobCompany} type="text" placeholder="Company"/><br/>
          <input onKeyUp={this.changeEditJobDescription} type="text" placeholder="Job Description"/><br/>
          <input onKeyUp={this.changeEditJobLocation} type="text" placeholder="Company"/><br/>
          <input onKeyUp={this.changeEditJobQualification} type="text" placeholder="Qualifications"/><br/>
          <input onKeyUp={this.changeEditJobSalary} type="text" placeholder="$ Salary"/><br/>
          <input onKeyUp={this.changeEditJobLink} type="text" placeholder="Link to Application"/><br/>
          <input type="submit" value="Update Listing"/>
        </form>
        </details>

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
