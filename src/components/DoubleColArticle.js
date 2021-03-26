import './DoubleColArticle.scss';

function DoubleColArticle(props) {
  console.log(props)
  return (
    <article className="two-columns left-accented">
      <header>
        <div class="credentials">
          {props.credentials}
        </div>
        <div class="credential-issuer">
          {props.credentialIssuer}
        </div>
        <div class="credential-timeframe">
          {props.timeframe}
        </div>
      </header>
      <p class="description left-accented">
        {props.description}
      </p>
    </article>
  );
}

export default DoubleColArticle;
