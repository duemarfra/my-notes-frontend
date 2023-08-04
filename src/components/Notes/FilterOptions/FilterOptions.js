'use client'

import { useState } from 'react';

const FilterOptions = ({ categories, onFilter, onArchiveFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showArchived, setShowArchived] = useState(false);

    const handleFilter = () => {
        onFilter(selectedCategory);
    };

    const handleArchiveFilter = () => {
        setShowArchived(!showArchived);
        onArchiveFilter(!showArchived);
    };

    return (
        <div className="filter-options">
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All categories</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>
            <label>
                <input
                    type="checkbox"
                    checked={showArchived}
                    onChange={handleArchiveFilter}
                />
                Show Archived
            </label>
            <button onClick={handleFilter}>Apply Filter</button>
        </div>
    );
};

export default FilterOptions;
