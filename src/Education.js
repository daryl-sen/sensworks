function Education(props) {
  return (
    <section>
      <h3>Education</h3>
      <article className="two-columns left-accented">
        <header>
          <div class="credentials">
            Diploma in Full-Stack Web Development
          </div>
          <div class="credential-issuer">
            Lighthouse Labs
          </div>
          <div class="credential-timeframe">
            Jan. 2020 to Mar. 2020
          </div>
        </header>
        <p class="description left-accented">
          Create web projects using popular languages, tools, and frameworks (i.e. NodeJS, React, Git, PostgreSQL, etc). Worked with a company to produce a MVP.
        </p>
      </article>
      <article className="two-columns left-accented">
        <header>
          <div class="credentials">
            B.A. Psychology
          </div>
          <div class="credential-issuer">
            Simon Fraser University
          </div>
          <div class="credential-timeframe">
            Sept. 2014 to Dec. 2020
          </div>
        </header>
        <p class="description left-accented">
          Specialized in Cognitive Psychology (Attention and perception), research assistant at SFU Vision Lab and Helping and Happiness Lab.
        </p>
      </article>
    </section>

  );
}

export default Education;
