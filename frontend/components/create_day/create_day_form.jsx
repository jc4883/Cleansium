import React from "react";
import NewPhotoForm from '../new_photo_form/new_photo_form';

class CreateDayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      comment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.forceParentRender = this.forceParentRender.bind(this);
  }

  forceParentRender() {
    this.forceUpdate();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const day = Object.assign({}, this.state, {day_index: this.props.dayIndex});
    const dayWithUserId = Object.assign({}, day, {user_id: this.props.currentUser.id});
    this.props.processForm(dayWithUserId)
      .then(this.props.history.push(`/new_day_photo/${this.props.dayIndex}`));
  }

  componentDidMount() {
    if (this.props.formType === "update") {
      this.setState({
        rating: this.props.day.rating,
        comment: this.props.day.comment
      })
    }
  }

  render() {
    let option1Value = "";
    let option2Value = "";
    let option3Value = "";
    let option4Value = "";
    let option5Value = "";
    if (this.props.day === undefined) {

    } else {
      switch (this.props.day.rating) {
        case "":
          break;
        case 1:
          option1Value = "selected";  
          break;
        case 2:
          option2Value = "selected";
          break;
        case 3:
          option3Value = "selected";
          break;
        case 4:
          option4Value = "selected";
          break;
        case 5:
          option5Value = "selected";
          break;
        default:
          break;
      }
    }

    return (
      <div className="day-show-form-container">
        <form className="create-day-form" onSubmit={this.handleSubmit}>
          <div className="rating-container">
            <h1>How much you craved junk food:&nbsp;</h1>
            <select id="rating" onChange={this.update("rating")} value={this.props.rating}>
              <option disable selected>&nbsp;</option>
              <option selected={`${option1Value}`}>1</option>
              <option selected={`${option2Value}`}>2</option>
              <option selected={`${option3Value}`}>3</option>
              <option selected={`${option4Value}`}>4</option>
              <option selected={`${option5Value}`}>5</option>
            </select>
            <h1>&nbsp;/ 5</h1>
          </div>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.update("comment")}
            placeholder="Did you eat health consciously today?"
            cols="30"
            rows="10">
          </textarea>
          <button className="submit-button" type="submit">{this.props.buttonText}</button>
        </form>
        {/* <button className="photos-button" onClick={this.handleNewDocButton}>Add More Photos!</button>
        <div id="docs-index-form" className="hide-boi"> 
          <NewPhotoForm createPhotoUpload={this.props.createPhotoUpload} dayId={this.props.day.id}  parentRender={this.forceParentRender} />
        </div> */}
      </div>
    );
  }
}
export default CreateDayForm;
