class Create extends React.Component{
  createJob = (event) => {
    event.preventDefault();
    axios.post(
      '/jobs',
      {
        job_title:this.state.newJobTitle,
        company:this.state.newJobCompany,
        description:this.state.newJobDescription,
        location:this.state.newJobLocation,
        qualification:this.state.newJobQualification,
        salary:this.state.newJobSalary,
        link:this.state.newJobLink
      }
    ).then(
      (response)=>{
        this.props.createCallback();
      }
    )
  }

  changeNewJobTitle = (event) => {
    this.setState({
      newJobTitle:event.target.value
    })
  }
  changeNewJobCompany = (event) => {
    this.setState({
      newJobCompany:event.target.value
    })
  }
  changeNewJobDescription = (event) => {
    this.setState({
      newJobDescription:event.target.value
    })
  }
  changeNewJobLocation = (event) => {
    this.setState({
      newJobLocation:event.target.value
    })
  }
  changeNewJobQualification = (event) => {
    this.setState({
      newJobQualification:event.target.value
    })
  }
  changeNewJobSalary = (event) => {
    this.setState({
      newJobSalary:event.target.value
    })
  }
  changeNewJobLink = (event) => {
    this.setState({
      newJobLink:event.target.value
    })
  }

  render = () => {
    console.log(this.props);
    return <div>
    <h2>Add a New Job Listing</h2>
    <form onSubmit={this.createJob}>
      <input onKeyUp={this.changeNewJobTitle} type="text" placeholder="Job Title"/><br/>
      <input onKeyUp={this.changeNewJobCompany} type="text" placeholder="Company"/><br/>
      <input onKeyUp={this.changeNewJobDescription} type="text" placeholder="Job Description"/><br/>
      <input onKeyUp={this.changeNewJobLocation} type="text" placeholder="Company"/><br/>
      <input onKeyUp={this.changeNewJobQualification} type="text" placeholder="Qualifications"/><br/>
      <input onKeyUp={this.changeNewJobSalary} type="text" placeholder="$ Salary"/><br/>
      <input onKeyUp={this.changeNewJobLink} type="text" placeholder="Link to Application"/><br/>
      <input type="submit" value="Create Listing"/>
    </form>
  </div>
  }
}
