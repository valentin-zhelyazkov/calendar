import './App.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddIcon from '@material-ui/icons/Add';

function App() {
  const asd = () => {
    console.log('a');
  }

  return (
    <div className="App">
      <div className="calendar">
        <div className="months">
          <div onClick={asd}>
            <ArrowLeftIcon style={{ fontSize: 50, cursor: "pointer" }} />
          </div>
          <h1>Month: July</h1>
          <div onClick={asd}>
            <ArrowRightIcon style={{ fontSize: 50, cursor: "pointer" }} />
          </div>
        </div>
        <div className="days">
          <div className="week-days">
            <h5>MO</h5>
            <h5>TU</h5>
            <h5>WE</h5>
            <h5>TH</h5>
            <h5>FR</h5>
            <h5>SA</h5>
            <h5>SU</h5>
          </div>
          <div className="month-days">
            <div className="day">
              <p className="specific-day">1</p>
              <div className="event-box">
                <div className="event">14:00</div>
                <div className="event">3:00</div>
                <div className="event">3:00</div>
                <div className="event">3:00</div>
                <div className="event">3:00</div>
                <div className="event">3:00</div>
                <div className="event">3:00</div>
              </div>
            </div>
            <div className="day">
              2
            </div>
            <div className="day">
              3
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>
            <div className="day">
              12
            </div>

          </div>
          <AddIcon style={{ fill: "green", margin: "0 auto", fontSize: 55, color: "", border: "1px solid black", borderRadius: "10px", marginTop: "0.5rem", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default App;


