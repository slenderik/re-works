import client from "@lib/db";
import { sanitizeQuery } from "@lib/utils";

export const ITEMS_PER_PAGE = 6;

let db = client.db("works");

export async function fetchNewsCountPages(query = "") {
  const safeQuery = sanitizeQuery(query);
  const regexQuery = new RegExp(safeQuery, "i");

  try {
    const count = await db.collection("news")
      .countDocuments({
        $or: [
          { title: { $regex: regexQuery } },
          { content: { $regex: regexQuery } },
          { publicDate: { $regex: regexQuery } },
        ],
      })

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;

  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch news data.");
  }
}

export async function fetchFilteredNews(query = "", offset = 1) {
  offset = (offset - 1) * ITEMS_PER_PAGE;

  // Экранируем обратный слеш и другие специальные символы
  const safeQuery = sanitizeQuery(query);

  const regexQuery = new RegExp(safeQuery, "i");

  try {
    const news = await db.collection("news")
      .find({
        $or: [
          { title: { $regex: regexQuery } },
          { content: { $regex: regexQuery } },
          { publicDate: { $regex: regexQuery } },
        ],
      })
      .sort({ publicDate: -1 })  // -1 для убывающего порядка, 1 для возрастающего
      .skip(offset)
      .limit(ITEMS_PER_PAGE)
      .toArray();
    return news;

  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}


export async function fetchNewsById(id) {

  try {
    const newsItem = await db.collection("news")
      .findOne({ _id: id });

    if (!newsItem) return null;

    return {
      _id: newsItem._id.toString(),
      title: newsItem.title,
      content: newsItem.content,
      createDate: newsItem.publicDate,
      picture: newsItem.image || null,
    };

  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch new by id.");
  }
}


export async function fetchNews(query = "") {
  // Если есть запрос для фильтрации, используем его
  const filter = query ? { title: { $regex: query, $options: "i" } } : {};

  // Получаем все новости с фильтрацией, если есть
  const news = await db.collection("news").find(filter).toArray();

  // Преобразуем каждый документ в объект, чтобы можно было вернуть в качестве пропса
  return news.map((newsItem) => ({
    _id: newsItem._id.toString(),
    title: newsItem.title,
    content: newsItem.content,
    createDate: newsItem.publicDate,
    picture: newsItem.image || null,
  }));
}

// /////////////////
// RESUME 
// /////////////////

export async function fetchResumeCount(query = "") {
  // Экранируем потенциально опасные символы в запросе
  const safeQuery = sanitizeQuery(query);
  const regexQuery = new RegExp(safeQuery, "i");

  try {
    // Если запрос пустой, возвращаем общее количество документов
    if (!safeQuery) {
      return await db.collection("resume").countDocuments();
    }

    // Создаем динамический объект для фильтрации
    const searchConditions = [
      { pol: { $regex: regexQuery } },
      { aboutMe: { $regex: regexQuery } },
      { vacancy: { $regex: regexQuery } },
      { schedule: { $regex: regexQuery } },
      { education: { $regex: regexQuery } },
      { experience: { $regex: regexQuery } },
      { employment: { $regex: regexQuery } },
      { achievements: { $regex: regexQuery } },
      { educationSpecial: { $regex: regexQuery } }
    ];

    // Обрабатываем числовые поля
    if (!isNaN(Number(safeQuery))) {
      const numQuery = Number(safeQuery);
      searchConditions.push(
        { age: numQuery },
        { salary: numQuery }
      );
    }

    // Возвращаем количество резюме, соответствующих запросу
    const resumeCount = await db.collection("resume")
      .countDocuments({ $or: searchConditions });

    if (!resumeCount) return 0;
    
    return resumeCount;

  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch resume count.");
  }
}


export async function fetchFilteredResumes(query = "", offset = 1) {
  offset = (offset - 1) * ITEMS_PER_PAGE;

  // Экранируем обратный слеш и другие специальные символы
  const safeQuery = sanitizeQuery(query);

  const regexQuery = new RegExp(safeQuery, "i");

  try {
    // Создаем динамический объект для фильтрации
    const searchConditions = [
      { pol: { $regex: regexQuery } },
      { aboutMe: { $regex: regexQuery } },
      { vacancy: { $regex: regexQuery } },
      { schedule: { $regex: regexQuery } },
      { education: { $regex: regexQuery } },
      { experience: { $regex: regexQuery } },
      { employment: { $regex: regexQuery } },
      { achievements: { $regex: regexQuery } },
      { educationSpecial: { $regex: regexQuery } }
    ];

    // Обработка числовых полей отдельно
    if (!isNaN(Number(safeQuery))) {
      const numQuery = Number(safeQuery);
      searchConditions.push(
        { age: numQuery },
        { salary: numQuery }
      );
    }

    const resumes = await db.collection("resume")
      .find({ $or: searchConditions })
      .skip(offset)
      .limit(ITEMS_PER_PAGE)
      .toArray();

    if (!resumes) return null;

    return resumes;

  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}


export async function fetchResumeById(id) {

  try {
    const resumeItem = await db.collection("resume")
      .findOne({ _id: id });
    
    if (!resumeItem) return null;

    return {
      _id: resumeItem._id.toString(),
      date: resumeItem.createdAt,
      picture: resumeItem.image1 || null,
      salary: resumeItem.salary,

      sex: resumeItem.pol,
      age: resumeItem.age,
      about: resumeItem.aboutMe,
      vacancy: resumeItem.vacancy,
      schedule: resumeItem.schedule,
      education: resumeItem.education,
      experience: resumeItem.experience,
      employment: resumeItem.employment,
      achievements: resumeItem.achievements,
      familyStatus: resumeItem.familyStatus,
      educationSpecial: resumeItem.educationSpecial,
    };

  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch new by id.");
  }
}


export async function fetchResumes(query = "") {
  // Если есть запрос для фильтрации, используем его
  const filter = query ? { title: { $regex: query, $options: "i" } } : {};

  // Получаем все новости с фильтрацией, если есть
  const news = await db.collection("resume").find(filter).toArray();

  // Преобразуем каждый документ в объект, чтобы можно было вернуть в качестве пропса
  return news.map((newsItem) => ({
    _id: newsItem._id.toString(),
    title: newsItem.title,
    content: newsItem.content,
    createDate: newsItem.createDate,
    picture: newsItem.picture || null,
  }));
}