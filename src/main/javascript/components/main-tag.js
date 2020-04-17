import * as React from "react";
import Style from "../../scss/main-tag.scss";

/**
 * Class that defines the main tag component
 *
 * @property {object} props the default properties
 * @property {object} tag the tag information
 * @property {string} tag.sectionText the tag section title
 * @property {string} tag.subsectionText the tag subsection title
 * @property {string} tag.titleText the tag title
 * @property {string} tag.descriptionText the tag description
 * @property {string} tag.codeText the tag code
 */
class MainTag extends React.Component {
    /**
     * Renders a React.js component
     *
     * @returns {React.Component} the component to render
     */
    render() {
        const tag = this.props.tag;

        if ( tag ) {
            return <section className={Style.tagsSection}>
                <h2 className={Style.tagsSectionTitle}>{tag.sectionText}</h2>
                <section className={Style.tagsSubsection}>
                    <h3 className={Style.tagsSubsectionTitle}>{tag.subsectionText}</h3>
                    <article id={tag.id} className={Style.tagContent}>
                        <header className={Style.tagContentName}>{tag.titleText}</header>
                        <section className={Style.tagContentDescription}>{tag.descriptionText}</section>
                        <section className={Style.tagContentCode}>{tag.codeText}</section>
                        <section className={Style.tagContentExample} dangerouslySetInnerHTML={ { __html: tag.codeText } }/>
                    </article>
                </section>
            </section>;
        } else
            return null;
    }
}

export default MainTag;