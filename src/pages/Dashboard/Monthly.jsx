import React from 'react';
import TaskCard from '../../UI/taskCard';
import Progress from '../../UI/progressCard';
import { FaAirbnb } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';

const Monthly = () => {
  return (
    <>
      <div className="monthly-goals">
        <div className="monthly-head">
          <h2>Monthly Pinned</h2>
          <a href="#">View all</a>
        </div>
        <div className="tasks">
          <TaskCard
            category={`Next gen immuno`}
            time={'5d'}
            task={'Multispecific liquid analysis'}
            icon={<FaAirbnb />}
            reminder="New Feedback"
          />
          <TaskCard
            category={`Harmony`}
            time={'3d'}
            task={'Protein characteristics during childbirth and pregnancy'}
            icon={<FaAirbnb />}
            reminder="Deadline is today"
          />
          <TaskCard
            category={`Pharmaceutical`}
            time={'7h'}
            task={'Quick element dissolution testing'}
            icon={<FaAirbnb />}
            reminder="Accepted"
          />
        </div>
        <div className="outlook">
          <div className="outlook-heading">
            <div>
              <h3>My learnings</h3>
              <p>Your progress of medical lectures</p>
            </div>
          </div>
          <div className="progress">
            <Progress
              icon={<AiOutlineHome />}
              topic="Virus"
              progress="92% progress"
            />
            <Progress
              icon={<AiOutlineHome />}
              topic="Virus"
              progress="92% progress"
            />
            <Progress
              icon={<AiOutlineHome />}
              topic="Virus"
              progress="92% progress"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Monthly;
