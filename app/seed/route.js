import { fakerRU as faker } from '@faker-js/faker';
import { client } from'@lib/db';


function createRandomNews() {
  return {
    title: faker.lorem.sentence(),       // случайный заголовок
    content: faker.lorem.paragraphs(3),  // случайный контент
    picture: faker.image.url(),          // случайная картинка (URL)
    createDate: faker.date.recent()      // случайная дата создания
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

async function seedNews(db) {
  try {
    let collection = db.collection('news');

    let news = faker.helpers.multiple(createRandomNews, {
      count: 5,
    });

    await collection.insertMany(news);
    console.log('News collection seeded!');
  }
  catch (error) {
    console.error('Error seeding news collection:', error);
  }
}



export async function GET() {
  let db = clien.db("news");

  try {
    await seedNews(db);

    return new Response(JSON.stringify({ message: 'Database seeded successfully' }), { status: 200 });

  } catch (error) {
    console.error('Error seeding database:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}