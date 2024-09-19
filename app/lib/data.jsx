import { connectToDatabase } from '@lib/database';
import { escapeRegExp } from '@lib/utils';
import { ObjectId } from "mongodb";



const ITEMS_PER_PAGE = 6;

export async function fetchNewsCountPages(query) {
  const safeQuery = escapeRegExp(query);
  const regexQuery = new RegExp(safeQuery, 'i');

  try {
    const client = await connectToDatabase();
    const count = await client.collection('news')
      .countDocuments({
        $or: [
          { title: { $regex: regexQuery } },
          { content: { $regex: regexQuery } },
          { data: { $regex: regexQuery } },
        ],
      })

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch news data.');
  }
}

export async function fetchFilteredNews(query, currentPage) {
  let client = await connectToDatabase(); 
  
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

   // Экранируем обратный слеш и другие специальные символы
  const safeQuery = escapeRegExp(query);

  const regexQuery = new RegExp(safeQuery, 'i');

  try {
    const news = await client.collection('news')
      .find({
        $or: [
          { title: { $regex: regexQuery } },
          { content: { $regex: regexQuery } },
          { data: { $regex: regexQuery } },
        ],
      })
      .skip(offset)
      .limit(ITEMS_PER_PAGE)
      .toArray();

    return news;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}


export async function fetchNewsById(id) {
  let client = await connectToDatabase();

  // Проверяем, является ли переданный id валидным ObjectId
  if (!ObjectId.isValid(id)) {
    console.log(`Invalid ObjectId: ${id}`);
    return null;
  }

  const objectId = new ObjectId(id);
  console.log(`Fetching news by id: ${id}`);
  console.log(`Fetching news by ObjectId: ${objectId}`);
  
  try {
    const newsItem = await client.collection('news')
      .findOne({ _id: new ObjectId(id) });

    return {
      _id: newsItem._id.toString(),
      title: newsItem.title,
      content: newsItem.content,
      createDate: newsItem.createDate,
      picture: newsItem.picture || null,
    };

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch new by id.');
  }
}


export async function fetchNewsPages(query = "") {
  let client = await connectToDatabase();

  // Если есть запрос для фильтрации, используем его
  const filter = query ? { title: { $regex: query, $options: "i" } } : {};

  // Получаем все новости с фильтрацией, если есть
  const news = await client.collection("news").find(filter).toArray();

  // Преобразуем каждый документ в объект, чтобы можно было вернуть в качестве пропса
  return news.map((newsItem) => ({
    _id: newsItem._id.toString(),
    title: newsItem.title,
    content: newsItem.content,
    createDate: newsItem.createDate,
    picture: newsItem.picture || null,
  }));
}