import './Skills.scss';

function Skills(props) {
  return (
    <>
      <h3>Skills</h3>
      <div class="three-columns">
        <div>
          <article>
            <h4>Programming Languages</h4>
            <p>
              Javascript, Python, Ruby, PHP, HTML, CSS
            </p>
          </article>
        </div>
        <div>
          <article>
            <h4>Frameworks and Libraries</h4>
            <p>
              ReactJS, Django, Flask, Express, Laravel, NodeJS, Ajax, JQuery, mySQL, PostgreSQL, SQLite
            </p>
          </article>
        </div>
        <div>
          <article>
            <h4>Server Technologies</h4>
            <p>
              Nginx, uWSGI, Heroku CLI, PM2, Certbot
            </p>
          </article>
        </div>
      </div>
    </>

  );
}

export default Skills;
