import './card.style.css';

const Card = ({monstor}) => {
    const {id, name, email} = monstor;
    return (<div className="card-container" key={id}>
        <img 
            alt={`monstor ${name}`} 
            src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>);
}

export default Card;