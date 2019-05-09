import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream,deleteStream } from '../../actions';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions(){
        const {id} = this.props.match.params;
        return (<React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
        <Link to="/" className="ui button ">Canccel</Link>
        </React.Fragment>);
    }
    renderContent(){
        if(!this.props.stream){
            return 'Are you sure want to delete this stream?';
        }
        return `Are you sure delete the stream with title: ${this.props.stream.title}`;
    }
    render(){
        
        return (
            
                <Modal
                    title="Delete Stream"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                    content={this.renderContent()}
                />
            
            );
    }

}
const mapStateToProps = (state,ownProps) =>{
    return {Stream:state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps,{ fetchStream,deleteStream })(StreamDelete);