import React from "react";

class DayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.day === undefined ? null : this.props.day.rating,
      comment: this.props.day === undefined ? "" : this.props.day.comment
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const day = Object.assign({}, this.state, {
      day_index: this.props.dayIndex
    });
    const dayWithUserId = Object.assign({}, day, {
      user_id: this.props.currentUser.id
    });

    this.props
      .processForm(dayWithUserId)
      .then(this.props.history.push(`/days`));
  }

  render() {
    return (
      <div>
        <form className="day-show-form" onSubmit={this.handleSubmit}>
          {/* rating */}
          <label>Rating</label>
          {/* dropdown  */}
          <select
            id="rating"
            onChange={this.update("rating")}
            value={this.props.rating}
          >
            <option value="">--How bad was your craving today--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {/* comment  */}
          <label>Comment</label>
          <textarea
            id="comment"
            placeholder="Enter text here"
            value={this.props.comment}
            onChange={this.update("comment")}
          ></textarea>
          {/* conditional button  */}
          <button type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

// export default DayShow = props => {
//   return (
//     <div>
//       <form className="day-show-form">
//         {/* rating */}
//         <label>Rating</label>
//         {/* dropdown  */}

//         {/* comment  */}
//         <label id="comment">Comment</label>
//         <textarea name="" id="comment" placeholder="Enter text here"></textarea>

//         {/* update button  */}
//       </form>
//     </div>
//   );
// };

// class ThingsIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLogout = this.handleLogout.bind(this);
//   }

//   handleLogout() {
//     this.props.logout();
//   }

//   componentDidMount() {}

//   handleLogout() {
//     this.props.logout();
//   }

//   render() {
//     return (
//       <>
//         <div>HERE AT THINGS INDEX</div>
//         <button onClick={this.handleLogout}></button>
//       </>
//     );
//   }
// }

export default DayForm;
