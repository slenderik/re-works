import { connectToDatabase } from '@lib/database';

export async function fetchNews() {
    try {
  
      const client = await connectToDatabase();
      const data = await client.collection('news').find().toArray();
      return data;
  
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }
  