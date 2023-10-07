import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-bg-container">
      <img src={imageUrl} alt="project" className="projects-image-size" />
      <div className="project-tittle-container">
        <h1>{projectTitle}</h1>
        <AiFillCalendar />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
