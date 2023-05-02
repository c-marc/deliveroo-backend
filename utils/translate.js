// Tests:
// const data = require("./response_deliveroo.json");
// console.log(data.meta);

const translate = (data) => {
  try {
    const newData = {};

    newData.restaurant = {
      name: data.header.title,
      description: data.meta.metatags.descriptionSocial,
      picture: data.header.image.url,
    };

    newData.categories = data.layoutNavigation.map((category) => {
      let meals = data.items.filter(
        (item) => item.categoryId === category.layoutId
      );
      meals = meals.map((item) => {
        return {
          id: item.id,
          title: item.name,
          description: item.description,
          price: item.price.formatted,
          picture: item.image?.url,
          pictureAlt: item.image?.altText,
        };
      });
      return {
        name: category.label,
        meals: meals,
      };
    });
  } catch (error) {
    throw new Error(
      "Failed to translate Deliveroo data to the required format"
    );
  }

  return newData;
};

// console.log(translate(data));

module.exports = translate;
