import React from 'react';
import { useNavigate } from 'react-router-dom';

function useUtils() {
    const navigate = useNavigate()

    const handleDetail = (id,title) => {
        navigate(`/detail/${id}/${title}`);
    };
    return {
        handleDetail
    };
}

export default useUtils;