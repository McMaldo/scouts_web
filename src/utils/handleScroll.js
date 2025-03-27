/**
 * scroll to an element by the id
 * @param {Event} event event object
 * @param {string} id element id
 */
export const handleScroll = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};