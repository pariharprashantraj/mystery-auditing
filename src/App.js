import "./App.css";

function App() {
  return (
    <>
      <div className="front-section">
        <div className="flex intro">
          <div className="flex intro-container">
            <div className="flex intro-section-top h100 flex-start">
              <div className=" detail">
                <div className="flex flex-start">
                  <span className="flex logo" />
                  <div className="name">Mytery</div>
                </div>
                <div className="tag-line">
                  Partner with The Leading Customer Experience Research Company
                </div>
                <div className="description-text">
                  Completing more than{" "}
                  <span className="highlight">250,000 evaluations</span> per
                  year across over
                  <span className="highlight">165 countries</span>, BARE is the
                  most trusted name in customer experience research.
                </div>
                <div className="flex role">
                  <div className="flex column description-text pb16 w350">
                    <div className="fw700 role-heading">FOR BUSINESS</div>
                    <div className="justify fs16 ">
                      Let's talk about evaluating your customers' experience.
                    </div>
                    <button class="button">
                      I WANT TO EVALUATE MY COMPANY
                    </button>
                  </div>
                  <div className="flex column description-text pb16 w350">
                    <div className="fw700 role-heading">
                      FOR MYSTERY SHOPPER
                    </div>
                    <div className="justify fs16 ">
                      Register to become a mystery shopper for BARE
                      International
                    </div>
                    <button class="button">BECOME A MYSTERY SHOPPER</button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex intro-section-bottom h100">
              <img className="growth-img" src="/growth.png" alt="img" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
