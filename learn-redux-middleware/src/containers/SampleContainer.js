import React from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';

const { useEffect } = React;

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    console.log(getPost);
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
