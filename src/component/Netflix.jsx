import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard.jsx";
 const Netflix=()=>{
    return (<>
    <ul className="grid grid-three--cols" >{seriesData.map((current)=>{
      return <SeriesCard key={current.id} currentelement={current}/>

    })
      }
    </ul>
          
    </>
    );
};
export default Netflix;