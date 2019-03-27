import React, { Component } from 'react';
import PublicPost from './publicPost';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true, 
      posts: [], 
      loadMore: false
    }
  }
  
  async componentDidMount() {
    const posts = await PublicPost.fetchList({ convergence: true }, {decrypt: false});
    console.log(posts)
    this.setState({ posts, loading: false })
  }
  render() {
    if(this.state.loading) {
      return (
        <h1>Loading</h1>
      )
    } else if(window.location.href.includes('about')) {
      return (
        <div className='container'>
          <h3>About Convergence</h3>
          <p>Convergence is a product of <a href='https://graphitedocs'>Graphite</a> and <a href='https://publishing.graphitedocs.com'>Graphite Publishing.</a> It is
          an outlet for writing that is wholy owned by the writer. All posts are created in Graphite Publishing, a platform that lets people create their own custom blogs 
          with their writing stored in a storage bucket dedicated just to them.</p> 
          <p>
            Writers have the option to include their posts in Converegence with the flip of a toggle within a post. They can also remove posts just by flipping that toggle back. 
            Convergence strives to be a gathering place for quality writing that lifts up each individual rather than lifting up a corporation. Convergence will always be free 
            and will always be ad-free. 
          </p>
          <h6>Takedown requests</h6>
          <p>Because Convergence is an aggregation tool, it is possible that an entity with legal authority will submit takedown requests that Graphite will have to comply with. However, that content is still owned by the writer 
            and will remain available on the writer's blog unless the writer takes the content down there. 
          </p>
          <p>It's also worth noting that because Convergence is a product of Graphite, any objectionable content can and will be removed. Converence is <strong>not</strong> and outlet to avoid deplatforming or to avoid censorship (valid or invalid). It is 
          a place where people can gather and discover great writing without having to worry about hidden corporate interests.</p>
          <p>Enjoy and have fun!</p>
        </div>
      )
    } else {
      let posts = [];
      if(this.state.loadMore) {
        posts = this.state.posts.reverse();
      } else {
        posts = this.state.posts.slice(0, 15).reverse();
      }

      return (
        <div className="container posts">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                {
                  posts.map(post => {
                    return (
                    <div key={post._id} className="post-preview">
                      <a href={post.attrs.link} target='_blank' rel="noopener noreferrer">
                        <h2 className="post-title">
                         {post.attrs.title}
                        </h2>
                        {
                          post.attrs.featureImg ? 
                          <img className="responsive-img feature-img" src={post.attrs.featureImg} alt='featured'/> : 
                          <div style={{display: "none"}} />
                        }
                      </a>
                      <p className="post-meta">Posted by
                        <a href={`https://publishing.graphitedocs.com/sites/${post.attrs.author}`} target='_blank' rel="noopener noreferrer"> {post.attrs.author} </a>
                        on { post.attrs.publishedDate}</p>
                        <hr/>
                    </div>
                    
                    )
                  })
                }
                <div>
                  {posts.length < this.state.posts.length && this.state.loadMore !== true ? 
                    <a onClick={()=> this.setState({loadMore: true})}>Load more</a> : 
                    <div style={{display: "none"}} />
                  }
                  
                </div>
              </div>
            </div>
        </div>
      );
    }
  }
}

export default Posts;
