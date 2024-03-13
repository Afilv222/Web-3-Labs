import TransferListItem from './TransferListItem.jsx';

// This component displays a column of data. Notice that it uses the map() function to output a
// list item component for each element in the passed-in data array
const TransferColumn = (props) => {
    return (
        <section className="column">
            <h2 className="is-size-5 has-text-centered">{props.heading}</h2>
            <ul className="menu-list">
            { props.data.map( m =>
                <TransferListItem name={m.title} key={m.id} id={m.id} update={props.update} /> ) }
        </ul>
        </section>
    )
};
export default TransferColumn; 