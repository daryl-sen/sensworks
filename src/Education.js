import DoubleColArticle from "./components/DoubleColArticle";

function Education(props) {
  return (
    <section>
      <h3>Education</h3>
      <DoubleColArticle
        credentials={"Diploma in Full-Stack Web Development"}
        credentialIssuer={"Lighthouse Labs"}
        timeframe={"Jan. 2020 to Mar. 2020"}
        description={"Create web projects using popular languages, tools, and frameworks (i.e. NodeJS, React, Git, PostgreSQL, etc). Worked with a company to produce a MVP."}
      />
      <DoubleColArticle
        credentials={"B.A. Psychology"}
        credentialIssuer={"Simon Fraser University"}
        timeframe={"Sept. 2014 to Dec. 2020"}
        description={"Specialized in Cognitive Psychology (Attention and perception), research assistant at SFU Vision Lab and Helping and Happiness Lab."}
      />
    </section>

  );
}

export default Education;
