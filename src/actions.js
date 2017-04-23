const SUBMIT_POST = 'SUBMIT_POST';
const TITLE_CHANGE = 'TITLE_CHANGE';

export function submitPost(post) {
  return dispatch => {
    dispatch({
      type: SUBMIT_POST,
      post: post
    });
  };
};

export function titleChange(title) {
  return dispatch => {
    dispatch({
      type: TITLE_CHANGE,
      title: title
    });
  };
};
