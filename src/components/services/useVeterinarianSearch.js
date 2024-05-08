import { useState, useEffect, useCallback } from 'react';

function useVeterinarianSearch(initialData) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(initialData);

    const filterData = useCallback(() => {
        const filtered = initialData.filter(vet => {
            return vet.specializations.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
        });
        setFilteredData(filtered);
    }, [searchQuery, initialData]);

    useEffect(() => {
        filterData();
    }, [filterData]);

    function handleSearchInputChange(query) {
        setSearchQuery(query);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            filterData();
        }
    }

    return { filteredData, handleSearchInputChange, handleKeyPress };
}

export default useVeterinarianSearch;
