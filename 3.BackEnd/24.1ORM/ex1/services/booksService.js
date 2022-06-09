const { Book } = require( '../models' );

const getAll = () => {
  return Book.findAll();
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (title, author, pageQuantity) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

const update = async (id,  title, author, pageQuantity ) => {
  const [updated] = await Book.update(
    { 
      title, 
      author, 
      pageQuantity, 
    }, 
    { where: { id } },
  );
  return updated;
};

const deletee = async (id) => {
  const deleted = await Book.destroy(
    { where: { id } },
  );
  return deleted ;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deletee
}