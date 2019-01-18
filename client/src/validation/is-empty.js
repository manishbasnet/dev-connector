// function isEmpty(value) {
//     return (
//         value === undefined ||
//         value === null ||
//         (typeof value === 'object' && Object.keys(value).length === 0) || 
//         (typeof value === 'string' && value.trim().length === 0)
//     );
// }

// Refactored above code as

const isEmpty = value => 
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

export default isEmpty;