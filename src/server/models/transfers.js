const {getSubcategoryById} = require('./subcategories');
const {getCategoryById} = require('./categories');
const {getLanguageById} = require('./languages');
const {getRandomQuotes} = require('./quotes.js');
const {getAuthorById} = require('./authors');

const {getPetitionById, createPetition, deletePetition} = require('./petitions');
const {getAllBooks, getBookById, getRandomBooks, createBook, deleteBook} = require('./books');
const {getLocationById, createLocation, deleteLocation} = require('./locations');
const {getCollectionById, createCollection, deleteCollection} = require('./collections');
const {getMemberById, getLastBookForMember, getAllMembers, getMemberBySession, createMember, deleteMember} = require('./members');
const {getReviewById, createReview, deleteReview} = require('./reviews');




exports.getSubcategoryById = getSubcategoryById;
exports.getCategoryById = getCategoryById;
exports.getLanguageById = getLanguageById;
exports.getRandomQuotes = getRandomQuotes;
exports.getAuthorById = getAuthorById;

exports.getPetitionById = getPetitionById;
exports.createPetition = createPetition;
exports.deletePetition = deletePetition;

exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.getRandomBooks = getRandomBooks;
exports.createBook = createBook;
exports.deleteBook = deleteBook;

exports.getLocationById = getLocationById;
exports.createLocation = createLocation;
exports.deleteLocation = deleteLocation;

exports.getCollectionById = getCollectionById;
exports.createCollection = createCollection;
exports.deleteCollection = deleteCollection;

exports.getMemberById = getMemberById;
exports.getLastBookForMember = getLastBookForMember;
exports.getAllMembers = getAllMembers;
exports.getMemberBySession = getMemberBySession;
exports.createMember = createMember;
exports.deleteMember = deleteMember;

exports.getReviewById = getReviewById;
exports.createReview = createReview;
exports.deleteReview = deleteReview;
