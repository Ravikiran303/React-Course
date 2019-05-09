import React,{ useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resources, setResource] = useState('posts');
    
        return(
            <div className="ui container">
                <UserList />
                <div>
                    <button onClick={()=> setResource('posts')}>Posts</button>
                    <button onClick={()=>setResource('todos')}>Todos</button>
                </div>   
                <ResourceList resource={resources}/>
            </div>
        );
};
export default App;