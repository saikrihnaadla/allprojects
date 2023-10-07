import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="bg-container">
      <div className="heading-container">
        <h1>{courseTitle}</h1>
        <AiFillClockCircle />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <ul className="skills-container">
        {tagsList.map(eachObject => (
          <li className="skills-bg" key={eachObject.id}>
            <p>{eachObject.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
