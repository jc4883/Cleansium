import React from 'react'; 
import NewPhotoForm from '../new_photo_form/new_photo_form';

class NewDayPhotoCreate extends React.Component {
    constructor(props) {
        super(props);
        this.findDayId = this.findDayId.bind(this);
        this.handleNewDocButton = this.handleNewDocButton.bind(this);
        this.forceParentRender = this.forceParentRender.bind(this);
        this.returnToIndex = this.returnToIndex.bind(this);
    }

    returnToIndex() {
        this.props.history.push("/");
    }

    forceParentRender() {

    }

    handleNewDocButton() {
        document.getElementById("docs-index-form").classList.remove("hide-boi")
    }

    findDayId() {
        let dayIndex = this.props.match.params.day_index;
        let days = Object.values(this.props.days);
        for (let i = 0; i < days.length; i++) {
            if (dayIndex == days[i].day_index) {
                return days[i].id;
            }
        }
    }

    componentDidMount() {
        this.props.fetchDays();
    }

    render() {
        if (!this.props.days) {
            return null;
        }
        let dayId = this.findDayId();
        return (
            <>
                <div className="new-day-photo-create">
                    <h1>Add photos</h1>
                    <div className="new-day-buttons">
                        <button className="new-day-return" onClick={this.returnToIndex}>Save &amp; return</button>
                        <button className="new-day-new-doc" onClick={this.handleNewDocButton}>Add photos</button>
                    </div>
                    <div id="docs-index-form" className="hide-boi"> 
                        <NewPhotoForm createPhotoUpload={this.props.createPhotoUpload} dayId={dayId}  parentRender={this.forceParentRender} />
                    </div>
                </div>
            </>
        )
    }
}

export default NewDayPhotoCreate;