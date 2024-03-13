//This component will render each list item in the source and destination columns
const TransferListItem = props => {

    const handleClick = (e) => {
        props.update(props.id);
     }; 

    return (
        <li><a>{props.name}
            <button className="is-small is-light button" onClick={handleClick}>Move</button>
        </a></li>
    );
   };
export default TransferListItem; 