import * as React from "react";
import Style from "../../scss/subsection-nav.scss";

/**
 * Class that defines a subsection navigation component
 *
 * @property {object} props the default properties
 * @property {object} props.subsection the subsection object
 * @property {string} props.subsection.titleText the tag title
 * @property {React.Component[]} props.subsection.tags the tags of the subsection
 */
class SubsectionNav extends React.Component {
    /**
     * Renders a React.js component
     *
     * @returns {React.Component} the component to render
     */
    render() {
        const subsection = this.props.subsection;

        return <div className={Style.tagsSubsectionNav}>
            <span className={Style.tagsSubsectionNavTitle}>{subsection.titleText}</span>
            <div className={Style.tagsContainerNav}>{subsection.tags}</div>
        </div>;
    }
}

export default SubsectionNav;