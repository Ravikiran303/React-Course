import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
    const  resources = useResources(resource);
    
    // async componentDidUpdate(prevProps){
    //     if(prevProps.resource !== this.props.resource){
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        
    //     this.setState({resource: response.data});
    //     }
    // }

    
        return (
            <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
        );
};
export default ResourceList;