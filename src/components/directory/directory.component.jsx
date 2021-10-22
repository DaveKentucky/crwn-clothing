// libraries
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// components
import MenuItem from "../menu-item/menu-item.component";
// redux
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
// styles
import { DirectoryMenuContainer } from './directory.styles';


const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {
            sections.map(( {id, ...otherSectionProps} ) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);