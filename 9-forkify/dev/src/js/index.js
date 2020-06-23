import Search from './models/Search';
import Recipe from './models/Recipe';
// import List from './models/List';
// import Likes from '.models/Likes';

import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
// import * as listView from './views/listView';
// import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};


/*
*  ===== Search Controller =====
*/
const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza' // TODO

    if (query) {
        // 2) new search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) Search for recipes
            await state.search.getResults();

            // 5) Render the results on the UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch(err) {
            alert('Something went wrong with the search!');
            clearLoader();
        }
    }
}


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

// NOTE - here's an example on event delegation
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


/*
*  ===== Recipe Controller =====
*/
const controlRecipe = async () => {
    // Get ID from the URL
    const id = window.location.hash.replace('#', '');

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();

        // Highlight selected search item
        // if (state.search) searchView.highlightSelected(id);

        // Get recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                true,
                // state.likes.isLiked(id)
            );

        } catch (err) {
            console.log(err);
            alert('Error processing recipe!');
        }
    }
};

// NOTE - this is a neat way to add an event listener for multiple events
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
