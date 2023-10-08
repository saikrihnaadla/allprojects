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
      <div className="project-title-container">
        <h1>{projectTitle}</h1>
        <div className="calender-style">
          <AiFillCalendar />
          <p className="hours-style">{duration}</p>
        </div>
      </div>
      <p className="description-style">{description}</p>
      <a className="visit-style" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
