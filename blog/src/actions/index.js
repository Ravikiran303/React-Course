import _ from 'lodash';
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch,getState) =>{
  
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts,'userId'));
  userIds.forEach(id => dispatch(fetchUsers(id))); 

  _.chain(getState().posts)
  .map('userId')
  .uniq()
  .forEach(id =>dispatch(fetchUsers(id)))
  .value();
  console.log(userIds);
};

//ONE Way of Fetching data
export const fetchPosts = () => async dispatch =>{
  const promise  = await jsonPlaceHolder.get('/posts');
  dispatch({
      type: 'FETCH_POSTS',
      payload:promise.data
  });
};
//one time memoization (ONE Way of Fetching data)
export const fetchUsers = (id) => async dispatch => {
  const promise  = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
      type: 'FETCH_USER',
      payload:promise.data
    });
};
//one time memoization (OTHER Way of Fetching data)
// export const fetchUsers = (id) => async dispatch => _fetchUsers(id,dispatch);
// const _fetchUsers = _.memoize(async(id,dispatch) =>{
//   const promise  = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({
//       type: 'FETCH_USER',
//       payload:promise.data
//     });
// });
// export const fetchUsers = function(id){ 
// async function(dispatch){
//   const promise  = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({
//       type: 'FETCH_USER',
//       payload:promise.data
//     });
//   };
// };
