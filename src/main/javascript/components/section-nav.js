import * as React from "react";
import Style from "../../scss/section-nav.scss";

/**
 * Class that defines a section navigation component
 *
 * @property {object} props the default properties
 * @property {object} props.section the section object
 * @property {string} props.section.titleText the tag title
 * @property {React.Component[]} props.section.subsections the subsections of the section
 */
class SectionNav extends React.Component {
    /**
     * Renders a React.js component
     *
     * @returns {React.Component} the component to render
     */
    render() {
        const section = this.props.section;

        return <div className={Style.tagsSectionNav}>
            <span className={Style.tagsSectionNavTitle}>{section.titleText}</span>
            <div className={Style.tagsSubsectionsContainerNav}>{section.subsections}</div>
        </div>;
    }
}

export default SectionNav;