function FeaturedProjects(props) {
  return (
    <section>
      <h3>Featured Projects</h3>
      <article>
        <h4>BugDiary.com <span>(Dec, 2020)</span></h4>
        <p>Online error reporting and ticketing platform. Users can create bug diaries and send the link to guest users, who can report bugs without signing up. Currently in use at SFU Vision Lab to manage ongoing experiments.</p>
        <div class="tech-details">Frontend: HTML + CSS + JS, ReactJS (coming update)</div>
        <div class="tech-details">Backend: Flask (MVC), SQLAlchemy ORM</div>
      </article>
      <article>
        <h4>CoWorkout.online <span>(Mar, 2021)</span></h4>
        <p>An online video-chatting platform centered around working out. Includes scheduling and matchmaking features. Worked as a group to produce a MVP in a very short timeframe.</p>
        <div class="tech-details">Frontend: React + Material-UI</div>
        <div class="tech-details">Backend: Express, PostgreSQL, Nginx server, Ubuntu 20.04 VPS, Certbot</div>
      </article>
      <article>
        <h4>Abby's Beauty and Beyond Website <span>(Feb, 2021)</span></h4>
        <p>
          Website built for a beauty salon in Abbotsford, includes a content-management system,  appointment management system, and SMS reminders for appointments.
        </p>
        <div class="tech-details">Frontend: React/Material-UI, Backend:  Flask (MVC), SQLAlchemy ORM, MySQL</div>
      </article>
      <article>
        <h4>SFU Vision Lab Website <span>(2021)</span>; SFU Helping and Happiness Lab Website<span>(2020)</span></h4>
        <p>
          Websites built for research labs at Simon Fraser University.
        </p>
        <div class="tech-details">Frontend: Adobe Experience Manager (AEM) and HTML + JS</div>
      </article>
    </section>

  );
}

export default FeaturedProjects;
