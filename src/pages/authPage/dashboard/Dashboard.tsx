import React, { useState } from 'react';
import "./Dashboard.css";
import ProjectImage from "../../../assets/img/project_image.png";
import { Link } from 'react-router-dom';
import { PROJECTS, TASKS } from '../../../routes/RouteConstants';
import Card from '../../../components/card/Card';
import PieChartComponent from '../../../components/piechart/PieChartComponent';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const num: number = 52;


  return (
    <div className="dash grid">
      <div className='shadow-lg projects'>
        <Card btntext={`${num} files`} title={"Projects"}>
          <Link to={PROJECTS}>
            <div className='bottom'>
              <img src={ProjectImage} alt="project-img" className='project-img' />
            </div>
          </Link>
        </Card>
      </div>
      <div className='task'>
        <Card  title={"Task"}>
          <Link to={TASKS}>
            <div className='bottom'>
              <PieChartComponent />
            </div>
          </Link>
        </Card>
      </div>
      <div className='work'>
        <Card  title={"Work"}>
          <Link to={TASKS}>
            <div className='bottom'>
            </div>
          </Link>
        </Card>
      </div>
      <div className='performance'>
        <Card  title={"Performance"}>
          <Link to={TASKS}>
            <div className='bottom'>
            </div>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
