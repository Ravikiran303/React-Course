import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
			 <CommentDetail author="sam" timeAgo="Today at 4:45AM" content="Nice blog Post" avatar={faker.image.avatar()}/>
			 </ApprovalCard>
			 <ApprovalCard><CommentDetail author="jane" timeAgo="Today at 5:45AM" content="Nice subject" avatar={faker.image.avatar()}/></ApprovalCard>
			 <ApprovalCard><CommentDetail author="alex" timeAgo="Today at 6:45AM" content="Nice writing" avatar={faker.image.avatar()}/></ApprovalCard>
			 <ApprovalCard><CommentDetail author="ravi" timeAgo="Today at 7:45AM" content="Nice Post" avatar={faker.image.avatar()}/></ApprovalCard>
		</div>
	);
};
ReactDOM.render(<App/>,document.querySelector('#root'));
