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

  <div className="createForm">
  <div className="create-image">
    <img src="https://i.ibb.co/71zZz5j/Employment-Opportunity-Hiring-Jobs-Icon.jpg"/>
  </div>
  <div className="create-form">
    <Create createCallback={this.updateJob}></Create>
  </div>
  </div>

  <span className="search-jobs"><h2> Job Search.</h2></span>


    <ul>

    {
      this.state.jobs.map(
        (jobs)=>{
          return <div className="row">
          <div className="card ">
          <div className="card-content">
        <h4>{jobs.job_title}</h4>
        <h5>{jobs.company}</h5><br/>
        <p className="jobDes"><b>Job Description:</b> {jobs.description}<br/><br/>
        <b>Location:</b> {jobs.location}<br/><br/>
        <b>Qualifications:</b> {jobs.qualification}<br/><br/>
        <b>Salary:</b> {jobs.salary}<br/><br/>
        </p>
      <div className="card-action">  <a class="btn" href={jobs.link}>Apply Here</a><br/> </div>

        {/* UPDATE */}
      <div className="card-action">
        <details>
        <summary className="btn">Edit</summary>
        <form id={jobs.id} onSubmit={this.editJobs}>
          <input onKeyUp={this.changeEditJobTitle} type="text" placeholder="Job Title"/><br/>
          <input onKeyUp={this.changeEditJobCompany} type="text" placeholder="Company"/><br/>
          <input onKeyUp={this.changeEditJobDescription} type="text" placeholder="Job Description"/><br/>
          <input onKeyUp={this.changeEditJobLocation} type="text" placeholder="Company"/><br/>
          <input onKeyUp={this.changeEditJobQualification} type="text" placeholder="Qualifications"/><br/>
          <input onKeyUp={this.changeEditJobSalary} type="text" placeholder="$ Salary"/><br/>
          <input onKeyUp={this.changeEditJobLink} type="text" placeholder="Link to Application"/><br/><br/>
          <input className='btn' type="submit" value="Update Listing"/>
          <br/><br/>
          <button className='delBtn btn' value={jobs.id} onClick={this.deleteJob}>
          DELETE
          </button>
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
