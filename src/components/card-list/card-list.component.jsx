import Card from '../card/card.component';
import './card-list.style.css';

const CardList = ({monstors}) => (
    <div className="card-list"> 
        {monstors.map(monstor => {
            return  <Card monstor={monstor} key={monstor.id}/>
        })}
    </div>
);

export default CardList;