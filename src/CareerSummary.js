import DoubleColArticle from './components/DoubleColArticle';

function CareerSummary(props) {
  return (
    <section>
      <h3>Career Summary</h3>
      <DoubleColArticle
        credentials={"Assistant Lab Manager"}
        credentialIssuer={"SFU Vision Lab"}
        timeframe={"Sept. 2019 Current"}
        description={"Duties include lab management, programming, website design and maintenance, technical consultancy, experimental design, and training. (part-time)"}
      />
      <DoubleColArticle
        credentials={"Freelance Web Developer"}
        credentialIssuer={"Self-employed"}
        timeframe={"Jan. 2015 Current"}
        description={"Designed, hosted and managed various websites for local businesses and organizations, including two research labs at SFU. (part-time)"}
      />
    </section>

  );
}

export default CareerSummary;
