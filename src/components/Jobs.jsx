import Component from "./content";
import jobs from "./data";
function JobsList(params) {
    return(
        <>
            {jobs.map((job) => (
                <Component
                rolename={job.rolename}
                qualification={job.qualification}
                location={job.location}
                company={job.company}
                link={job.link}
                postedON={job.postedON}

                />
            ))}
        </>
    )       
}
export default JobsList;