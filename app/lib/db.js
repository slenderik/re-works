import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;

if (process.env.NODE_ENV === "development") {
  // В режиме разработки используем глобальную переменную, чтобы значение
  // сохранялось между перезагрузками модулей, вызванными HMR (Hot Module Replacement).
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
  }
  client = global._mongoClient;
} else {
  // В production-режиме лучше не использовать глобальную переменную.
  client = new MongoClient(uri, options);
}

// Экспортируем MongoClient, чтобы он мог быть использован в других функциях.
export default client;