import React from "react";

// export const Course = () => {
//     return <div>Course</div>;
// }

function Course({title, description, image}) {
    // function Course(props) {

    // console.log(props);
    // const title = props.title
    // const description = props.description
    // const {title, description} = props;

    return (
        <div>
            {/* <div>{props.title}</div>
            <div>{props.description}</div> */}

            <div>{title}</div>
            <div>{description}</div>
            <img src={image} alt=""/>
        </div>
    );
}

export default Course;