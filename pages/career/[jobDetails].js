import { useRouter } from "next/router";


function JobDetails(){
    const router= useRouter()
    const jobDetails= router.query.jobDetails
    return(
        <h1>Job Details about {jobDetails}</h1>
    )
      
       
    
}

export default JobDetails