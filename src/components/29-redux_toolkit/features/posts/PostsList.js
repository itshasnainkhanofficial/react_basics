import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import {PostAuthor} from './PostAuthor'
import { ReactionButtons } from "./ReactionButtons";
import { TimeAgo } from "./TimeAgo";
import { selectAllPosts } from './postsSlice'

export const PostsList = () =>  {
  // const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

//   const renderedPosts = posts.map((post) => (
  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title} | <PostAuthor userId={post.userId}/> </h3>
      <h4>Time: <TimeAgo timestamp={post.date}/></h4>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ));

  return (
    <div>
      <section className="posts-list">
        <h1 className="text-center">All posts</h1>
        {renderedPosts}
      </section>
    </div>
  );
}

export default PostsList;
