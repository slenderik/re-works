import { connectToDatabase } from '@lib/database';


const ITEMS_PER_PAGE = 6;

export async function fetchNewsPages(query) {
  const regexQuery = new RegExp(query, 'i');

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
  const regexQuery = new RegExp(query, 'i');

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