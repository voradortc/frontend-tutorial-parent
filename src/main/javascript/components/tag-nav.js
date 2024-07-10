import * as React from "react";
import * as Style from "../../scss/tag-nav.scss";

/**
 * Class that defines a tag navigation component
 *
 * @property {object} props the default properties
 * @property {function} props.clickHandler the click handling function
 * @property {object} props.tag the tag object
 * @property {string} props.tag.id the id of the tag component
 * @property {string} props.tag.titleText the tag title
 */
class TagNav extends React.Component {
    /**
     * Renders a React.js component
     *
     * @returns {React.Component} the component to render
     */
    render() {
        const clickHandler = this.props.clickHandler,
              tag = this.props.tag;

        return <a className={Style.tagContentNav} onClick={clickHandler} href={`#${tag.id}`} data-location={tag.id}>
            {tag.titleText}
        </a>;
    }
}

export default TagNav;