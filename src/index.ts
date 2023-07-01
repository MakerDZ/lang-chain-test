import { OpenAI } from "langchain/llms/openai";
import dotenv from 'dotenv';
import { run } from "./customData";
dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
const model = new OpenAI({ openAIApiKey: apiKey, temperature: 0.9 });
console.log(`${model.modelName} is ready to use.`);

async function askQuesiton(question : string){
    const res = await model.call(question);
    return res;
}

// askQuesiton("what is large language model?").then(res => console.log(res));

run().then( res => console.log(res));