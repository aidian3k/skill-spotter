import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { SearchBarProps } from './types';

const { Option } = Select;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleTagChange = (tags: string[]) => {
        setSelectedTags(tags);
    };

    const handleSearchClick = () => {
        const searchText = selectedTags.join(' ');
        onSearch(searchText);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Select
                mode="tags"
                style={{ flex: 1, marginRight: 16 }}
                placeholder="Type and press Enter to add tags"
                onChange={handleTagChange}
                tokenSeparators={[' ', ',']}
                value={selectedTags}
            >
                {selectedTags.map(tag => (
                    <Option key={tag} value={tag}>
                        {tag}
                    </Option>
                ))}
            </Select>
            <Button type="primary" onClick={handleSearchClick}>
                Search
            </Button>
        </div>
    );
};

export default SearchBar;