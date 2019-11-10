import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class PhotoUploadIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.photoUpload = this.props.photoUpload;
    this.handleShow = this.handleShow.bind(this);
    this.state = {redirect: false};
    //we get this.props.photoUpload from DocsIndex
  }

  handleShow() {
    this.setState({redirect: true});
  }
  

  render() {


    return (
      <div id="doc-item" onClick={this.handleShow}>
        <img id="doc-item-image" src={this.photoUpload.photoUrl} />
        <h2 id="doc-item-title">{this.photoUpload.title}</h2>
        <div id="border-boi"></div>
        <h4 id="doc-item-description">{this.photoUpload.description}</h4>
      </div>
    )
  }
}

export default PhotoUploadIndexItem;

