var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <ul className = 'contactList'>
                {this.props.items.map(function(contact){
                    return <Contact  key = {contact.id} item = {contact} />
                })}
            </ul>
        );
    }
});