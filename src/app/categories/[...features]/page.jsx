import React from 'react';

const CategoriesDetailsPage = ({params}) => {
    console.log(params)

    // http://localhost:3000/categories/features1/example1/title


    if (params.features.length == 3)
        return (
            <div>
                {params.features[2]}
            </div>
        )
    if (params.features.length == 2)
        return (
            <div>
                {params.features[1]}
            </div>
        )

    return (
        <div className="h-screen">
            Categories details page
        </div>
    );
};

export default CategoriesDetailsPage;