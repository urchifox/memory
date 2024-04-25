const cats = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/cats-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/cats-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/cats-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/cats-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/cats-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/cats-6.jpg',
  'description': '',
}];

const cars = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/cars-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/cars-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/cars-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/cars-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/cars-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/cars-6.jpg',
  'description': '',
}];

const flowers = [{
  'id': 'YdAqiUkUoWA',
  'url': 'img/flowers-1.jpg',
  'description': '',
}, {
  'id': 'hX_hf2lPpUU',
  'url': 'img/flowers-2.jpg',
  'description': '',
}, {
  'id': 'w1JE5duY62M',
  'url': 'img/flowers-3.jpg',
  'description': '',
}, {
  'id': '3tYZjGSBwbk',
  'url': 'img/flowers-4.jpg',
  'description': '',
}, {
  'id': 'NoXUQ54pDac',
  'url': 'img/flowers-5.jpg',
  'description': '',
}, {
  'id': 'OZhYgZh0bAg',
  'url': 'img/flowers-6.jpg',
  'description': '',
}];

const imageCollection = {
  flowers, cats, cars,
};

const results = [
  { name: 'Аня', stepsCount: 16 },
  { name: 'Вася', stepsCount: 12 },
  { name: 'Петя', stepsCount: 19 }
];

const getImages = (theme) => {
  const pairs = imageCollection[theme].map((image) => ({
    ...image,
    id: `${image.id}-1`,
  }));

  const images = [...imageCollection[theme], ...pairs];

  if (RANDOMIZED) {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [images[i], images[j]] = [images[j], images[i]]; 
    }
  }

  return images;
}
