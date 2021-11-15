// libraries
import React from 'react';
import { useSelector } from 'react-redux';
// components
import MenuItem from '../menu-item/menu-item.component';
// redux
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
// styles
import { DirectoryMenuContainer } from './directory.styles';


const Directory = () => {
    const sections = useSelector(selectDirectorySections);

    return (
        <DirectoryMenuContainer>
            {
                sections.map(( {id, ...otherSectionProps} ) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </DirectoryMenuContainer>
    );
};

export default Directory;