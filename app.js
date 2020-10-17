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

  <span className="search-jobs"><h2> Job Search.</h2></span>
  <h2>Listings</h2>

    <ul>

    {
      this.state.jobs.map(
        (jobs)=>{
          return <div className="row">
          <div className="card #fbe9e7 deep-orange lighten-5">
          <div className="card-content">
        <h4>{jobs.job_title}</h4>
        <h5>{jobs.company}</h5><br/>
        Job Description: {jobs.description}<br/>
        Location: {jobs.location}<br/>
        Qualifications: {jobs.qualification}<br/>
        Salary: {jobs.salary}<br/>
      <div className="card-action">  <a href={jobs.link}>Click</a><br/> </div>

        {/* DELETE */}

      <div className="card-action">  <button value={jobs.id} onClick={this.deleteJob}>
          DELETE
        </button>
      </div>

        {/* UPDATE */}
      <div className="card-action">
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
        </div>
        </div>
        </div>
        </div>


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
