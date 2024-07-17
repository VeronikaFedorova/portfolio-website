import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl, projectUrl}) => {
    return (
      <Col sm={6} md={4}>
        <div className='proj-imgbx'>
          <a href={projectUrl} target='_blank' rel='noreferrer'>
            <img src={imgUrl} alt='project-screenshot' />
            <div className='proj-txtx'>
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </a>
        </div>
      </Col>
    );
}