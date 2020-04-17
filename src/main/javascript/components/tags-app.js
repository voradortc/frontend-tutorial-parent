import * as React from "react";

import {deprecatedEval} from "../deprecated";
import {executeRequest} from "../requests";

import SectionNav from "./section-nav";
import SubsectionNav from "./subsection-nav";
import TagNav from "./tag-nav";
import MainTag from "./main-tag";
import Style from "../../scss/tags-app.scss";

/**
 * Class that defines a the application component
 *
 * @property {object} props the default properties
 * @property {object} props.styles the styles object
 * @property {string} props.styles.tagsMainNav the styles object property
 * @property {string} props.styles.tagsMainTitle the styles object property
 */
class TagsApp extends React.Component {
    /**
     * The default constructor for this class
     *
     * @param props
     */
    constructor( props ) {
        super( props );
        this.state = { sections: null, tag: null };
        this.changeTag = this.changeTag.bind( this );
    }

    /**
     * Standard function executed when a component is mounted
     */
    componentDidMount() {
        const styles = this.props.styles;

        executeRequest( "GET", "data/nav-data.json" ).then( sections => {
            if ( sections ) {
                sections = sections.map( section => TagsApp.sectionNavMap( section, this.changeTag, styles ) );
                this.setState( { sections } );
            }
        } );
    }

    /**
     * Loads the tag information when a TagNav is clicked
     *
     * @param {Event} event the event that was created and triggered this call
     * @param {HTMLElement} event.target the element that triggered this call
     */
    changeTag( event ) {
        const target = event.target,
              tagName = target.getAttribute( "data-location" );

        event.preventDefault();
        executeRequest( "GET", `data/tags/${tagName}.json` ).then( tag => {
            if ( tag ) {
                this.setState( { tag } );
                deprecatedEval( tag.codeText );
            }
        } );
    }

    /**
     * Renders a React.js component
     *
     * @returns {*} the component to render
     */
    render() {
        const sections = this.state.sections,
              tag = this.state.tag;

        return <React.Fragment>
            <nav className={Style.tagsMainNav}>{sections}</nav>
            <h1 className={Style.tagsMainTitle}>Examples of visible tags in HTML5</h1>
            <MainTag tag={tag}/>
        </React.Fragment>;
    }

    /**
     * Maps a section object to a renderable SectionNav component
     *
     * @param {object} section the section to map
     * @param {function} clickHandler the function to handle clicks
     * @param {object} styles the global application styles
     * @returns {*} the section to render
     */
    static sectionNavMap( section, clickHandler, styles ) {
        if ( section.subsections ) {
            const subsections = section.subsections;
            section.subsections = subsections.map( subsection => TagsApp.subsectionNavMap( subsection, clickHandler, styles ) );
        }

        return <SectionNav key={section.id} section={section} styles={styles}/>
    }

    /**
     * Maps a subsection object to a renderable SubsectionNav component
     *
     * @param {object} subsection the subsection to map
     * @param {function} clickHandler the function to handle clicks
     * @param {object} styles the global application styles
     * @returns {*} the subsection to render
     */
    static subsectionNavMap( subsection, clickHandler, styles ) {
        if ( subsection.tags ) {
            const tags = subsection.tags;
            subsection.tags = tags.map( tag => TagsApp.tagNavMap( tag, clickHandler, styles ) );
        }

        return <SubsectionNav key={subsection.id} subsection={subsection} styles={styles}/>
    }

    /**
     * Maps a tag object to a renderable TagNav component
     *
     * @param {object} tag the tag to map
     * @param {function} clickHandler the function to handle clicks
     * @param {object} styles the global application styles
     * @returns {*} the tag to render
     */
    static tagNavMap( tag, clickHandler, styles ) {
        return <TagNav key={tag.id} clickHandler={clickHandler} tag={tag} styles={styles}/>;
    }
}

export default TagsApp;