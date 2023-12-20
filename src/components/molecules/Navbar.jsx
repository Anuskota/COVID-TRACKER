import "./navbar.css"
import coronavirus from "../../assets/img/coronavirus.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faChartPie} from '@fortawesome/fontawesome-svg-core/import.macro'
// const element = <FontAwesomeIcon icon={faChartPie} />

// ReactDOM.render(element, document.body)



const Navbar = () => {
    return (
        <nav>
            <div>
                <button>
                    <img src={coronavirus} alt="coronavirus"  />
                </button>
            </div>
            <div>
                <button>
                    {/* <FontAwesomeIcon icon={faChartPie} style={{color: "#3639ae",}} /> */}
                    <i className="bi bi-pie-chart" style={{ color: "#3939ae", }}>

                    </i>
                </button>
                <button>
                    <i className="fa-solid fa-bars" style={{ color: "#3939ae", }}>

                    </i>
                </button>
                <button>
                    <i className="fa-solid fa-table-cells-large" style={{ color: "#3939ae", }}>

                    </i>
                </button>
                <button>
                    <i className="fa-sharp fa-regular fa-folder-closed" style={{ color: "#3939ae", }}>

                    </i>
                </button>
                <button>
                    <i className="fa-solid fa-chart-pie" style={{ color: "#3939ae", }}>

                    </i>
                </button>
                <button>
                    <i className="bi bi-graph-up-arrow" style={{ color: "#3939ae", }}>

                    </i>
                </button>
                <button>
                    <i className="fa-solid fa-globe" style={{ color: "#3939ae", }}>

                    </i>
                </button>
                <button>
                    <i className="fa-regular fa-message" style={{ color: "#3939ae", }}>

                    </i>
                    </button>
            </div>
            <div>
                <i className="fa-solid fa-chart-pie" style={{ color: "#3939ae", }}>

                    </i>
            </div>
        </nav>
        
    )
}

export default Navbar