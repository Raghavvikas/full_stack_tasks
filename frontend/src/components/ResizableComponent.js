import React from 'react';
import Product from './Product';

const ResizableComponent = () => {

    // THIS IS THE TASK 1 including the SECOND TASK Component within the Footer component 

    // AS stated below, I tried to create a responsive design using CSS-GRID Property

// Create a Layout based on following specifications
//     ● It consists of three different components with some content (feel free to
//     add any HTML content or Images).
//     ● Users should be able to Resize the components by dragging them from
//     any of the sides.
//     ● The neighbor components should expand or shrink based on re-sizing
//     operations performed on the target component.
//     ● You can use any open-source Library.
//     ● Layout should be responsive on all laptop devices.

    return (
        <div className='wrapper'>
            <header className='box header'><h1>Full Stack Assignment</h1></header>
            <aside className="box side"><h3>Sidebar</h3></aside>
            <article className="box content">
                <h1>Main article area</h1>
                <p>
                    In this layout, we display the areas in source order for any screen less
                    that 500 pixels wide. We go to a two column layout, and then to a three
                    column layout by redefining the grid, and the placement of items on the
                    grid.
                </p>
            </article>
            <footer className="box footer" >
                <Product />
            </footer>
        </div>
    );
};

export default ResizableComponent;

