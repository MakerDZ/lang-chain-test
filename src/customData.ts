import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from "fs";
import * as path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const filePath = path.join(__dirname, '..', 'data.txt');
const apiKey = process.env.OPENAI_API_KEY;

export const searchCustomData = async (search : string) => {
  // Initialize the LLM to use to answer the question.
  const model = new OpenAI({ openAIApiKey: apiKey, temperature: 0.9 });
  console.log(`${model.modelName} is ready to server.`);
  const text = fs.readFileSync(filePath, "utf8");
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);

  // Create a vector store from the documents.
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

  // Create a chain that uses the OpenAI LLM and HNSWLib vector store.
  const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());
  const res = await chain.call({
    query: search,
  });
  return res.text;
};