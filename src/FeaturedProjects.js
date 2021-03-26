import './FeaturedProjects.scss';

function FeaturedProjects(props) {
  return (
    <section>
      <h3>Featured Projects</h3>
      <article className="left-accented">
        <h4><a href="https://www.bugdiary.com">BugDiary.com</a> <span>(Dec, 2020)</span></h4>
        <p>Online error reporting and ticketing platform. Users can create bug diaries and send the link to guest users, who can report bugs without signing up. Currently in use at SFU Vision Lab to manage ongoing experiments.</p>
        <div className="tech-details">
          Frontend: HTML + CSS + JS, ReactJS (coming update)<br/>
          Backend: Flask (MVC), SQLAlchemy ORM
        </div>
      </article>
      <article className="left-accented">
        <h4><a href="https://www.coworkout.online">CoWorkout.online</a> <span>(Mar, 2021)</span></h4>
        <p>An online video-chatting platform centered around working out. Includes scheduling and matchmaking features. Worked as a group to produce a MVP in a very short timeframe.</p>
        <div className="tech-details">
          Frontend: React + Material-UI<br/>
          Backend: Express, PostgreSQL, Nginx server, Ubuntu 20.04 VPS, Certbot
        </div>
      </article>
      <article className="left-accented">
        <h4><a href="http://www.abbybeautyandbeyond.ca">Abby's Beauty and Beyond Website</a> <span>(Feb, 2021)</span></h4>
        <p>
          (In progress) Website built for a beauty salon in Abbotsford, includes a content-management system,  appointment management system, and SMS reminders for appointments.
        </p>
        <div className="tech-details">
          Frontend: React/Material-UI<br/>
          Backend:  Flask (MVC), SQLAlchemy ORM, MySQL
        </div>
      </article>
      <article className="left-accented">
        <h4><a href="http://www.sfu.ca/psychology/research/vlab.html"></a>SFU Vision Lab Website <span>(2021)</span>; <a href="http://www.sfu.ca/psychology/research/hhl/">SFU Helping and Happiness Lab Website</a><span>(2020)</span></h4>
        <p>
          Websites built for research labs at Simon Fraser University.
        </p>
        <div className="tech-details">Frontend: Adobe Experience Manager (AEM) and HTML + JS</div>
      </article>
    </section>

  );
}

export default FeaturedProjects;
