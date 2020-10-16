<?php

$dbconn = pg_connect('host=localhost dbname=jobs');

Class Job {
  public $id;
  public $job_title;
  public $company;
  public $description;
  public $location;
  public $qualification;
  public $salary;
  public $link;
  public function __construct($id, $job_title, $company, $description, $location, $qualification, $salary, $link){
    $this->id = $id;
    $this->job_title = $job_title;
    $this->company = $company;
    $this->description = $description;
    $this->location = $location;
    $this->qualification = $qualification;
    $this->salary = $salary;
    $this->link = $link;
  }
}
Class Jobs {
  static function create($job){
    $query = "INSERT INTO listings (job_title, description, location, company, qualifications) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    pg_query_params($query, [$job->job_title, $job->company, $job->description, $job->location, $job->qualification, $job->salary, $job->link]);
    return self::all();
  }
  static function all(){
    $jobs = array();
    $results = pg_query('SELECT * FROM listings ORDER BY id ASC');
    $row_object = pg_fetch_object($results);

    while($row_object !== false){
      $new_job = new Job(
         intval($row_object->id),
         $row_object->job_title,
         $row_object->company,
         $row_object->description,
         $row_object->location,
         $row_object->qualification,
         $row_object->salary,
         $row_object->link,
       );
       $jobs[] = $new_job;
       $row_object = pg_fetch_object($results);
    }
    return $jobs;
  }
  static function update($updated_job){
    $query = "UPDATE listings SET job_title = $1, company = $2, description = $3, location = $4, qualification = $5, salary = $6, link = $7 WHERE id = $8" ;
    $query_params = array($updated_job->job_title, $updated_job->company, $updated_job->description, $updated_job->location, $updated_job->qualification, $updated_job->salary, $updated_job->link, $updated_job->id);
    pg_query_params($query, $query_params);
    return self::all();
  }
  static function delete($id){
    $query = "DELETE FROM listings WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);
    return self::all();
  }
}
 ?>
